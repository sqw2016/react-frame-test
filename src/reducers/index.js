/**
 * Created by lenovo on 2019/10/14.
 */
import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import goodsList from './goodsList';
import requestData from './requestData';

import model from '../models'; // 导入models

const obj = {};
obj[model.namespace] = function(state = model.state, action) {
  console.log(model)
  const reducerNames = Object.keys(model.reducers);

  for (let i = 0, len = reducerNames.length; i < len; i++) {
    if (`${model.namespace}/${reducerNames[i]}` === action.type) {
      return model.reducers[reducerNames[i]](state, action);
    }
  }

  return state;
};

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  goodsList,
  ...obj
});

export default todoApp;