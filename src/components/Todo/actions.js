/**
 * Created by lenovo on 2019/10/14.
 */
let nextTodoId = 0;

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  }
};

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};

export const cartNumAdd = index => {
  return {
    type: 'GOODS_ADD',
    index,
  }
};


export const cartNumMinus = index => {
  return {
    type: 'GOODS_MINUS',
    index,
  }
};

export const cartNumChange = (index, num) => {
  return {
    type: 'GOODS_CHANGE',
    index,
    num
  }
};

export const getRequest = (data) => {
  return {
    type: 'GET_REQUEST',
    data,
  }
};