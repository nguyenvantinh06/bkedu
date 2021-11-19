import React, { Component } from 'react'
import { View, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, Platform, Image } from 'react-native';
import MyTextInput from './components/MyTextInput';
import MyButton from './components/MyButton';
import { RadioButton } from 'react-native-paper';

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: 'teacher'
    }
  }

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
          <MyTextInput placeholder={'Họ tên'} />
          <MyTextInput placeholder={'Mật khẩu'} isPassword={true} />
          <View style={styles.radioButtonContainer}>
            <RadioButton
              value="teacher"
              status={this.state.checked == 'teacher' ? 'checked' : 'unchecked'}
              onPress={() => this.setState({ checked: 'teacher' })}
            />
            <Text> Giáo viên </Text>
            <RadioButton
              value="student"
              status={this.state.checked == 'student' ? 'checked' : 'unchecked'}
              onPress={() => this.setState({ checked: 'student' })}
            />
            <Text> Học sinh </Text>
          </View>
          <MyButton title={'Đăng ký'} backgroundColor={'#00A9B7'} />
          <View style={styles.or}>
            <Text> Hoặc </Text>
          </View>
          <MyButton title={'Đăng ký với Google'} backgroundColor={'#FE6666'} />
        </View>
        <View style={styles.bottomText}>
          <Text style={{ color: '#B5B5B5' }}> Đã có tài khoản? </Text>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('LoginScreen') }}>
            <Text style={{ color: '#00A9B7' }}>Đăng nhập ngay </Text>
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
  radioButtonContainer: {
    height: 20,
    marginTop: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
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
