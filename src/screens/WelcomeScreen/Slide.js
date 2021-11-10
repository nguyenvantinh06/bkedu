import React from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';

const Slide = ({ item }) => {
  const { image, desc, backgroundColor } = item;
  return (
    <View style={styles.container}>
      <View style={[styles.slide, { backgroundColor }]}>
      <Image style={styles.imageIntro} source={item.image} />
      <Text style={styles.text}>{desc}</Text>
      </View>
    </View>
    
  );
};
const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    //justifyContent: 'space-around',
  },
  slide: {
    width,
    height,
    justifyContent: 'center',
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageIntro:{
    bottom: 20,
    resizeMode: 'contain'
  }
});

export default Slide;