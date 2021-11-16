import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginStackNavigator from './LoginStackNavigator';
import { BottomTabNavigatorTeacher } from "./TabNavigator";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginStackNavigator" component={LoginStackNavigator}
        options={{ headerShown: false }} />
      <Stack.Screen name="BottomTabNavigatorTeacher" component={BottomTabNavigatorTeacher}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default AppNavigator;