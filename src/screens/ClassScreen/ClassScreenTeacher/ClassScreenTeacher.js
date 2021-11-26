import React, { useState } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, Alert, TouchableOpacity, Modal, Image, TextInput, Dimensions } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import Moment from "moment";
import AddButtonComponent from "../../../components/AddButtonComponent";
import _ from "lodash";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimatedLoader from "react-native-animated-loader";
import jwt from "jwt-decode";

const { width, height } = Dimensions.get('screen');

const ClassScreenTeacher = ({ route, navigation }) => {
  const [subject, setSubject] = useState(route.params);
  const [visible, setVisible] = useState(false)
  const [contentPost, setContentPost] = useState("");
  const [contentReply, setContentReply] = useState("");

  const handlerAddPost = async () => {
    setVisible(true);
    const token = await AsyncStorage.getItem('access_token');
    fetch(`https://bkedu-backend.herokuapp.com/v1/subjects/${subject._id}/posts`, {
      method: "PUT",
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        content: contentPost
      })
    }).then(res => res.json())
      .then(data => {
        setVisible(false);
        if (data.code == 200) {
          Alert.alert("Thành công", "Đăng bài thành công",
            [{
              text: "Ok",
              onPress: () => { setModalVisible(!modalVisible); }
            }])
        } else Alert.alert("Đăng bài thất bại!");
      }).catch(error => console.log(error));
  }

  const handlerReply = async (postId) => {
    setVisible(true);
    const token = await AsyncStorage.getItem('access_token');
    fetch(`https://bkedu-backend.herokuapp.com/v1/subjects/${subject._id}/posts/${postId}/reply`, {
      method: "PUT",
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        content: contentReply
      })
    }).then(res => res.json())
      .then(data => {
        setVisible(false);
        if (data.code == 200) {
          Alert.alert("Thành công", "Trả lời thành công")
        } else Alert.alert("Trả lời thất bại!");
      }).catch(error => console.log(error));
  }

  const handlerChangeContent = _.debounce((content) => {
    setContentPost(content);
  }, 200);

  const handlerChangeReply = _.debounce((content) => {
    setContentReply(content);
  }, 200);


  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.avatarName}>
        <Image source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' }}
          style={styles.image} resizeMode={'cover'} />

      </View>
      <View style={styles.contentContainer}>
        <View style={styles.desciptionContent}>
          <View style={styles.information}>
            <Text style={styles.nameUser}>{item.created_by.name}</Text>
            <Text style={styles.time}>{Moment(item.created_at).format('D/MM, h:mm A')}</Text>
          </View>
          <Text style={styles.classTeachText}>{item.content}</Text>
          <View style={styles.replyContainer}>
            <Collapse>
              <CollapseHeader>
                <View>
                  <Text style={{ color: "purple", marginBottom: 10, }}>{item.replies.length} {item.replies.length > 1 ? "Replies" : "Reply"}</Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                {item.replies.map((reply, index) => {
                  Moment.locale('en');
                  return (
                    <View style={styles.avatarNameReply} key={index}>
                      <Image source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' }}
                        style={styles.imageReply} resizeMode={'cover'} />

                      <View>
                        <View style={styles.information}>
                          <Text style={styles.nameUser}>{reply.created_by.name}</Text>
                          <Text style={styles.time}>{Moment(reply.created_at).format('D/MM, h:mm A')}</Text>
                        </View>
                        <Text style={styles.reply}>{reply.content}</Text>
                      </View>
                    </View>
                  )
                })}
              </CollapseBody>
            </Collapse>
            <View>
              <View style={styles.inputContainer}>
                <TextInput style={styles.inputClass} onChangeText={handlerChangeReply} placeholder='Trả lời...' />
              </View>
              <TouchableOpacity style={styles.buttonAdd} onPress={() => handlerReply(item._id)}>
                <Text style={styles.buttonSubmitText}>Đăng</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>

  );

  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState(null);

  return (
    <SafeAreaView style={styles.contain}>
      <FlatList
        data={subject.posts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <AddButtonComponent onPress={() => Alert.alert('Thêm Lớp học')} />
      <AddButtonComponent onPress={() => setModalVisible(true)} />
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
                <TextInput style={styles.inputClass} onChangeText={handlerChangeContent} placeholder='Viết gì đó...' />
              </View>
              <View style={styles.contentButton}>
                <TouchableOpacity style={styles.buttonSubmit} onPress={handlerAddPost}>
                  <Text style={styles.buttonSubmitText}>Đăng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCancel} onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.buttonCancelText}>Hủy</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <AnimatedLoader
        visible={visible}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("../../../assets/72659-loader-vb.json")}
        animationStyle={styles.lottie}
        speed={1}
      />
    </SafeAreaView>
  );
};

