import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import {login} from '../util/auth';
import AuthContent from '../components/Auth/AuthContent';
import { AuthContext } from '../store/auth-context';

const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);


  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      console.log('Received token:', token);
      authCtx.authenticate(token);
      console.log('Trying to authenticate...');
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!',
      );
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
};

export default LoginScreen;

const styles = StyleSheet.create({});
