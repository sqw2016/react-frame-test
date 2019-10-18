/**
 * Created by lenovo on 2019/9/23.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';

import BasicRouter from './app';
import './global.less';

const store = createStore(todoApp);

let next = store.dispatch;

store.dispatch = function (action) {
  console.log('dispatching', action);
  const r = next(action);
  console.log('next state', store.getState());
  return r;
};

const log = store => next => action => {
  console.log('dispatching', action);
  const r = next(action);
  console.log('next state', store.getState());
  return r;
};

ReactDom.render(
  <Provider store={store}>
    <BasicRouter />
  </Provider>,
  document.getElementById('root')
);