import {StyleSheet} from 'react-native';
// @ts-ignore
import React from 'react';
import RootStack from './src/nav/RootStack';
import store from './src/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
