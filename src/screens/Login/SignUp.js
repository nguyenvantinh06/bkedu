import React, { Component } from 'react'
import { View, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, Platform, Image, Alert } from 'react-native';
import MyTextInput from './components/MyTextInput';
import MyButton from './components/MyButton';
import { RadioButton } from 'react-native-paper';
import _ from "lodash";

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: 'teacher',
      email: "",
      name: "",
      password: ""
    }
  }

  handleChangeEmail = _.debounce((email) => {
    this.setState({
      email: email
    })
  }, 300)
  
  handleChangeName = _.debounce((name) => {
    this.setState({
      name: name
    })
  }, 300)

  handleChangePassword = _.debounce((password) => {
    this.setState({
      password: password
    })
  }, 300)

  handleSignUp = async() => {
    if (this.state.checked == "teacher") {
      fetch("https://bkedu-backend.herokuapp.com/v1/teachers", {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          name: this.state.name,
          password: this.state.password
        })
      }).then(res => res.json())
      .then(data => {
        if (data.code == 201) {
          Alert.alert("Thành công", "Đăng ký thành công",
            [{
              text: "Ok",
              onPress: () => this.props.navigation.navigate('LoginScreen')
            }])
          // this.props.navigation.navigate(this.props.navigation.navigate('LoginScreen'));
        } else Alert.alert("Email or password is wrong!");
      }).catch(error => console.log(error));
    } else {
      fetch("https://bkedu-backend.herokuapp.com/v1/students", {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          name: this.state.name,
          password: this.state.password
        })
      }).then(res => res.json())
      .then(data => {
        if (data.code == 201) {
          Alert.alert("Thành công", "Đăng ký thành công",
            [{
              text: "Ok",
              onPress: () => this.props.navigation.navigate('LoginScreen')
            }])
          // this.props.navigation.navigate(this.props.navigation.navigate('LoginScreen'));
        } else Alert.alert("Email or password is wrong!");
      }).catch(error => console.log(error));
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Đăng ký ngay</Text>
        </View>
        <View style={styles.loginContainer}>
          <MyTextInput placeholder={'Email'} onChangeValue={this.handleChangeEmail}/>
          <MyTextInput placeholder={'Họ tên'} onChangeValue={this.handleChangeName}/>
          <MyTextInput placeholder={'Mật khẩu'} isPassword={true} onChangeValue={this.handleChangePassword}/>
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
          <MyButton title={'Đăng ký'} backgroundColor={'#00A9B7'} 
          onPress={this.handleSignUp}/>
          <View style={styles.bottomText}>
            <Text style={{ color: '#B5B5B5' }}> Đã có tài khoản? </Text>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('LoginScreen')}}>
              <Text style={{ color: '#00A9B7' }}>Đăng nhập ngay </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28A490',
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 30,
    justifyContent: 'flex-end'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24
  },
  loginContainer: {
    flex: 3,
    backgroundColor: 'white',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  radioButtonContainer: {
    height: 20,
    marginTop: 30,
    marginRight: 10,
    marginBottom: 10,
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
    flexDirection: 'row',
    marginTop: 30,
    marginRight: "auto",
    marginLeft: "auto"
  }
})
