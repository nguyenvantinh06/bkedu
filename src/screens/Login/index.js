import React, { Component } from 'react';
import { View, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, Platform, Image, Alert, TextInput } from 'react-native';
import MyTextInput from './components/MyTextInput';
import MyButton from './components/MyButton';
import _ from "lodash";
import jwt from "jwt-decode";
import AnimatedLoader from "react-native-animated-loader";

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      access_token: "",
      refresh_token: "",
      visible: false,
    }
  }

  handleChangeEmail = _.debounce((email) => {
    this.setState({
      email: email
    })
  }, 300)

  handleChangePassword = _.debounce((password) => {
    this.setState({
      password: password
    })
  }, 300)

  handleLogin = async () => {
    this.setState({ visible: true })
    fetch("https://bkedu-backend.herokuapp.com/v1/auth", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then(res => res.json()).then(data => {
      this.setState({ visible: false })
      if (data.code == 200) {
        this.setState({ access_token: data.result.access_token, refresh_token: data.result.refresh_token });
        const user = jwt(data.result.access_token);
        this.props.navigation.navigate(user.role == "Student" ? "BottomTabNavigatorStudent" : "BottomTabNavigatorTeacher");
      } else Alert.alert("Email hoặc mật khẩu không đúng!");
    }).catch((error) => {
      this.setState({ visible: false })
      Alert.alert("Có lỗi xảy ra, vui lòng thử lại");
      console.error(error);
    });
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
          <MyTextInput placeholder={'Email'} onChangeValue={this.handleChangeEmail} />
          <MyTextInput placeholder={'Mật khẩu'} isPassword={true} onChangeValue={this.handleChangePassword} />
          <TouchableOpacity
            style={styles.forgotPasswordContainer}
            onPress={() => { this.props.navigation.navigate('ForgotPasswordScreen') }}
          >
            <Text style={styles.forgotPassword}> Quên mật khẩu? </Text>
          </TouchableOpacity>
          <MyButton
            title={'Đăng nhập'}
            backgroundColor={'#00A9B7'}
            onPress={this.handleLogin}
          />
          <View style={styles.or}>
            <Text> Hoặc </Text>
          </View>
          <MyButton
            title={'Đăng nhập với Google'}
            backgroundColor={'#FE6666'}
            onPress={() => { this.props.navigation.navigate('BottomTabNavigatorStudent') }}
          />
        </View>
        <View style={styles.bottomText}>
          <Text style={{ color: '#B5B5B5' }}> Chưa có tài khoản? </Text>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('SignUpScreen') }}>
            <Text style={{ color: '#00A9B7' }}>Đăng ký ngay </Text>
          </TouchableOpacity>
        </View>
        <AnimatedLoader
          visible={this.state.visible}
          overlayColor="rgba(255,255,255,0.75)"
          source={require("../../assets/72659-loader-vb.json")}
          animationStyle={styles.lottie}
          speed={1}
        />
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
  },
  lottie: {
    width: 100,
    height: 100
  }
})
