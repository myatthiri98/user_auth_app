import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import {login} from '../util/auth';

const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const loginHandler = async ({email, password}) => {
    setIsAuthenticating(true);
    try{await login(email, password);}
    catch (error){
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!'
      )
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
