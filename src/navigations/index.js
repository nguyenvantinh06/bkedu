import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginStackNavigator from './LoginStackNavigator';
import { BottomTabNavigatorTeacher } from "./TabNavigator";
import Welcome from '../screens/WelcomeScreen/Welcome';
import { BottomTabNavigatorTeacherClass } from './TabNavigator';

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
    </Stack.Navigator>
  );
}

export default AppNavigator;