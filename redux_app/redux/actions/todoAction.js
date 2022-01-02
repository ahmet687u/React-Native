import * as actionTypes from './actionTypes';
import {base_url} from '../../base';

export const getTodosSuccess = todos => ({
  type: actionTypes.GET_TODO_ITEMS,
  payload: todos,
});

export const addTodoSuccess = todo => ({
  type: actionTypes.ADD_TODO_ITEMS,
  payload: todo,
});

export const getTodoItems = () => {
  return async dispatch => {
    return fetch(`${base_url}todos`)
      .then(result => result.json())
      .then(res => dispatch(getTodosSuccess(res)))
      .catch(err => console.log(err));
  };
};

export const addTodoItem = todo => {
  return async dispatch => {
    return fetch(`${base_url}todos`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    })
      .then(res => res.json())
      .then(res => dispatch(addTodoSuccess(todo)))
      .catch(err => console.log(err));
  };
};

export const deleteTodoItem = id => {
  return async dispatch => {
    return fetch(`${base_url}todos/${id}`, {method: "DELETE"})
      .catch(err => console.log(err));
  }
}
