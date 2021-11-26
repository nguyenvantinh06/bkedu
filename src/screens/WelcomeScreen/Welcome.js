import React, { useState, useRef } from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions } from 'react-native';
import Indicators from './Indicators';
import Slide from './Slide';
import { Icon } from "react-native-elements";

const Welcome = ({ navigation }) => {

  const slides = [
    {
      key: 1,
      image: require('../../assets/intro/intro1.png'),
      desc: 'Chào mừng bạn đến với BKEDU',
      backgroundColor: '#28A490',
    },
    {
      key: 2,
      image: require('../../assets/intro/intro2.png'),
      desc: 'Học tập toàn diện',
      backgroundColor: '#28A490',
    },
    {
      key: 3,
      image: require('../../assets/intro/intro3.png'),
      desc: 'Đầy đủ tính năng',
      backgroundColor: '#28A490',
    },
    {
      key: 4,
      image: require('../../assets/intro/intro4.png'),
      desc: 'Hiệu quả tuyệt đối',
      backgroundColor: '#28A490',
    }
  ];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const flatListRef = useRef();

  const onViewableItemsChanged = useRef(item => {
    const index = item.viewableItems[0].index;
    setCurrentSlideIndex(index);
  });

  const handleSkip = () => {
    //flatListRef.current.scrollToEnd({ animated: true });
    navigation.navigate('LoginStackNavigator')
  };

  const handleNext = () => {
    if (currentSlideIndex >= slides.length - 1) return;
    flatListRef.current.scrollToIndex({ index: currentSlideIndex + 1 });
    setCurrentSlideIndex(currentSlideIndex + 1)
  };

  return (
    <>
      <FlatList
        ref={flatListRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={slides}
        keyExtractor={item => item.key.toString()}
        renderItem={({ item }) => <Slide item={item} />}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
      <View style={styles.indicatorContainer}>
        <Indicators
          currentSlideIndex={currentSlideIndex}
          indicatorCount={slides.length}
        />
      </View>
      {currentSlideIndex < slides.length - 1 && (
        <Text onPress={handleSkip} style={[styles.button, styles.leftButton]}>
          Skip
        </Text>
      )}
      {currentSlideIndex < slides.length - 1 ? (
        <Text onPress={handleNext} style={[styles.button, styles.rightButton]}>
          Next
        </Text>
      ) : (
        <Text onPress={() => { navigation.navigate('LoginStackNavigator') }} style={[styles.button, styles.rightButton]}>
          Done
        </Text>
      )}
    </>
  );
};

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  indicatorContainer: {
    position: 'absolute',
    width,
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    fontSize: 18,
    color: 'white',
    letterSpacing: 2,
  },
  leftButton: {
    position: 'absolute',
    left: 10,
    bottom: 20,
  },
  rightButton: {
    position: 'absolute',
    right: 10,
    bottom: 20,
  },
});

export default Welcome;