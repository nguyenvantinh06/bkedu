import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView, View, FlatList, StyleSheet, Text, Alert, TouchableOpacity, Modal, Image, TextInput, Dimensions } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import StudentsClassScreenTeacher from "../screens/ClassScreen/ClassScreenTeacher/StudentsClassTeacher";
import ClassScreenTeacher from "../screens/ClassScreen/ClassScreenTeacher/ClassScreenTeacher";
import ExercisesClassScreenTeacher from "../screens/ClassScreen/ClassScreenTeacher/ExerciseClassTeacher";
import DetailSubmitTeacher from "../screens/ClassScreen/ClassScreenTeacher/components/DetailSubmitTeacher"
import DetailExerciseTeacher from "../screens/ClassScreen/ClassScreenTeacher/components/DetailExerciseTeacher"

import { MainStackNavigatorTeacherScreen, ProfileStackNavigatorTeacherScreen } from "./StackNavigator";

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#28A490",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerTitleAlign: "center",
  headerRight: () => <Ionicons style={{ right: 10 }} name="notifications" size={24} color="white" />
};


const TabBottomTeacher = createBottomTabNavigator();

const BottomTabNavigatorTeacher = () => {
  return (
    <TabBottomTeacher.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'BottomTabHome') {
            iconName = 'home'
            return <Entypo name={iconName} size={size} color={color} />;
          } else if (route.name === 'BottomTabProfile') {
            iconName = 'person'
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#00A9B7',
        tabBarInactiveTintColor: '#B5B5B5',
      })}>
      <TabBottomTeacher.Screen name="BottomTabHome" component={MainStackNavigatorTeacherScreen} options={{ title: 'Trang chủ', headerShown: false }} />
      <TabBottomTeacher.Screen name="BottomTabProfile" component={ProfileStackNavigatorTeacherScreen} options={{ title: 'Trang cá nhân', headerShown: false }} />
    </TabBottomTeacher.Navigator>
  );
};

const Stack = createNativeStackNavigator();

function ExerciseStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ExercisesClass" component={ExercisesClassScreenTeacher}
        options={{ headerShown: false }} />
      <Stack.Screen name="DetailExerciseTeacher" component={DetailExerciseTeacher}
        options={{ headerShown: false }} />
      <Stack.Screen name="DetailSubmitTeacher" component={DetailSubmitTeacher}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const TabBottomTeacherClass = createBottomTabNavigator();

const BottomTabNavigatorTeacherClass = () => {
  return (
    <TabBottomTeacherClass.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name == 'DetailClass') {
            iconName = 'assignment'
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else if (route.name == 'StudentsClass') {
            iconName = 'group'
            return <MaterialIcons name={iconName} size={size} color={color} />;
          }
          else if (route.name == 'ExerciseStackNavigator') {
            iconName = 'import-contacts'
            return <MaterialIcons name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#00A9B7',
        tabBarInactiveTintColor: '#B5B5B5',
        tabBarLabel: route.name == "DetailClass" ? "Chung" : route.name == "StudentsClass" ? "Học sinh" : "Bài tập"
      })}>
      <TabBottomTeacherClass.Screen
        name="DetailClass"
        component={ClassScreenTeacher}
        options={{ headerShown: false}}
      />
      <TabBottomTeacherClass.Screen
        name="StudentsClass"
        component={StudentsClassScreenTeacher}
        options={{ headerShown: false }} />
      <TabBottomTeacherClass.Screen
        name="ExerciseStackNavigator"
        component={ExerciseStackNavigator}
        options={{ headerShown: false }} />
    </TabBottomTeacherClass.Navigator>
  );
};

export { BottomTabNavigatorTeacher, BottomTabNavigatorTeacherClass };