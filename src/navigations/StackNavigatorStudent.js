import React from "react";
import { Button, Alert } from "react-native"
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreenStudent from "../screens/HomeScreen/HomeScreenStudent/HomeScreenStudent";
import CalendarScreen from "../screens/CalendarScreen/CalendarScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import ClassmateScreen from "../screens/ClassmateScreen/ClassmateScreen";
import AssignmentSubmitScreenStudent from "../screens/ClassScreen/ClassScreenStudent/AssignmentSubmitScreenStudent";
import AssignmentSubmittedScreenStudent from "../screens/ClassScreen/ClassScreenStudent/AssignmentSubmittedScreenStudent";
import SubjectScreenStudent from "../screens/ClassScreen/ClassScreenStudent/SubjectScreenStudent";
import FileSubjectScreen from "../screens/ClassScreen/ClassScreenStudent/FileSubjectScreen";
import AssignmentSubjectScreen from "../screens/ClassScreen/ClassScreenStudent/AssignmentSubjectScreen";
import { BottomTabNavigatorStudentClass } from "./TabNavigatorStudent";
import { Ionicons } from '@expo/vector-icons';

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#28A490",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerTitleAlign: "center",
  headerRight: () => <Ionicons style={{ right: 10 }} name="notifications" size={24} color="white" onPress={() => Alert.alert('Notification icon pressed')} />
};

const MainStackNavigatorStudent = createStackNavigator();
const MainStackNavigatorStudentScreen = () => {
  return (
    <MainStackNavigatorStudent.Navigator screenOptions={screenOptionStyle}>
      <MainStackNavigatorStudent.Screen name="Home" component={HomeScreenStudent} options={{ title: 'Trang chủ' }} />
    </MainStackNavigatorStudent.Navigator>
  );
}
const ProfileStackNavigatorStudent = createStackNavigator();
const ProfileStackNavigatorStudentScreen = () => {
  return (
    <ProfileStackNavigatorStudent.Navigator screenOptions={screenOptionStyle}>
      <ProfileStackNavigatorStudent.Screen name="Profile" component={ProfileScreen} options={{ title: 'Trang cá nhân' }} />
    </ProfileStackNavigatorStudent.Navigator>
  );
}
const ClassmateStackNavigatorStudent = createStackNavigator();
const ClassmateStackNavigatorStudentScreen = () => {
  return (
    <ClassmateStackNavigatorStudent.Navigator screenOptions={screenOptionStyle}>
      <ClassmateStackNavigatorStudent.Screen name="Classmate" component={ClassmateScreen} options={{ title: 'Danh sách lớp ' }} />
    </ClassmateStackNavigatorStudent.Navigator>
  );
}
const CalendarStackNavigatorStudent = createStackNavigator();
const CalendarStackNavigatorStudentScreen = () => {
  return (
    <CalendarStackNavigatorStudent.Navigator screenOptions={screenOptionStyle}>
      <CalendarStackNavigatorStudent.Screen name="Calendar" component={CalendarScreen} options={{ title: 'Thời khóa biểu' }} />
    </CalendarStackNavigatorStudent.Navigator>
  );
}

const FileSubjectStackNavigatorStudent = createStackNavigator();
const FileSubjectStackNavigatorStudentScreen = () => {
  return (
    <FileSubjectStackNavigatorStudent.Navigator screenOptions={screenOptionStyle}>
      <FileSubjectStackNavigatorStudent.Screen name="File" component={FileSubjectScreen} options={{ title: 'Tệp' }} />
    </FileSubjectStackNavigatorStudent.Navigator>
  );
}

const SubjectStackNavigatorStudent = createStackNavigator();
const SubjectStackNavigatorStudentScreen = () => {
  return (
    <SubjectStackNavigatorStudent.Navigator screenOptions={screenOptionStyle}>
      <SubjectStackNavigatorStudent.Screen name="Subject" component={SubjectScreenStudent} options={{ title: 'Chung' }} />
    </SubjectStackNavigatorStudent.Navigator>
  );
}

const AssignmentSubjectStackNavigatorStudent = createStackNavigator();
const AssignmentSubjectStackNavigatorStudentScreen = () => {
  return (
    <AssignmentSubjectStackNavigatorStudent.Navigator screenOptions={screenOptionStyle}>
      <AssignmentSubjectStackNavigatorStudent.Screen name="AssignmentSubject" component={AssignmentSubjectScreen} options={{ title: 'bài tập' }} />
      <AssignmentSubjectStackNavigatorStudent.Screen name="AssignmentSubmitSubject" component={AssignmentSubmitScreenStudent} options={{ title: 'bài tập chưa hoàn thành' }} />
      <AssignmentSubjectStackNavigatorStudent.Screen name="AssignmentSubmittedSubject" component={AssignmentSubmittedScreenStudent} options={{ title: 'bài tập đã hoàn thành' }} />
    </AssignmentSubjectStackNavigatorStudent.Navigator>
  );
}

export {
  MainStackNavigatorStudentScreen, ProfileStackNavigatorStudentScreen, ClassmateStackNavigatorStudentScreen,
  CalendarStackNavigatorStudentScreen, FileSubjectStackNavigatorStudentScreen, SubjectStackNavigatorStudentScreen, AssignmentSubjectStackNavigatorStudentScreen
};