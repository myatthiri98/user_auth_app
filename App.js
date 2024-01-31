import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import Navigator from './src/routes/Navigator';
import {Colors} from './src/constants/styles';
import AuthContextProvider, {AuthContext} from './src/store/auth-context';

const App = () => {
  return (
    <AuthContextProvider>
      <StatusBar
        animated={true}
        backgroundColor={Colors.primary500}
        barStyle={'dark-content'}
      />
      <Navigator />
    </AuthContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
