import * as actionTypes from "../actions/actionTypes";

import initialState from './initialState'

const todoReducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case actionTypes.GET_TODO_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

export default todoReducer;