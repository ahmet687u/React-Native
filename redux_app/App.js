/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import Form from './components/Form';
import * as todoActions from './redux/actions/todoAction';
import style from './assets/css/style';
import Todo from './components/Todo';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todoActions.getTodoItems());
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: "#f2f2f2", flex: 1}}>
      <ScrollView>
        <Text style={style.title}>TODO APP</Text>
        <Form />
        <Todo />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
