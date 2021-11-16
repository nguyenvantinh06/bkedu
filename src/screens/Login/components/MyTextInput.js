import React from 'react'
import { View, TextInput, StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen');

const MyTextInput = ({ placeholder, isPassword }) => {
  return (
    <View style={styles.container}>
      <TextInput secureTextEntry={isPassword ? true : false} placeholder={placeholder} style={styles.textInput} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#B5B5B5',
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 20
  },
  textInput: {
    height: 40,
    width: width * 0.75,
    borderColor: "#B5B5B5",
    borderBottomWidth: 1,
  }
})


export default MyTextInput
