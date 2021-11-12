import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import StudentsClassScreenTeacher from "../screens/ClassScreen/ClassScreenTeacher/StudentsClassTeacher";
import ClassScreenTeacher from "../screens/ClassScreen/ClassScreenTeacher/ClassScreenTeacher";
import ExercisesClassScreenTeacher from "../screens/ClassScreen/ClassScreenTeacher/ExerciseClassTeacher";

import { MainStackNavigatorTeacherScreen, ProfileStackNavigatorTeacherScreen, ClassStackNavigatorTeacherScreen, StudentsStackNavigatorTeacherScreen, ExercisesStackNavigatorTeacherScreen } from "./StackNavigator";

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#28A490",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerTitleAlign: "center",
  headerRight: () => <Ionicons style={{right:10}} name="notifications" size={24} color="white" />
};


const TabBottomTeacher = createBottomTabNavigator();

const BottomTabNavigatorTeacher = () => {
  return (
    <TabBottomTeacher.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home'
          return <Entypo name={iconName} size={size} color={color} />;
        } else if (route.name === 'Profile') {
          iconName = 'person'
          return <Ionicons name={iconName} size={size} color={color} />;
        }        
      },
      tabBarActiveTintColor: '#00A9B7',
      tabBarInactiveTintColor: '#B5B5B5',
    }), screenOptionStyle}>
      <TabBottomTeacher.Screen name="Home" component={MainStackNavigatorTeacherScreen} options={{title:'Trang chủ', headerShown: false}} />
      <TabBottomTeacher.Screen name="Profile" component={ProfileStackNavigatorTeacherScreen} options={{title:'Trang cá nhân', headerShown: false}}/>
    </TabBottomTeacher.Navigator>
  );
};

const TabBottomTeacherClass = createBottomTabNavigator();

const BottomTabNavigatorTeacherClass = () => {
  return (
    <TabBottomTeacherClass.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'DetailClass') {
          iconName = 'assignment'
          return <MaterialIcons name={iconName} size={size} color={color} />;
        } else if (route.name === 'StudentsClass') {
          iconName = 'group'
          return <MaterialIcons name={iconName} size={size} color={color} />;
        }
        else if (route.name === 'ExercisesClass') {
          iconName = 'import-contacts'
          return <MaterialIcons name={iconName} size={size} color={color} />;
        }            
      },
      tabBarActiveTintColor: '#00A9B7',
      tabBarInactiveTintColor: '#B5B5B5',
    })}>
      <TabBottomTeacherClass.Screen name="DetailClass" component={ClassScreenTeacher} options={{title:'Chi tiết', headerStyle: {
          backgroundColor: '#28A490',
          },
          headerTintColor: "white",
          headerBackTitle: "Back",
          headerTitleAlign: "center",
          headerRight: () => <Ionicons style={{right:10}} name="notifications" size={24} color="white" />
        }}
      />
      <TabBottomTeacherClass.Screen name="StudentsClass" component={StudentsStackNavigatorTeacherScreen} options={{title:'Danh sách học sinh', headerShown: false}}/>
      <TabBottomTeacherClass.Screen name="ExercisesClass" component={ExercisesStackNavigatorTeacherScreen} options={{title:'Bài tập', headerShown: false}} />
    </TabBottomTeacherClass.Navigator>
  );
};

export {BottomTabNavigatorTeacher, BottomTabNavigatorTeacherClass};