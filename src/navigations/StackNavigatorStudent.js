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
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#28A490",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerTitleAlign: "center",
  headerRight: () =>
    <TouchableOpacity onPress={() => { navigation.navigate('NotificationScreen') }}>
      <Ionicons style={{ right: 10 }} name="notifications" size={24} color="white" />
    </TouchableOpacity>
};

const MainStackNavigatorStudent = createStackNavigator();
const MainStackNavigatorStudentScreen = ({ navigation }) => {
  return (
    <MainStackNavigatorStudent.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#28A490",
      },
      headerTintColor: "white",
      headerBackTitle: "Back",
      headerTitleAlign: "center",
      headerRight: () =>
        <TouchableOpacity onPress={() => { navigation.navigate('NotificationScreen') }}>
          <Ionicons style={{ right: 10 }} name="notifications" size={24} color="white" />
        </TouchableOpacity>
    }}>
      <MainStackNavigatorStudent.Screen name="Home" component={HomeScreenStudent} options={{ title: 'Trang ch???' }} />
    </MainStackNavigatorStudent.Navigator>
  );
}
const ProfileStackNavigatorStudent = createStackNavigator();
const ProfileStackNavigatorStudentScreen = ({ navigation }) => {
  return (
    <ProfileStackNavigatorStudent.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#28A490",
      },
      headerTintColor: "white",
      headerBackTitle: "Back",
      headerTitleAlign: "center",
      headerRight: () =>
        <TouchableOpacity onPress={() => { navigation.navigate('NotificationScreen') }}>
          <Ionicons style={{ right: 10 }} name="notifications" size={24} color="white" />
        </TouchableOpacity>
    }}>
      <ProfileStackNavigatorStudent.Screen name="Profile" component={ProfileScreen} options={{ title: 'Trang c?? nh??n' }} />
    </ProfileStackNavigatorStudent.Navigator>
  );
}
const ClassmateStackNavigatorStudent = createStackNavigator();
const ClassmateStackNavigatorStudentScreen = ({ navigation }) => {
  return (
    <ClassmateStackNavigatorStudent.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#28A490",
      },
      headerTintColor: "white",
      headerBackTitle: "Back",
      headerTitleAlign: "center",
      headerRight: () =>
        <TouchableOpacity onPress={() => { navigation.navigate('NotificationScreen') }}>
          <Ionicons style={{ right: 10 }} name="notifications" size={24} color="white" />
        </TouchableOpacity>
    }}>
      <ClassmateStackNavigatorStudent.Screen name="Classmate" component={ClassmateScreen} options={{ title: 'Danh s??ch l???p ' }} />
    </ClassmateStackNavigatorStudent.Navigator>
  );
}
const CalendarStackNavigatorStudent = createStackNavigator();
const CalendarStackNavigatorStudentScreen = ({ navigation }) => {
  return (
    <CalendarStackNavigatorStudent.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#28A490",
      },
      headerTintColor: "white",
      headerBackTitle: "Back",
      headerTitleAlign: "center",
      headerRight: () =>
        <TouchableOpacity onPress={() => { navigation.navigate('NotificationScreen') }}>
          <Ionicons style={{ right: 10 }} name="notifications" size={24} color="white" />
        </TouchableOpacity>
    }}>
      <CalendarStackNavigatorStudent.Screen name="Calendar" component={CalendarScreen} options={{ title: 'Th???i kh??a bi???u' }} />
    </CalendarStackNavigatorStudent.Navigator>
  );
}

const FileSubjectStackNavigatorStudent = createStackNavigator();
const FileSubjectStackNavigatorStudentScreen = () => {
  return (
    <FileSubjectStackNavigatorStudent.Navigator screenOptions={screenOptionStyle}>
      <FileSubjectStackNavigatorStudent.Screen name="File" component={FileSubjectScreen} options={{ title: 'T???p' }} />
    </FileSubjectStackNavigatorStudent.Navigator>
  );
}

const SubjectStackNavigatorStudent = createStackNavigator();
const SubjectStackNavigatorStudentScreen = () => {
  return (
    <SubjectStackNavigatorStudent.Navigator screenOptions={screenOptionStyle}>
      <SubjectStackNavigatorStudent.Screen name="SubjectScreen" component={SubjectScreenStudent} options={{ headerShown: false }} />
    </SubjectStackNavigatorStudent.Navigator>
  );
}

const AssignmentSubjectStackNavigatorStudent = createStackNavigator();
const AssignmentSubjectStackNavigatorStudentScreen = () => {
  return (
    <AssignmentSubjectStackNavigatorStudent.Navigator options={{ headerShown: false }}>
      <AssignmentSubjectStackNavigatorStudent.Screen name="AssignmentSubject" component={AssignmentSubjectScreen} options={{ title: 'b??i t???p', headerShown: false }} />
      <AssignmentSubjectStackNavigatorStudent.Screen name="AssignmentSubmitSubject" component={AssignmentSubmitScreenStudent} options={{ title: 'b??i t???p ch??a ho??n th??nh', headerShown: false }} />
      <AssignmentSubjectStackNavigatorStudent.Screen name="AssignmentSubmittedSubject" component={AssignmentSubmittedScreenStudent} options={{ title: 'b??i t???p ???? ho??n th??nh', headerShown: false }} />
    </AssignmentSubjectStackNavigatorStudent.Navigator>
  );
}

export {
  MainStackNavigatorStudentScreen, ProfileStackNavigatorStudentScreen, ClassmateStackNavigatorStudentScreen,
  CalendarStackNavigatorStudentScreen, FileSubjectStackNavigatorStudentScreen, SubjectStackNavigatorStudentScreen, AssignmentSubjectStackNavigatorStudentScreen
};