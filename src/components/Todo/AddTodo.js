/**
 * Created by lenovo on 2019/10/14.
 */
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

function AddTodo({ dispatch }) {
  let inputValue;
  return (
    <div>
      <form onSubmit={ e => {
        e.preventDefault()
        if (!inputValue.value.trim()) {
          return;
        }
        dispatch(addTodo(inputValue.value));
        inputValue.value = '';
      }}>
        <input ref={node => { inputValue = node;}} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default connect()(AddTodo);