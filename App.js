/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import RouterComponent from './src/Router';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDJt1mlbxfmaXpIzqqBIK4De4gyVGRamac',
      authDomain: 'manager-dcaed.firebaseapp.com',
      databaseURL: 'https://manager-dcaed.firebaseio.com',
      projectId: 'manager-dcaed',
      storageBucket: 'manager-dcaed.appspot.com',
      messagingSenderId: '373133984232'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RouterComponent />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
