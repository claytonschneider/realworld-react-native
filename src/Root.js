import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { REDUX_STORE } from './store';
import { registerScenes } from './scenes';

registerScenes(REDUX_STORE, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Home',
    title: 'Home'
  }
});
