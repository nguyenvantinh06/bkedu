import React from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';

const Slide = ({ item }) => {
  const { image, desc, backgroundColor } = item;
  return (
    <View style={styles.container}>
      <View style={[styles.slide, { backgroundColor }]}>
      <View style={styles.circle}>
        <Image style={styles.imageIntro} source={item.image}/> 
      </View>
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
  },
  slide: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageIntro:{
    width: 240,
    height: 235,
    zIndex: 1
  },
  circle: {
    width: 248,
    height: 248,
    borderRadius: 248 / 2,
    backgroundColor: "white",
    marginBottom: 30
  },
});

export default Slide;