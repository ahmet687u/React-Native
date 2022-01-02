import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import * as todoActions from '../redux/actions/todoAction';
import style from '../assets/css/style';

const Form = () => {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();

  const {input, formBox, button, text_white} = style;

  const submitHandler = () => {
    if (todo) {
      const obj = {
        todo_text: todo,
      };
      dispatch(todoActions.addTodoItem(obj));
      dispatch(todoActions.getTodoItems());
      setTodo('');
    } else {
      alert("Girdi alanı boş bırakılamaz !..");
    }
  };

  return (
    <View style={formBox}>
      <TextInput
        onChangeText={value => setTodo(value)}
        value={todo}
        placeholder="Todo Ekle"
        style={input}
      />
      <TouchableOpacity
        onPress={submitHandler}
        style={button}
        activeOpacity={0.8}>
        <Text style={text_white}>EKLE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
