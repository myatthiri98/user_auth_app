import { StatusBar, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Navigator from './src/routes/Navigator';
import { Colors } from './src/constants/styles';
import AuthContextProvider, { AuthContext } from './src/store/auth-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const Root = () => {
    const [isTryingLogin, setisTryingLogin] = useState(true);
    const authCtx = useContext(AuthContext);

    useEffect(() => {
      const fetchToken = async () => {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken) {
          authCtx.authenticate(storedToken);
        }
        setisTryingLogin(false);
      };

      fetchToken();
    }, []);

    if (isTryingLogin) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={Colors.primary500} />
        </View>
      );
    }

    return <Navigator />;
  };

  return (
    <AuthContextProvider>
      <StatusBar
        animated={true}
        backgroundColor={Colors.primary500}
        barStyle={'dark-content'}
      />
      <Root />
    </AuthContextProvider>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