const TEXT = {
  fontSize: 14,
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
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'flex-start',
    marginHorizontal: 10,
  },
  contentContainer: {
    flex: 3,
    width: width * 0.95,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
    // marginHorizontal: 10,
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
    // flexDirection: "row",
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  avatarName: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 15,
    // marginTop: 5,
  },
  avatarNameReply: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 15,
  },
  information: {
    flexDirection: "row",
  },
  iconClass: {
    flex: 1,
    justifyContent: "center",
  },
  desciptionContent: {
    flex: 1,
    justifyContent: "center",
  },
  classTeachText: {
    ...TEXT,
    marginLeft: 10,
    color: 'black',
  },
  nameUser: {
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 5,
    color: 'black',
    fontWeight: "bold"
  },
  time: {
    ...TEXT,
    marginLeft: 10,
    color: 'gray',
  },
  replyContainer: {
    marginVertical: 20,
    marginLeft: 10,
  },
  reply: {
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 3,
    color: 'black',
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
    marginVertical: 10,
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
  buttonAdd: {
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
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#00A9B7",
    marginBottom: 5
  },
  imageReply: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#00A9B7",
    marginBottom: 5
  },
  lottie: {
    width: 100,
    height: 100
  }
});

export default ClassScreenTeacher;


// // import React from 'react';

// // // import all the components we are going to use
// // import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

// // //Import ActionButton
// // import ActionButton from 'react-native-action-button';

// // //Import Icon for the ActionButton
// // import Icon from 'react-native-vector-icons/Ionicons';

// // const App = () => {
// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <View style={styles.container}>
// //         <Text style={styles.titleStyle}>
// //           Example of Floating Action Button with Multiple Option in React Native
// //         </Text>
// //         <Text style={styles.textStyle}>
// //           Click on Action Button to see Alert
// //         </Text>
// //         <ActionButton buttonColor="rgba(231,76,60,1)">
// //           {/*Inner options of the action button*/}
// //           {/*Icons here https://infinitered.github.io/ionicons-version-3-search/*/}
// //           <ActionButton.Item
// //             buttonColor="#9b59b6"
// //             title="Add to Watch Later"
// //             onPress={() => alert('Added to watch later')}>
// //             <Icon name="md-eye" style={styles.actionButtonIcon} />
// //           </ActionButton.Item>
// //           <ActionButton.Item
// //             buttonColor="#3498db"
// //             title="Add to Favourite"
// //             onPress={() => alert('Added to favourite')}>
// //             <Icon name="md-star" style={styles.actionButtonIcon} />
// //           </ActionButton.Item>
// //           <ActionButton.Item
// //             buttonColor="#1abc9c"
// //             title="Share"
// //             onPress={() => alert('Share Post')}>
// //             <Icon name="md-share-alt" style={styles.actionButtonIcon} />
// //           </ActionButton.Item>
// //         </ActionButton>
// //       </View>
// //     </SafeAreaView>
// //   );
// // };

// // export default App;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: 'white',
// //     padding: 10,
// //   },
// //   titleStyle: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //     padding: 10,
// //   },
// //   textStyle: {
// //     fontSize: 16,
// //     textAlign: 'center',
// //     padding: 10,
// //   },
// //   actionButtonIcon: {
// //     fontSize: 20,
// //     height: 22,
// //     color: 'white',
// //   },
// // });

// // Example of File Picker in React Native
// // https://aboutreact.com/file-picker-in-react-native/

// // Import React
// import React, {useState} from 'react';
// // Import required components
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   ScrollView,
//   Image,
// } from 'react-native';

// // Import Document Picker
// import DocumentPicker from 'react-native-document-picker';

// const ClassScreenTeacher = () => {
//   const [singleFile, setSingleFile] = useState('');
//   const [multipleFile, setMultipleFile] = useState([]);

