import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, View, StyleSheet, Dimensions } from 'react-native';
import MyTextInput from './components/MyTextInput';
import MyButton from './components/MyButton';

const { width, height } = Dimensions.get('screen');

export class ForgotPasswordScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.instruction}>
          <Text style={styles.instructionText}> Vui lòng nhập địa chỉ email và bạn sẽ nhận được mã xác thực đặt lại mật khẩu qua email </Text>
        </View>
        <MyTextInput placeholder={'Nhập email'} isPassword={true} />
        <MyButton title={'Tiếp theo'} backgroundColor={'#00A9B7'} onPress={() => { this.props.navigation.navigate('VerifyScreen') }} />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  instruction: {
    height: height * 0.06,
    width: width * 0.9,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  instructionText: {
    color: '#2F3E4A',
    fontSize: 16
  }
})


export default ForgotPasswordScreen
