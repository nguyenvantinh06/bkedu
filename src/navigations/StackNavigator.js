import React from "react";
import { Button, Alert } from "react-native"
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreenTeacher from "../screens/HomeScreen/HomeScreenTeacher/HomeScreenTeacher";
import ClassScreenTeacher from "../screens/ClassScreen/ClassScreenTeacher/ClassScreenTeacher";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import { Ionicons } from '@expo/vector-icons';

import StudentsClassScreenTeacher from "../screens/ClassScreen/ClassScreenTeacher/StudentsClassTeacher";
import ExercisesClassScreenTeacher from "../screens/ClassScreen/ClassScreenTeacher/ExerciseClassTeacher";

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#28A490",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerTitleAlign: "center",
  headerRight: () => <Ionicons style={{ right: 10 }} name="notifications" size={24} color="white" onPress={() => Alert.alert('Notification icon pressed')} />
};

const MainStackNavigatorTeacher = createStackNavigator();

const MainStackNavigatorTeacherScreen = () => {
  return (
    <MainStackNavigatorTeacher.Navigator screenOptions={screenOptionStyle}>
      <MainStackNavigatorTeacher.Screen name="Home" component={HomeScreenTeacher} options={{ title: 'Trang chủ' }} />
      {/* <MainStackNavigatorTeacher.Screen name="ClassScreen" component={BottomTabNavigatorTeacherClass} options={{ title: 'Chi tiết' }} /> */}
    </MainStackNavigatorTeacher.Navigator>
  );
}
// const HomeStackNavigatorTeacher = createStackNavigator();

// const HomeStackNavigatorTeacherScreen = () => {
//   return (
//     <HomeStackNavigatorTeacher.Navigator screenOptions={screenOptionStyle}>
//       <HomeStackNavigatorTeacherScreen.Screen name="Home" component={HomeScreenTeacher} options={{title:'Trang cá nhân'}}/>
//     </HomeStackNavigatorTeacher.Navigator>
//   );
// }
const ProfileStackNavigatorTeacher = createStackNavigator();

const ProfileStackNavigatorTeacherScreen = () => {
  return (
    <ProfileStackNavigatorTeacher.Navigator screenOptions={screenOptionStyle}>
      <ProfileStackNavigatorTeacher.Screen name="Profile" component={ProfileScreen} options={{ title: 'Trang cá nhân' }} />
    </ProfileStackNavigatorTeacher.Navigator>
  );
}

const StudentsStackNavigatorTeacher = createStackNavigator();

const StudentsStackNavigatorTeacherScreen = () => {
  return (
    <StudentsStackNavigatorTeacher.Navigator screenOptions={screenOptionStyle}>
      <StudentsStackNavigatorTeacher.Screen name="StudentClass" component={StudentsClassScreenTeacher} options={{ title: 'Danh sách học sinh' }} />
    </StudentsStackNavigatorTeacher.Navigator>
  );
}

const ExercisesStackNavigatorTeacher = createStackNavigator();

// const ExercisesStackNavigatorTeacherScreen = () => {
//   return (
//     <ExercisesStackNavigatorTeacher.Navigator screenOptions={screenOptionStyle}>
//       <ExercisesStackNavigatorTeacher.Screen name="ExercisesClass" component={ExercisesClassScreenTeacher} options={{ title: 'Bài tập' }} />
//     </ExercisesStackNavigatorTeacher.Navigator>
//   );
// }

export { MainStackNavigatorTeacherScreen, ProfileStackNavigatorTeacherScreen, StudentsStackNavigatorTeacherScreen };