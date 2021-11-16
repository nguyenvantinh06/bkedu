import React, { Component } from 'react';
import { View, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, Platform, Image } from 'react-native';
import MyTextInput from './components/MyTextInput';
import MyButton from './components/MyButton';

export default class LoginScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/intro/intro1.png')} style={styles.logo} />
        </View>
        <View style={styles.loginContainer}>
          <MyTextInput placeholder={'Email'} />
          <MyTextInput placeholder={'Mật khẩu'} isPassword={true} />
          <TouchableOpacity
            style={styles.forgotPasswordContainer}
            onPress={() => { this.props.navigation.navigate('ForgotPasswordScreen') }}
          >
            <Text style={styles.forgotPassword}> Quên mật khẩu? </Text>
          </TouchableOpacity>
          <MyButton
            title={'Đăng nhập'}
            backgroundColor={'#00A9B7'}
            onPress={() => { this.props.navigation.navigate('BottomTabNavigatorTeacher') }}
          />
          <View style={styles.or}>
            <Text> Hoặc </Text>
          </View>
          <MyButton
            title={'Đăng nhập với Google'}
            backgroundColor={'#FE6666'}
          />
        </View>
        <View style={styles.bottomText}>
          <Text style={{ color: '#B5B5B5' }}> Chưa có tài khoản? </Text>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('SignUpScreen') }}>
            <Text style={{ color: '#00A9B7' }}>Đăng ký ngay </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28A490'
  },
  logoContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: -20
  },
  loginContainer: {
    flex: 6,
    backgroundColor: 'white',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  forgotPasswordContainer: {
    height: 20,
    marginTop: 10,
    marginRight: 10,
    alignItems: 'flex-end',
  },
  forgotPassword: {
    color: '#00A9B7'
  },
  or: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
  },
  bottomText: {
    flex: 0.5,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row'
  }
})
