/**
 * Created by lenovo on 2019/10/28.
 *
 * 主要功能：统一处理Redux和Saga
 */
import React from 'react';
import { call, put, takeEvery } from 'redux-saga/effects';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

const app = {
  _models: [],
  _reducers: {},
  store: {},
  router: (props) => {
    return (
      <Provider store={app.store}>
        {props.children}
      </Provider>
    );
  },
  load,
  start
};



/**
 * 加载model，对model中的reducers和effect进行处理，然后存入到app._models里
 * @param model:
 *  {
 *    namespace: '',
 *    reducers: {},
 *    effects: {}
 *  }
 */
function load(model) {
  // 处理reducers，将处理后的reducers存入app
  app._reducers[model.namespace] = function(state = model.state, action) {
    const reducerNames = Object.keys(model.reducers);
    for (let i = 0, len = reducerNames.length; i < len; i++) {
      if (prefixName(model.namespace, reducerNames[i]) === action.type) {
        return model.reducers[reducerNames[i]](state, action);
      }
    }
    return state;
  };
  app._models.push(model);
}

function prefixName(namespace, actionType) {
  return `${namespace}/${actionType}`;
}

function *mySaga () {
  for (let i = 0, len = app._models.length; i < len; i++) {
    const model = app._models[i];
    if (model.effects) {
      const keys = Object.keys(model.effects);
      for (let j = 0, l = keys.length; j < l; j++) {
        const k = keys[j];
        const newType = prefixName(model.namespace, k);
        yield takeEvery(newType, action => model.effects[k](action, {call, put: function (action) {
          action.type = prefixName(model.namespace, action.type);
          return put(action);
        }}));
      }
    }
  }
}

/**
 * 将处理过的model分别进过redux和saga处理
 */
function start() {
  const sagaMiddleware = createSagaMiddleware();

  const reducers = combineReducers({
    ...app._reducers
  });

  app.store = createStore(reducers, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(mySaga);
}

export default app;