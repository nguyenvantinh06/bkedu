import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Alert, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import CustomButton from "../../../../components/CustomButton"

const DATA = [
  {
    fullName: 'Nguyễn Văn A',
    mark: 'Chưa chấm',
    timeSubmit: '14/11/2021'
  },
  {
    fullName: 'Nguyễn Văn B',
    mark: '8/10',
    timeSubmit: '14/11/2021'
  },
  
  
];

const Item = ({ fullName, mark, timeSubmit }) => (
    <View style={styles.container}>
        <View style={styles.desciption}>
            <Text style={styles.nameText}>{fullName}</Text>
            <Text style={styles.markText}>Điểm: {mark}</Text>
            <Text style={styles.timeSubmitText}>Ngày nộp: {timeSubmit}</Text>
            
        </View>
        <View style={styles.listResult}>
            <CustomButton title={'Chi tiết'} />
        </View>
    </View>
);

const DetailExerciseTeacher = () => {
  const renderItem = ({ item }) => (
    <Item fullName={item.fullName} mark={item.mark} timeSubmit={item.timeSubmit} />
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
    desciption: {
        flex: 2,
        justifyContent: "center", 
    },
    listResult: {
        flex:1,
        justifyContent: "space-around",
    },
    markText: {
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

export default DetailExerciseTeacher;