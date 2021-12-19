import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screens/WelcomeScreen/Welcome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import HomeTeacher from "./src/screens/HomeScreen/HomeScreenTeacher/index"
import ClassTeacher from "./src/screens/ClassScreen/ClassScreenTeacher/index"
import Constants from "expo-constants";

import { NavigationContainer } from '@react-navigation/native';
import LoginStackNavigator from './src/navigations/LoginStackNavigator';
import AppNavigator from './src/navigations/index'

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isFirstTimeLoad, setIsFirstTimeLoad] = useState(false);

  // AsyncStorage if this already loaded or not
  // if yes render the actual app
  // if not then we are going display this welcome screen.

  const checkForFirstTimeLoaded = async () => {
    const result = await AsyncStorage.getItem('isFirstTimeOpen');
    if (result === null) setIsFirstTimeLoad(true);
    setLoading(false);
  };

  useEffect(() => {
    checkForFirstTimeLoaded();
  }, []);


  const handleDone = () => {
    setIsFirstTimeLoad(false);
    AsyncStorage.setItem('isFirstTimeOpen', 'no');
  };

  if (loading) return null;

  //Test IntroSlide
  // return (
  //   <>
  //     <StatusBar style="light" />
  //     <Welcome onDone={handleDone} slides={slides} />
  //   </>
  // )

  return (
    // <>
    //   <StatusBar style="light" />
    //   <ClassTeacher />
    // </>
    <>
    <StatusBar style="light" />
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});