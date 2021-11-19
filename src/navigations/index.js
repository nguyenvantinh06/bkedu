import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginStackNavigator from './LoginStackNavigator';
import { BottomTabNavigatorTeacher } from "./TabNavigator";
import Welcome from '../screens/WelcomeScreen/Welcome';
import { BottomTabNavigatorTeacherClass } from './TabNavigator';
import { BottomTabNavigatorStudent } from './TabNavigatorStudent';
import { BottomTabNavigatorStudentClass } from './TabNavigatorStudent'
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen'

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome}
        options={{ headerShown: false }} />
      <Stack.Screen name="LoginStackNavigator" component={LoginStackNavigator}
        options={{ headerShown: false }} />
      <Stack.Screen name="BottomTabNavigatorTeacher" component={BottomTabNavigatorTeacher}
        options={{ headerShown: false }} />
      <Stack.Screen name="ClassScreen" component={BottomTabNavigatorTeacherClass}
        options={{ headerShown: false }} />
      <Stack.Screen name="BottomTabNavigatorStudent" component={BottomTabNavigatorStudent}
        options={{ headerShown: false }} />
      <Stack.Screen name="BottomTabNavigatorStudentClass" component={BottomTabNavigatorStudentClass}
        options={{ headerShown: false }} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen}
        options={{ headerShown: true }} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
