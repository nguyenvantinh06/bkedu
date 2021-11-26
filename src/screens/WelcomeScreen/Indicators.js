import React from 'react';
import { View, StyleSheet } from 'react-native';

const Indicators = ({ indicatorCount, currentSlideIndex }) => {
  if (!indicatorCount || typeof indicatorCount !== 'number') return null;

  // let indicators = [];
  // for (let i = 0; i < indicatorCount; i++) {
  //   indicators.push(i);
  // }
  // return indicators.map((indicator, index) => (
  return  (
    <View style={styles.container}>
      <View
        style={[
          styles.indicator,
          currentSlideIndex == 0 ? styles.selected : styles.unSelected
        ]}
      />
      <View
        style={[
          styles.indicator,
          currentSlideIndex == 1 ? styles.selected : styles.unSelected
        ]}
      />
      <View
        style={[
          styles.indicator,
          currentSlideIndex == 2 ? styles.selected : styles.unSelected
        ]}
      />
      <View
        style={[
          styles.indicator,
          currentSlideIndex == 3 ? styles.selected : styles.unSelected
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selected: {
    backgroundColor: 'white',
  },
  unSelected: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default Indicators;