/**
 * Created by lenovo on 2019/9/23.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';
import createSagaMiddleware from 'redux-saga';

import BasicRouter from './app';
import './global.less';
import mySaga from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();


const log = store => next => action => {
  console.log('dispatching', action);
  const r = next(action);
  console.log('next state', store.getState());
  return r;
};


const store = createStore(todoApp, applyMiddleware(log, sagaMiddleware));

sagaMiddleware.run(mySaga);

// let next = store.dispatch;

// store.dispatch = function (action) {
//   console.log('dispatching', action);
//   const r = next(action);
//   console.log('next state', store.getState());
//   return r;
// };

ReactDom.render(
  <Provider store={store}>
    <BasicRouter />
  </Provider>,
  document.getElementById('root')
);