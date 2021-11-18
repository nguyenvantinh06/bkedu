import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreenStudent from "../screens/HomeScreen/HomeScreenStudent/HomeScreenStudent";
import CalendarScreen from "../screens/CalendarScreen/CalendarScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import ClassmateScreen from "../screens/ClassmateScreen/ClassmateScreen";
import AssignmentSubmitScreenStudent from "../screens/ClassScreen/ClassScreenStudent/AssignmentSubmitScreenStudent";
import AssignmentSubmittedScreenStudent from "../screens/ClassScreen/ClassScreenStudent/AssignmentSubmittedScreenStudent";

import SubjectScreenStudent from "../screens/ClassScreen/ClassScreenStudent/SubjectScreenStudent";
import FileSubjectScreen from "../screens/ClassScreen/ClassScreenStudent/FileSubjectScreen";
import AssignmentSubjectScreen from "../screens/ClassScreen/ClassScreenStudent/AssignmentSubjectScreen";

import {
  MainStackNavigatorStudentScreen, ProfileStackNavigatorStudentScreen, ClassmateStackNavigatorStudentScreen,
  CalendarStackNavigatorStudentScreen, FileSubjectStackNavigatorStudentScreen, SubjectStackNavigatorStudentScreen, AssignmentSubjectStackNavigatorStudentScreen
} from "./StackNavigatorStudent";
import { TouchableOpacity } from 'react-native';

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#28A490",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerTitleAlign: "center",
  headerRight: ({ navigation }) =>
    <TouchableOpacity onPress={() => { navigation.navigate('NotificationScreen') }}>
      <Ionicons style={{ right: 10 }} name="notifications" size={24} color="white" />
    </TouchableOpacity>
};

const TabBottomStudent = createBottomTabNavigator();

const BottomTabNavigatorStudent = () => {
  return (
    <TabBottomStudent.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeStudent') {
            iconName = 'home'
            return <Entypo name={iconName} size={size} color={color} />;
          } else if (route.name === 'ProfileStudent') {
            iconName = 'person'
            return <Ionicons name={iconName} size={size} color={color} />;
          }
          else if (route.name === 'CalendarStudent') {
            iconName = "calendar-outline"
            return <Ionicons name={iconName} size={size} color={color} />;
          }
          else if (route.name === 'ClassmateStudent') {
            iconName = "list-outline"
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#00A9B7',
        tabBarInactiveTintColor: '#B5B5B5',
      })}>
      <TabBottomStudent.Screen name="HomeStudent" component={MainStackNavigatorStudentScreen} options={{ title: 'Trang chủ', headerShown: false }} />
      <TabBottomStudent.Screen name="CalendarStudent" component={CalendarStackNavigatorStudentScreen} options={{ title: 'Lịch học', headerShown: false }} />
      <TabBottomStudent.Screen name="ClassmateStudent" component={ClassmateStackNavigatorStudentScreen} options={{ title: 'Danh sách lớp', headerShown: false }} />
      <TabBottomStudent.Screen name="ProfileStudent" component={ProfileStackNavigatorStudentScreen} options={{ title: 'Trang cá nhân', headerShown: false }} />
    </TabBottomStudent.Navigator>
  );
};

const TabBottomStudentClass = createBottomTabNavigator();

const BottomTabNavigatorStudentClass = () => {
  return (
    <TabBottomStudentClass.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'AssignmentSubjectScreen') {
            iconName = 'assignment'
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Subject') {
            iconName = 'group'
            return <MaterialIcons name={iconName} size={size} color={color} />;
          }
          else if (route.name === 'FileSubjectScreen') {
            iconName = 'import-contacts'
            return <MaterialIcons name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#00A9B7',
        tabBarInactiveTintColor: '#B5B5B5',
      })}>
      <TabBottomStudentClass.Screen name="Subject" component={SubjectStackNavigatorStudentScreen} options={{
        title: 'Chung', headerStyle: {
          backgroundColor: '#28A490',
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
        headerTitleAlign: "center",
        headerShown: false,
        headerRight: () => <Ionicons style={{ right: 10 }} name="notifications" size={24} color="white" />
      }}
      />
      <TabBottomStudentClass.Screen name="AssignmentSubjectScreen" component={AssignmentSubjectStackNavigatorStudentScreen} options={{ title: 'Bài tập', headerShown: false }} />
      <TabBottomStudentClass.Screen name="FileSubjectScreen" component={FileSubjectStackNavigatorStudentScreen} options={{ title: 'Tệp', headerShown: false }} />
    </TabBottomStudentClass.Navigator>
  );
};

export { BottomTabNavigatorStudent, BottomTabNavigatorStudentClass };