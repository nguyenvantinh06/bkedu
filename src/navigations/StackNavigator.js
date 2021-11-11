import React from "react";
import {Button} from "react-native"
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreenTeacher from "../screens/HomeScreen/HomeScreenTeacher/HomeScreenTeacher";
import ClassScreenTeacher from "../screens/ClassScreen/ClassScreenTeacher/ClassScreenTeacher";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import { Ionicons } from '@expo/vector-icons'; 


const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#28A490",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerTitleAlign: "center",
  //headerTitle:'Trang chur'
  headerRight: () => <Ionicons style={{right:10}} name="notifications" size={24} color="white" />
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={HomeScreenTeacher} options={{title: 'Trang chủ'}} />
      <Stack.Screen name="Class" component={ClassScreenTeacher} options={{title: 'Chung'}} />
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="ProfileS" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ProfileStackNavigator };