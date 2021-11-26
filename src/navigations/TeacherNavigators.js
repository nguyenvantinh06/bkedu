import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import StudentsClassScreenTeacher from "../screens/ClassScreen/ClassScreenTeacher/StudentsClassTeacher";
import ClassScreenTeacher from "../screens/ClassScreen/ClassScreenTeacher/ClassScreenTeacher";
import ExercisesClassScreenTeacher from "../screens/ClassScreen/ClassScreenTeacher/ExerciseClassTeacher";
import DetailSubmitTeacher from "../screens/ClassScreen/ClassScreenTeacher/components/DetailSubmitTeacher"
import DetailExerciseTeacher from "../screens/ClassScreen/ClassScreenTeacher/components/DetailExerciseTeacher"
import HomeScreenTeacher from "../screens/HomeScreen/HomeScreenTeacher/HomeScreenTeacher";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#28A490",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
    headerTitleAlign: "center",
    headerRight: () => <Ionicons style={{ right: 10 }} name="notifications" size={24} color="white" onPress={() => Alert.alert('Notification icon pressed')} />
};

const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';
  
    if (routeName === 'ClassScreen') {
      return false;
    }
  
    return true;
}

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
      <TabBottomTeacher.Screen 
        name="BottomTabHome" 
        component={MainStackNavigatorTeacherScreen} 
        options={{ 
            title: 'Trang chủ', 
            headerShown: false, 
            // ({ route }) => ({
            //     tabBarVisible: this.getTabBarVisibility(route)
            // })
            
        }} />
      <TabBottomTeacher.Screen name="BottomTabProfile" component={ProfileScreen} options={{ title: 'Trang cá nhân', headerShown: false }} />
    </TabBottomTeacher.Navigator>
  );
};


const MainStackNavigatorTeacher = createStackNavigator();

const MainStackNavigatorTeacherScreen = ({navigation, route}) => {
    // if (route.state.index === 0) {
    //     navigation.setOptions({tabBarVisible: true});
    //     } else {
    //     navigation.setOptions({tabBarVisible: false});
    // }
    // navigation.setOptions({ tabBarVisible: false })
    return (
    <MainStackNavigatorTeacher.Navigator screenOptions={screenOptionStyle}>
      <MainStackNavigatorTeacher.Screen name="Home" component={HomeScreenTeacher} options={{ title: 'Trang chủ'}} />
      <MainStackNavigatorTeacher.Screen name="ClassScreen" component={BottomTabNavigatorTeacherClass} options={{ headerShown: false }} />
    </MainStackNavigatorTeacher.Navigator>
  );
}


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
          else if (route.name === 'ExerciseStackNavigator') {
            iconName = 'import-contacts'
            return <MaterialIcons name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#00A9B7',
        tabBarInactiveTintColor: '#B5B5B5',
      })}>
      <TabBottomTeacherClass.Screen
        name="DetailClass"
        component={ClassScreenTeacher}
        options={{
          title: 'Chi tiết',
          headerStyle: {
            backgroundColor: '#28A490'
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center'
          },
          headerShown: true,
          headerRight: () => <Ionicons style={{ right: 10 }} name="notifications" size={24} color="white" />
        }}
      />
      <TabBottomTeacherClass.Screen
        name="StudentsClass"
        component={StudentsClassScreenTeacher}
        options={{
          title: 'Danh sách học sinh',
          headerStyle: {
            backgroundColor: '#28A490'
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center'
          },
          headerShown: true,
          headerRight: () => <Ionicons style={{ right: 10 }} name="notifications" size={24} color="white" />
        }} />
      <TabBottomTeacherClass.Screen
        name="ExerciseStackNavigator"
        component={ExerciseStackNavigator}
        options={{
          title: 'Bài tập',
          headerStyle: {
            backgroundColor: '#28A490'
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center'
          },
          headerShown: true,
          headerRight: () => <Ionicons style={{ right: 10 }} name="notifications" size={24} color="white" />
        }} />
    </TabBottomTeacherClass.Navigator>
  );
};


const ExerciseStackNavigatorTeacher = createStackNavigator();

const ExerciseStackNavigator = () => {
  return (
    <ExerciseStackNavigatorTeacher.Navigator screenOptions={screenOptionStyle}>
      <ExerciseStackNavigator.Screen name="ExercisesClassScreenTeacher" component={ExercisesClassScreenTeacher} options={{ title: 'Bài tập' }} />
      <MainStackNavigatorTeacher.Screen name="ListSubmitExercise" component={DetailExerciseTeacher} options={{ title: 'Danh sách bài nộp' }} />
      <MainStackNavigatorTeacher.Screen name="DetailSubmitExercise" component={DetailSubmitTeacher} options={{ title: 'Chi tiết' }} />
    </ExerciseStackNavigatorTeacher.Navigator>
  );
}

export {BottomTabNavigatorTeacher, MainStackNavigatorTeacherScreen, BottomTabNavigatorTeacherClass, ExerciseStackNavigator}