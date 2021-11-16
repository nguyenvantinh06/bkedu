import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import CustomButton from "../../../components/CustomButton"
import AddButtonComponent from "../../../components/AddButtonComponent"

const DATA = [
  {
    id: '123456',
    title: 'Vật lý',
    desc: 'Bài tập 1',
    deadline: '14/11/2021'
  },
  {
    id: '112314',
    title: 'Vật lý',
    desc: 'Bài tập 2',
    deadline: '15/11/2021'
  },
  
  
];

const Item = ({ title, desc, deadline }) => (
    <View style={styles.container}>
        <View style={styles.desciption}>
            <View style={styles.iconTitle}>
                <MaterialIcons name="assignment" size={24} color="grey" />
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <Text style={styles.descText}>{desc}</Text>
            <Text style={styles.deadlineText}>Hạn nộp: {deadline}</Text>
            
        </View>
        <View style={styles.listResult}>
            <Text style={styles.titleText}>Thang điểm: 10</Text>
            {/* <TouchableOpacity style={styles.buttonListSubmit} onPress={() => Alert.alert('Hiển thị danh sách bài nộp')}>
                <Text style={styles.buttonText}>Danh sách bài nộp</Text>
            </TouchableOpacity> */}
            <CustomButton title={'Danh sách bài nộp'} />
        </View>
    </View>
);

const ExercisesClassScreenTeacher = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} desc={item.desc} deadline={item.deadline} />
  );

  return (
    <SafeAreaView style={styles.contain}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <AddButtonComponent />
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
        flex: 1,
        justifyContent: "center", 
    },
    listResult: {
        flex:1,
        justifyContent: "space-around",
        
    },
    titleText: {
        ...TEXT,
        marginVertical: 5,
    },
    descText:{
        fontSize: 18,
        fontWeight: 'bold',
        //marginVertical: 5,
    },
    deadlineText:{
        ...TEXT,
        marginVertical: 5,
        
    },
    iconTitle: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default ExercisesClassScreenTeacher;
