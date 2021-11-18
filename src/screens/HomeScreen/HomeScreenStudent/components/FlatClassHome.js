// import React from "react";
// import { View, Button, Text, StyleSheet } from "react-native";

// const FlatClassHome = ({navigation}) => {
// return (
//     <View style={styles.center}>
//       <Text>This is the home screen</Text>
//       <Button title="Go to Class Screen"
//         onPress={() => navigation.navigate("DetailClass")}
//       />
//     </View>
//     );
// };

// const styles = StyleSheet.create({
//     center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//     },
// });

// export default FlatClassHome;

import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import AddButtonComponent from "../../../../components/AddButtonComponent"
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo

import backgroundclass from "../../../../assets/class/flatmath.png"

import { ListItem, Avatar } from 'react-native-elements'

const list = [
  {
    name: 'Toán học',
    avatar_url: 'https://cdn-icons-png.flaticon.com/512/198/198549.png',
    subtitle: 'Lớp 6A'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://cdn-icons-png.flaticon.com/512/198/198549.png',
    subtitle: 'Vice Chairman'
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const FlatClassHome = () => {
  const [selectedId, setSelectedId] = useState(null);

  // const renderItem = ({ item }) => {
  //   const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
  //   const color = item.id === selectedId ? 'white' : 'black';

  //   return (
  //     <Item
  //       item={item}
  //       onPress={() => setSelectedId(item.id)}
  //       backgroundColor={{ backgroundColor }}
  //       textColor={{ color }}
  //     />
  //   );
  // };

  const renderItem = ({ item }) => (
    <ListItem bottomDivider style={styles.item}
      // Component={TouchableScale}
      // friction={90} //
      // tension={100} // These props are passed to the parent component (here TouchableScale)
      // activeScale={0.95} //
      // linearGradientProps={{
      //   colors: ['#FF9800', '#F44336'],
      //   start: { x: 1, y: 0 },
      //   end: { x: 0.2, y: 0 },
      // }}
      // ViewComponent={LinearGradient}
     // onPress={() => navigation.navigate()}
    >
      <Avatar source={{uri: item.avatar_url}} />
      <ListItem.Content style={[styles.content]}>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        //keyExtractor={(item) => item.id}
        keyExtractor={(item, index) => index.toString()}
        //extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
   //marginTop: StatusBar.currentHeight || 0,
    marginTop: 5,
    width,
  },
  item: {
    flex:1,
    padding: 5,
    paddingVertical: 0,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#00A9B7'
  },
  content: {
    flex:1,
    backgroundColor: '#00A9B7'
  },
  title: {
    fontSize: 20,
  },
});

export default FlatClassHome;