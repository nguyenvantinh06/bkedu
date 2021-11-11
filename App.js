import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screens/WelcomeScreen/Welcome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import HomeTeacher from "./src/screens/HomeScreen/HomeScreenTeacher/index"

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

  const slides = [
    {
      key: 1,
      image: require('./src/assets/intro/intro1.png'),
      desc: 'Chào mừng bạn đến với BKEDU',
      backgroundColor: '#28A490',
    },
    {
      key: 2,
      image: require('./src/assets/intro/intro2.png'),
      desc: 'Học tập toàn diện',
      backgroundColor: '#28A490',
    },
    {
      key: 3,
      image: require('./src/assets/intro/intro3.png'),
      desc: 'Đầy đủ tính năng',
      backgroundColor: '#28A490',
    },
    {
      key: 4,
      image: require('./src/assets/intro/intro4.png'),
      desc: 'Hiệu quả tuyệt đối',
      backgroundColor: '#28A490',
    }
  ];

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
    <>
      <StatusBar style="light" />
      <HomeTeacher />
    </>
  )

  /**Check isFirstTimeLoad App */
  // if (!isFirstTimeLoad)
  //   return (
  //     <>
  //       <StatusBar style="light" />
  //       <Welcome onDone={handleDone} slides={slides} />
  //     </>
  //   );

  // if (!isFirstTimeLoad)
  //   return (
  //     <View style={styles.container}>
  //       <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
  //         BKEDU
  //       </Text>
  //     </View>
  //   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});