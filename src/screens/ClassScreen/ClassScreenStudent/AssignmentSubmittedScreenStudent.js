import React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Alert, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as DocumentPicker from "expo-document-picker";

const DATA = [
  {
    id: '123456',
    title: 'Vật lý',
    desc: 'Bài tập 1',
    deadline: '14/11/2021',
    description: 'Làm các bài tập trong tệp bên dưới đây',
    assignmentUri: '',
    assignmentName: 'Bai_tap.docx',
    assignmentSubmitname: 'Bai_nop.docx',
    assignmentSubmituri: '',
    mark: '10',
    note: 'Bài làm tốt',
  },
];
const downloadAssignment = () => {
  //download file assignment
  Alert.alert('Tải file về')
};

const downloadAssignmentSubmited = () => {
  //download file submitted assignment
  Alert.alert('Tải file đã submmit về')
};

const Choosefile = async () => {
  let result = await DocumentPicker.getDocumentAsync({});
  DATA.assignmentSubmituri = result.uri;
  DATA.assignmentSubmitname = result.name;
  setName(result.name);
};

const AssignmentSubmittedScreenStudent = () => {
  const downloadAssignment = () => {
    Alert.alert('Tải file về')
  };

  const Choosefile = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    DATA.assignmentSubmituri = result.uri;
    DATA.assignmentSubmitname = result.name;
    setName(result.name);
  };
  const downloadAssignmentSubmited = () => {
    //download file submitted assignment
    Alert.alert('Tải file đã submmit về')
  };

  const submitAssignment = () => {
    // upload file to server

  };
  const [name, setName] = useState(DATA[0].assignmentSubmitname);
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }} >{DATA[0].desc}</Text>
      </View >
      <View style={styles.text} style={{ marginHorizontal: 30 }}>
        <Text > Hạn nộp : {DATA[0].deadline}</Text>
      </View >
      <View style={styles.text}>
        <Text style={{ fontSize: 18 }}> Mô tả: </Text>
      </View >
      <View style={styles.text} style={{ marginHorizontal: 30 }}>
        <Text >{DATA[0].description} </Text>
      </View >
      <TouchableOpacity style={{ width: 500 }} onPress={downloadAssignment}>
        <View style={styles.text} style={{ marginHorizontal: 30 }}><Text>{DATA[0].assignmentName}</Text></View>
      </TouchableOpacity>

      <View style={{ marginTop: 20 }}>
        <View style={styles.text}>
          <Text style={{ fontSize: 18 }}> Bài nộp: </Text>
        </View >
        {
          name === '' ?

            <View style={styles.text} style={{ marginHorizontal: 30 }}>
              <Text >Không có bài nộp</Text>
            </View >
            :
            <TouchableOpacity style={{ width: 500 }} onPress={downloadAssignment}>
              <View style={[styles.text, { marginHorizontal: 30 }]}><Text style={{ color: 'skyblue' }}>{name}</Text></View>
            </TouchableOpacity>}
      </View>

      <View style={{ marginTop: 20 }}>
        <View style={styles.text}><Text style={{ fontSize: 18 }}> Điểm: </Text></View >
        <View style={styles.text} style={{ marginHorizontal: 30 }}>
          {DATA[0].mark === '' ? <Text >Chưa được chấm điểm</Text> : <Text >{DATA[0].mark}</Text>}
        </View >
        {
          DATA[0].mark ?
            <View>
              <View style={styles.text}><Text style={{ fontSize: 18 }}> Nhận xét: </Text></View >
              <View style={styles.text} style={{ marginHorizontal: 30 }}><Text >{DATA[0].note}</Text></View >
            </View>
            :
            null
        }
      </View>


    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: 'grey',
    elevation: 3,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  text: {
    marginTop: 5,
    marginHorizontal: 15,
  },
  attachcenter: {
    alignItems: "center",
    textAlign: "center",
    marginTop: 8,
    color: '#00A9B7',
  },
  submitcenter: {
    marginTop: 8,
    color: 'white',
    alignItems: "center",
    textAlign: "center",
  },
  attachbtn: {
    width: 100,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00A9B7',
  },
  submitbtn: {
    width: 100,
    height: 40,
    backgroundColor: '#00A9B7',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
  },
});

export default AssignmentSubmittedScreenStudent;


