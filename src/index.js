/**
 * Created by lenovo on 2019/9/23.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import todoApp from './reducers';

import BasicRouter from './app';
import './global.less';

import goodsList from './models/goodsList';
import requestData from './models';
import global from './models/global';
import app from './components/ReduxSaga';

// const sagaMiddleware = createSagaMiddleware();


const log = store => next => action => {
  console.log('dispatching', action);
  const r = next(action);
  console.log('next state', store.getState());
  return r;
};

app.load(goodsList);
app.load(requestData);
app.load(global);

app.start();

const ReduxSaga = app.router;
// const store = createStore(todoApp, applyMiddleware(log, sagaMiddleware));

// sagaMiddleware.run(mySaga);

// let next = store.dispatch;

// store.dispatch = function (action) {
//   console.log('dispatching', action);
//   const r = next(action);
//   console.log('next state', store.getState());
//   return r;
// };

ReactDom.render(
  <ReduxSaga>
    <BasicRouter />
  </ReduxSaga>,
  document.getElementById('root')
);