//   const selectOneFile = async () => {
//     //Opening Document Picker for selection of one file
//     try {
//       const res = await DocumentPicker.pick({
//         type: [DocumentPicker.types.allFiles],
//         //There can me more options as well
//         // DocumentPicker.types.allFiles
//         // DocumentPicker.types.images
//         // DocumentPicker.types.plainText
//         // DocumentPicker.types.audio
//         // DocumentPicker.types.pdf
//       });
//       //Printing the log realted to the file
//       console.log('res : ' + JSON.stringify(res));
//       console.log('URI : ' + res.uri);
//       console.log('Type : ' + res.type);
//       console.log('File Name : ' + res.name);
//       console.log('File Size : ' + res.size);
//       //Setting the state to show single file attributes
//       setSingleFile(res);
//     } catch (err) {
//       //Handling any exception (If any)
//       if (DocumentPicker.isCancel(err)) {
//         //If user canceled the document selection
//         alert('Canceled from single doc picker');
//       } else {
//         //For Unknown Error
//         alert('Unknown Error: ' + JSON.stringify(err));
//         throw err;
//       }
//     }
//   };

//   const selectMultipleFile = async () => {
//     //Opening Document Picker for selection of multiple file
//     try {
//       const results = await DocumentPicker.pickMultiple({
//         type: [DocumentPicker.types.images],
//         //There can me more options as well find above
//       });
//       for (const res of results) {
//         //Printing the log realted to the file
//         console.log('res : ' + JSON.stringify(res));
//         console.log('URI : ' + res.uri);
//         console.log('Type : ' + res.type);
//         console.log('File Name : ' + res.name);
//         console.log('File Size : ' + res.size);
//       }
//       //Setting the state to show multiple file attributes
//       setMultipleFile(results);
//     } catch (err) {
//       //Handling any exception (If any)
//       if (DocumentPicker.isCancel(err)) {
//         //If user canceled the document selection
//         alert('Canceled from multiple doc picker');
//       } else {
//         //For Unknown Error
//         alert('Unknown Error: ' + JSON.stringify(err));
//         throw err;
//       }
//     }
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <Text style={styles.titleText}>
//         Example of File Picker in React Native
//       </Text>
//       <View style={styles.container}>
//         {/*To show single file attribute*/}
//         <TouchableOpacity
//           activeOpacity={0.5}
//           style={styles.buttonStyle}
//           onPress={selectOneFile}>
//           {/*Single file selection button*/}
//           <Text style={{marginRight: 10, fontSize: 19}}>
//             Click here to pick one file
//           </Text>
//           <Image
//             source={{
//               uri: 'https://img.icons8.com/offices/40/000000/attach.png',
//             }}
//             style={styles.imageIconStyle}
//           />
//         </TouchableOpacity>
//         {/*Showing the data of selected Single file*/}
//         <Text style={styles.textStyle}>
//           File Name: {singleFile.name ? singleFile.name : ''}
//           {'\n'}
//           Type: {singleFile.type ? singleFile.type : ''}
//           {'\n'}
//           File Size: {singleFile.size ? singleFile.size : ''}
//           {'\n'}
//           URI: {singleFile.uri ? singleFile.uri : ''}
//           {'\n'}
//         </Text>
//         <View
//           style={{
//             backgroundColor: 'grey',
//             height: 2,
//             margin: 10
//           }} />
//         {/*To multiple single file attribute*/}
//         <TouchableOpacity
//           activeOpacity={0.5}
//           style={styles.buttonStyle}
//           onPress={selectMultipleFile}>
//           {/*Multiple files selection button*/}
//           <Text style={{marginRight: 10, fontSize: 19}}>
//             Click here to pick multiple files
//           </Text>
//           <Image
//             source={{
//               uri: 'https://img.icons8.com/offices/40/000000/attach.png',
//             }}
//             style={styles.imageIconStyle}
//           />
//         </TouchableOpacity>
//         <ScrollView>
//           {/*Showing the data of selected Multiple files*/}
//           {multipleFile.map((item, key) => (
//             <View key={key}>
//               <Text style={styles.textStyle}>
//                 File Name: {item.name ? item.name : ''}
//                 {'\n'}
//                 Type: {item.type ? item.type : ''}
//                 {'\n'}
//                 File Size: {item.size ? item.size : ''}
//                 {'\n'}
//                 URI: {item.uri ? item.uri : ''}
//                 {'\n'}
//               </Text>
//             </View>
//           ))}
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default ClassScreenTeacher;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 16,
//   },
//   titleText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     paddingVertical: 20,
//   },
//   textStyle: {
//     backgroundColor: '#fff',
//     fontSize: 15,
//     marginTop: 16,
//     color: 'black',
//   },
//   buttonStyle: {
//     alignItems: 'center',
//     flexDirection: 'row',
//     backgroundColor: '#DDDDDD',
//     padding: 5,
//   },
//   imageIconStyle: {
//     height: 20,
//     width: 20,
//     resizeMode: 'stretch',
//   },
// });
