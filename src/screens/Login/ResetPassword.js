import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, View, StyleSheet, Dimensions } from 'react-native';
import MyTextInput from './components/MyTextInput';
import MyButton from './components/MyButton';

const { width, height } = Dimensions.get('screen');

export class ResetPasswordScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <MyTextInput placeholder={'Mật khẩu mới'} isPassword={true} />
        <MyTextInput placeholder={'Xác nhận mật khẩu'} isPassword={true} />
        <MyButton title={'Thiết lập lại'} backgroundColor={'#00A9B7'} onPress={() => { this.props.navigation.navigate('LoginScreen') }} />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})


export default ResetPasswordScreen
