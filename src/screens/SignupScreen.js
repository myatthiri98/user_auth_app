import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthContent from '../components/Auth/AuthContent';
import createUser from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay'

const SignupScreen = () => {
 const [isAuthenticating,setIsAuthenticating] =useState(false);

const signupHandler =async({email,password}) =>{
  setIsAuthenticating(true);
    try {await createUser(email,password);}
    catch (error){
      Alert.alert( 'Authentication failed',
      'Could not create user, please check your input and try again later.')
    }
    setIsAuthenticating(false)
  }
 if (isAuthenticating)
 {
return <LoadingOverlay message="Creating user..." />
 }

  return (
   <AuthContent onAuthenticate={signupHandler}/>
  )
}

export default SignupScreen

const styles = StyleSheet.create({})