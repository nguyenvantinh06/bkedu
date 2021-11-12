import React from "react";
import {Button} from "react-native"
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreenTeacher from "../screens/HomeScreen/HomeScreenTeacher/HomeScreenTeacher";
import ClassScreenTeacher from "../screens/ClassScreen/ClassScreenTeacher/ClassScreenTeacher";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import { Ionicons } from '@expo/vector-icons';
import ClassTeacher from "../screens/ClassScreen/ClassScreenTeacher/index"
import StudentsClassScreenTeacher from "../screens/ClassScreen/ClassScreenTeacher/StudentsClassTeacher";
import ExercisesClassScreenTeacher from "../screens/ClassScreen/ClassScreenTeacher/ExerciseClassTeacher"; 



const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#28A490",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerTitleAlign: "center",
  headerRight: () => <Ionicons style={{right:10}} name="notifications" size={24} color="white" />
};

const MainStackNavigatorTeacher = createStackNavigator();

const MainStackNavigatorTeacherScreen = () => {
  return (
    <MainStackNavigatorTeacher.Navigator screenOptions={screenOptionStyle}>
      <MainStackNavigatorTeacher.Screen name="Home" component={HomeScreenTeacher} options={{title: 'Trang chủ'}} />
      <MainStackNavigatorTeacher.Screen name="DetailClass" component={ClassScreenTeacher} options={{title: 'Chi tiết'}} />
    </MainStackNavigatorTeacher.Navigator>
  );
}

const ProfileStackNavigatorTeacher = createStackNavigator();

const ProfileStackNavigatorTeacherScreen = () => {
  return (
    <ProfileStackNavigatorTeacher.Navigator screenOptions={screenOptionStyle}>
      <ProfileStackNavigatorTeacher.Screen name="Profile" component={ProfileScreen} options={{title:'Trang cá nhân'}}/>
    </ProfileStackNavigatorTeacher.Navigator>
  );
}

const StudentsStackNavigatorTeacher = createStackNavigator();

const StudentsStackNavigatorTeacherScreen = () => {
  return (
    <StudentsStackNavigatorTeacher.Navigator screenOptions={screenOptionStyle}>
      <StudentsStackNavigatorTeacher.Screen name="StudentClass" component={StudentsClassScreenTeacher} options={{title:'Danh sách học sinh'}}/>
    </StudentsStackNavigatorTeacher.Navigator>
  );
}

const ExercisesStackNavigatorTeacher = createStackNavigator();

const ExercisesStackNavigatorTeacherScreen = () => {
  return (
    <ExercisesStackNavigatorTeacher.Navigator screenOptions={screenOptionStyle}>
      <ExercisesStackNavigatorTeacher.Screen name="ExercisesClass" component={ExercisesClassScreenTeacher} options={{title:'Bài tập'}}/>
    </ExercisesStackNavigatorTeacher.Navigator>
  );
}

const ClassStackNavigatorTeacher = createStackNavigator();

const ClassStackNavigatorTeacherScreen = () => {
  return (
    <ClassStackNavigatorTeacher.Navigator screenOptions={screenOptionStyle}>
      <ClassStackNavigatorTeacher.Screen name="DetailClass" component={HomeScreenTeacher} options={{title: 'Thông tin Chung'}} />
      <ClassStackNavigatorTeacher.Screen name="StudentClass" component={ClassScreenTeacher} options={{title: 'Danh sách học sinh'}} />
      <ClassStackNavigatorTeacher.Screen name="ExerciseClass" component={HomeScreenTeacher} options={{title: 'Bài tập'}} />
    </ClassStackNavigatorTeacher.Navigator>
  );
}

export { MainStackNavigatorTeacherScreen, ProfileStackNavigatorTeacherScreen, ClassStackNavigatorTeacherScreen, StudentsStackNavigatorTeacherScreen, ExercisesStackNavigatorTeacherScreen };