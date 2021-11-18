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