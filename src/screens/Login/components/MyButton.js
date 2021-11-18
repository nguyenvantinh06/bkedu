import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const MyButton = ({ title, backgroundColor, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]} onPress={onPress}>
      <Text style={styles.title}> {title} </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 20
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default MyButton
