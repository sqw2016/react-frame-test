/**
 * Created by lenovo on 2019/10/14.
 */
import React from 'react';

import Todo from './Todo';

function TodoList({ todos, onTodoClick }) {
  return (
    <ul>
      {
        todos.map((item, index) => <Todo {...item} key={index} onClick={ () => onTodoClick(item.id)} />)
      }
    </ul>
  );
}

export default TodoList;