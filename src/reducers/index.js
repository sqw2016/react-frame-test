/**
 * Created by lenovo on 2019/10/14.
 */
import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import goodsList from './goodsList';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  goodsList,
});

export default todoApp;