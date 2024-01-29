import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigator from './src/routes/Navigator';
import { Colors } from './src/constants/styles';

const App = () => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={Colors.primary500}
        barStyle={'dark-content'}
      />
      <Navigator />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
