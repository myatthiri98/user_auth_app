import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/styles';

const FlatButton = ({ children, onPress }) => {
  return (
    
    <Pressable
    style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    onPress={onPress}
  >
    <View>
      <Text style={styles.buttonText}>{children}</Text>
    </View>
  </Pressable>
  )
}

export default FlatButton

const styles = StyleSheet.create({
    button: {
      paddingVertical: 6,
      paddingHorizontal: 12,
    },
    pressed: {
      opacity: 0.7,
    },
    buttonText: {
      textAlign: 'center',
      color: Colors.primary100,
    },
  });