// // import React from "react";
// // import { View, Button, Text, StyleSheet } from "react-native";

// // const FlatClassHome = ({navigation}) => {
// // return (
// //     <View style={styles.center}>
// //       <Text>This is the home screen</Text>
// //       <Button title="Go to Class Screen"
// //         onPress={() => navigation.navigate("DetailClass")}
// //       />
// //     </View>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     center: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     textAlign: "center",
// //     },
// // });

// // export default FlatClassHome;

// import React, { useState } from "react";
// import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from "react-native";
// import AddButtonComponent from "../../../../components/AddButtonComponent"
// import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
// import LinearGradient from 'react-native-linear-gradient'; // Only if no expo

// import backgroundclass from "../../../../assets/class/flatmath.png"

// import { ListItem, Avatar } from 'react-native-elements'

// const list = [
//   {
//     name: 'Toán học',
//     avatar_url: 'https://cdn-icons-png.flaticon.com/512/198/198549.png',
//     subtitle: 'Lớp 6A'
//   },
//   {
//     name: 'Chris Jackson',
//     avatar_url: 'https://cdn-icons-png.flaticon.com/512/198/198549.png',
//     subtitle: 'Vice Chairman'
//   },
// ];

// const Item = ({ item, onPress, backgroundColor, textColor }) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
//     <Text style={[styles.title, textColor]}>{item.title}</Text>
//   </TouchableOpacity>
// );

// const FlatClassHome = ({ navigation }) => {
//   const [selectedId, setSelectedId] = useState(null);

//   // const renderItem = ({ item }) => {
//   //   const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
//   //   const color = item.id === selectedId ? 'white' : 'black';

//   //   return (
//   //     <Item
//   //       item={item}
//   //       onPress={() => setSelectedId(item.id)}
//   //       backgroundColor={{ backgroundColor }}
//   //       textColor={{ color }}
//   //     />
//   //   );
//   // };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress={() => navigation.navigate('BottomTabNavigatorStudentClass')}>
//       <ListItem bottomDivider style={styles.item}
//       // Component={TouchableScale}
//       // friction={90} //
//       // tension={100} // These props are passed to the parent component (here TouchableScale)
//       // activeScale={0.95} //
//       // linearGradientProps={{
//       //   colors: ['#FF9800', '#F44336'],
//       //   start: { x: 1, y: 0 },
//       //   end: { x: 0.2, y: 0 },
//       // }}
//       // ViewComponent={LinearGradient}
//       // onPress={() => navigation.navigate()}
//       >
//         <Avatar source={{ uri: item.avatar_url }} />
//         <ListItem.Content style={[styles.content]}>
//           <ListItem.Title>{item.name}</ListItem.Title>
//           <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
//         </ListItem.Content>
//         <ListItem.Chevron />
//       </ListItem>
//     </TouchableOpacity>
//   )

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={list}
//         renderItem={renderItem}
//         //keyExtractor={(item) => item.id}
//         keyExtractor={(item, index) => index.toString()}
//       //extraData={selectedId}
//       />
//     </SafeAreaView>
//   );
// };

// const { width, height } = Dimensions.get('screen');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //marginTop: StatusBar.currentHeight || 0,
//     marginTop: 5,
//     width,
//   },
//   item: {
//     flex: 1,
//     padding: 5,
//     paddingVertical: 0,
//     marginVertical: 5,
//     marginHorizontal: 5,
//     borderRadius: 10,
//     backgroundColor: '#00A9B7'
//   },
//   content: {
//     flex: 1,
//     backgroundColor: '#00A9B7'
//   },
//   title: {
//     fontSize: 20,
//   },
// });

// export default FlatClassHome;

import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Alert, TouchableOpacity, Modal, Image, Pressable, TextInput } from 'react-native';

import CustomButton from "../../../../components/CustomButton"
import AddButtonComponent from "../../../../components/AddButtonComponent"

const DATA = [
  {
    subjectClass: 'Vật lý',
    classTeach: '7A',
    teacher: 'Nguyễn Văn Thuần',
    icon: 'https://www.besonline.in/Physics.png'
  },
  {
    subjectClass: 'Vật lý',
    classTeach: '8A',
    teacher: 'Nguyễn Văn Thuần',
    icon: 'https://www.besonline.in/Physics.png'
  },
];

const FlatClassHome = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ClassScreen')}>
      <View style={styles.container}>
        <View style={styles.desciptionContent}>
          <Text style={styles.subjectText}>{item.subjectClass}</Text>
          <Text style={styles.classTeachText}>Lớp: {item.classTeach}</Text>
          <Text style={styles.teacherText}>{item.teacher}</Text>
        </View>
        <Image source={{ uri: item.icon }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState(null);

  return (
    <SafeAreaView style={styles.contain}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.contentAddClass}>
              <View style={styles.inputContainer}>
                <TextInput style={styles.inputClass} onChangeText={onChangeText} value={text} placeholder='Tên môn học' />
              </View>
              <View style={styles.inputContainer}>
                <TextInput style={styles.inputClass} onChangeText={onChangeText1} value={text1} placeholder='Lớp học' />
              </View>
              <View style={styles.contentButton}>
                <TouchableOpacity style={styles.buttonSubmit} onPress={() => Alert.alert('Đã tạo lớp thành công')}>
                  <Text style={styles.buttonSubmitText}>Tạo lớp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCancel} onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.buttonCancelText}>Hủy</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const TEXT = {
  fontSize: 14,
  color: '#fff',
  fontFamily: 'Roboto',
}
const TEXTBUTTON = {
  fontSize: 14,
  color: '#fff',
  fontFamily: 'Roboto',
  fontWeight: 'bold'
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#3985f3',
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 10,
    padding: 10,
    borderColor: 'grey',
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    justifyContent: 'space-between',
  },
  contain: {
    flex: 1,
  },
  iconClass: {
    flex: 1,
    justifyContent: "center",
  },
  desciptionContent: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5
  },
  classTeachText: {
    ...TEXT,
  },
  subjectText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'white'
  },
  teacherText: {
    ...TEXT,
    marginVertical: 5,
  },
  iconTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000AA',
  },
  modalView: {
    borderRadius: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '90%',
    height: 200,
    borderWidth: 1,
    borderColor: '#B5B5B5',
    padding: 10
  },
  contentAddClass: {
    flex: 1,
    borderColor: '#B5B5B5',
    borderRadius: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#B5B5B5',
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
  },
  inputClass: {
    flex: 1,
  },
  contentButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  buttonSubmit: {
    flex: 1,
    backgroundColor: '#00A9B7',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: 5,
  },
  buttonCancel: {
    flex: 1,
    backgroundColor: '#B5B5B5',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 5,
  },
  buttonSubmitText: {
    ...TEXTBUTTON,
    elevation: 2,
  },
  buttonCancelText: {
    ...TEXTBUTTON,
    elevation: 2,
  },
});

export default FlatClassHome;
