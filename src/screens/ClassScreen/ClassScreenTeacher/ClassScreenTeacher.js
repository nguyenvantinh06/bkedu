import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import AddButtonComponent from "../../../components/AddButtonComponent"
import AddActionButtonDetailClass from "../../../components/AddActionButtonDetailClass"


const ClassScreenTeacher = () => {
    return (
        <View style={styles.center}>
          <Text>This is the Class Screen Teacher</Text>
          <AddActionButtonDetailClass /> 
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    },
});

export default  ClassScreenTeacher;


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
