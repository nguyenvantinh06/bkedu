// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Button, Alert, Image } from "react-native";
// import {Avatar} from "react-native-elements"

// const ProfileScreen = () => {
//     return (
        
//         <View style={styles.container}>
//             <View style={styles.avatarName}>
//                 <Image source={{uri : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'}}
//                     style={styles.image} resizeMode={'cover'} />
//                 <View style={{paddingLeft:20}}>
//                     <Text style={{fontSize:18, marginHorizontal: 20}}>Nguyễn Văn Tĩnh</Text>
//                     <Text style={{fontSize:14, marginHorizontal: 20}}>23/03/2000</Text>
//                 </View>
//             </View>
//             <View style={styles.ContentContain}>
//                 <Text style={styles.text}>Email:</Text>
//                 <View style={styles.boxEmail}>
//                     <Text style={{fontSize:14, paddingLeft:10}}>nguyenvantinh06@gmail.com</Text>
//                 </View>
//             </View>
//             <View style={styles.ContentContain}>
//                 <Text style={styles.text}>Mật khẩu:</Text>
//                 <View style={styles.box}>
//                     <Text style={{fontSize:14, paddingLeft: 10}}>**********</Text>
//                 </View>
//             </View>
//             <View style={styles.ContentContain}>
//                 <Text style={styles.text}>Số điện thoại:</Text>
//                 <View style={styles.box}>
//                     <Text style={{fontSize:14, paddingLeft: 10}}>0123456789</Text>
//                 </View>
//             </View>
//             <View style={styles.buttonContain}>
//                 <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Changr button pressed')}>
//                     <Text style={styles.buttonText}>Chỉnh sửa</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Logout button pressed')}>
//                     <Text style={styles.buttonText}>Đăng xuất</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const TEXT = {
//     color: '#000',
//     fontFamily: 'Roboto',
//     fontSize: 18
// }

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         justifyContent:'space-around',
//     },
//     avatarName: {
//         flex:1,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop:10,
//     },
//     ContentContain: {
//         flex:1,
//         marginHorizontal: 20,
//         justifyContent: 'center',
//     },
//     boxEmail:{
//         borderColor: 'black',
//         borderWidth: 2,
//         backgroundColor: '#DADADA',
//         borderColor: '#00A9B7',
//         height: 40,
//         borderRadius:5,
//         justifyContent: 'center',
//         marginTop: 5,
//     },
//     box:{
//         borderColor: 'black',
//         borderWidth: 2,
//         backgroundColor: '#fff',
//         borderColor: '#00A9B7',
//         height: 40,
//         borderRadius:5,
//         justifyContent: 'center',
//         marginTop: 5,
//     },
//     buttonContain: {
//         flex:1,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//     },
//     button:{
//         backgroundColor: '#00A9B7',
//         height: 40,
//         width: 140,
//         alignItems:'center',
//         justifyContent: 'center',
//         borderRadius: 5
//     },
//     buttonText:{
//         fontSize: 14,
//         textAlign: "center",
//         color: 'white',
//         fontWeight: 'bold'
//     },
//     text: {
//         ...TEXT,
//     },
//     image: {
//         width: 70,
//         height: 70,
//         borderRadius: 70 / 2,
//         overflow: "hidden",
//         borderWidth: 2,
//         borderColor: "#00A9B7",
//         marginBottom: 5 
//     }
// });

// export default  ProfileScreen;

import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Alert, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import access_alarm from "../../assets/access_alarm.png"
import check_circle from "../../assets/check_circle.png"

const DATA = [
  {
    icon: access_alarm,
    content: 'Bạn sắp đến hạn nộp bài cho bài tập 1 môn Vật lý',
    timeDeadline: '14/11/2021, 00:00'
  },
  {
    icon: check_circle,
    content: 'Bạn đã nộp bài cho bài tập 1 môn Vật lý',
    timeDeadline: '09/10/2021, 14:30'
  },
  {
    icon: check_circle,
    content: 'Bạn đã nộp bài cho bài tập 2 môn Vật lý',
    timeDeadline: '09/10/2021, 17:50'
  },
  
  
];
// const Item = ({ fullName, mark, timeSubmit }) => (
//     <View style={styles.container}>
//         <View style={styles.desciption}>
//             <Text style={styles.nameText}>{fullName}</Text>
//             <Text style={styles.markText}>Điểm: {mark}</Text>
//             <Text style={styles.timeSubmitText}>Ngày nộp: {timeSubmit}</Text>
            
//         </View>
//         <View style={styles.listResult}>
//             <CustomButton title={'Chi tiết'} />
//         </View>
//     </View>
// );

const NotificationScreen = ({navigation}) => {
  const renderItem = ({ item }) => (
    <View style={styles.container}>
        <View style={styles.iconNoti}>
            {/* <MaterialIcons name="access-alarm" size={48} color="#FFD200" /> */}
            <Image source={item.icon}
                 resizeMode={'cover'} />
        </View>
        <View style={styles.contentNoti}>
            <Text style={styles.contentText}>{item.content}</Text>
            <Text style={styles.timeDeadline}>{item.timeDeadline}</Text>
        </View>
    </View>
);

  return (
    <SafeAreaView style={styles.contain}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      
    </SafeAreaView>
  );
}

const TEXT = {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Roboto',
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 10,
        marginHorizontal: 10,
        padding: 10,
        borderColor: 'grey',
        borderRadius: 5,
        elevation: 3,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    contain: {
        flex: 1,
    },
    contentNoti: {
        flex: 3,
        justifyContent: "center", 
    },
    iconNoti: {
        flex:1,
        justifyContent: "center",
        alignItems:'center'
    },
    contentText: {
        ...TEXT,
        marginVertical: 5,
    },
    nameText:{
        fontSize: 18,
        fontWeight: 'bold',
        //marginVertical: 5,
    },
    timeSubmitText:{
        ...TEXT,
        marginVertical: 5,
        
    },
    

});

export default NotificationScreen;