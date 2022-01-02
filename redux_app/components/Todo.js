import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import style from '../assets/css/style';
import * as todoActions from '../redux/actions/todoAction';

const Todo = () => {
  const todos = useSelector(state => state.todoReducer);
  const dispatch = useDispatch();
  const {
    empty_todo,
    todo_list,
    todo_listBx,
    todo_text,
    todo_button,
    text_white,
  } = style;

  const deleteTodo = id => {
    dispatch(todoActions.deleteTodoItem(id))
    dispatch(todoActions.getTodoItems())
  }

  const renderEmpty = () => {
    return (
      <View>
        <Text style={empty_todo}>
          Kayıtlı todo bulunmamakta. Lütfen todo eklemeyi deneyin
        </Text>
      </View>
    );
  };

  const renderItem = () => {
    return (
      <View style={todo_listBx}>
        {todos.map(todo => (
          <View style={todo_list} key={todo.id}>
            <Text style={todo_text}> {todo.todo_text} </Text>
            <TouchableOpacity
              onPress={() => deleteTodo(todo.id)}
              style={todo_button}>
              <Text style={text_white}>SİL</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  };

  return <View>{todos.length !== 0 ? renderItem() : renderEmpty()}</View>;
};

export default Todo;
