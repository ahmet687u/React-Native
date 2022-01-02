/**
 * @format
 */

import React, {Component} from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import configureStore from './redux/reducers/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

const RNRedux = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => RNRedux);
