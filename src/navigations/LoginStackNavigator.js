import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/Login';
import ForgotPassword from '../screens/Login/ForgotPassword';
import SignUpScreen from '../screens/Login/SignUp';
import VerifyScreen from '../screens/Login/Verify';
import ResetPasswordScreen from '../screens/Login/ResetPassword';

const Stack = createNativeStackNavigator();

function LoginStackNavigator() {
  return (
    <Stack.Navigator

    >
      <Stack.Screen name="LoginScreen" component={LoginScreen}
        options={{ headerShown: false }} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPassword}
        options={{
          title: 'Lấy lại mật khẩu',
          headerStyle: {
            backgroundColor: '#28A490'
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center'
          },
        }}
      />
      <Stack.Screen
        name="VerifyScreen"
        component={VerifyScreen}
        options={{
          title: 'Xác minh',
          headerStyle: {
            backgroundColor: '#28A490'
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center'
          },
        }}
      />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{
          title: 'Đặt lại mật khẩu',
          headerStyle: {
            backgroundColor: '#28A490'
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center'
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default LoginStackNavigator;