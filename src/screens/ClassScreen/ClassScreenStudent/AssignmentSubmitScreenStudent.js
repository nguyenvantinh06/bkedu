import React from 'react';
import {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Alert, TouchableOpacity } from 'react-native';
import { MaterialIcons,Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from "expo-document-picker";

const DATA = [
  {
    id: '123456',
    title: 'Vật lý',
    desc: 'Bài tập 1',
    deadline: '14/11/2021',
    description: 'Làm các bài tập trong tệp bên dưới đây',
    assignmentUri: 'Bai_tap.docx',
    assignmentName:'Bai_tap.docx',
    assignmentSubmitname:'',
    assignmentSubmituri:'',

  },
];
const downloadAssignment = () => {
Alert.alert('Tải file về')};

                   const Choosefile = async () => {
                     let result = await DocumentPicker.getDocumentAsync({});
                     DATA.assignmentSubmituri = result.uri;
                     DATA.assignmentSubmitname = result.name;
                     setName(result.name);
                   };

const AssignmentSubmitScreenStudent = () => {
const downloadAssignment = () => {
Alert.alert('Tải file về')};

                   const Choosefile = async () => {
                     let result = await DocumentPicker.getDocumentAsync({});
                     DATA.assignmentSubmituri = result.uri;
                     DATA.assignmentSubmitname = result.name;
                     setName(result.name);
                   };

const submitAssignment = ()=>{
// upload file to database

};
const [ name, setName] = useState(DATA[0].assignmentSubmitname? DATA[0].assignmentSubmitname : "Chưa có bài nộp");
    return (
         <View style={styles.container}>
         <View style={styles.text}>
            <Text  style={{fontSize:24,fontWeight: 'bold'}} >{DATA[0].desc}</Text>
         </View >
         <View style={styles.text} style ={{marginHorizontal: 30}}>
           <Text > Hạn nộp : {DATA[0].deadline}</Text>
         </View >
         <View style={styles.text}>
            <Text style={{fontSize:18}}> Mô tả: </Text>
         </View >
          <View style={styles.text} style ={{marginHorizontal: 30}}>
            <Text >{DATA[0].description} </Text>
         </View >
         <TouchableOpacity  style ={{ width: 500}} onPress={downloadAssignment}>
          <View style={styles.text} style ={{marginHorizontal: 30}}><Text>{DATA[0].assignmentName}</Text></View>
         </TouchableOpacity>

        <View style ={{marginTop: 20}}>
         <View style={styles.text}>
                     <Text style={{fontSize:18}}> Bài nộp: </Text>
          </View >
           <View style={styles.text} style ={{marginHorizontal: 30}}>
                      <Text >{name}</Text>
          </View >
    <View style={styles.text} style ={{marginHorizontal: 30,marginTop: 10}}>
    <TouchableOpacity onPress={Choosefile}  style ={{width: 100,height:40}}>
    <View style = {styles.attachbtn}>
    <View   style={[styles.attachcenter]}>
           <MaterialIcons name="attachment" size={24} color='#00A9B7'/>
          <Text  style = {{ color: '#00A9B7'}}>  Đính kèm</Text>
    </View>
    </View>
    </TouchableOpacity>
</View>
</View>

    <View style ={{marginTop: 20}}>
   <View style={styles.text}>
            <Text style={{fontSize:18}}> Điểm: </Text>
         </View >
    <View style={styles.text} style ={{marginHorizontal: 30}}>
                      <Text >Chưa được chấm điểm</Text>
   </View >
</View>


 <View style={styles.text} style ={{marginTop: 20, justifyContent: 'center',alignItems: 'center'}}>
    <TouchableOpacity style ={{width: 100,height:40}} onPress={submitAssignment}>
    <View style = {styles.submitbtn}>
          <Text style={[styles.text, styles.submitcenter]}  >Nộp bài</Text>
    </View>
    </TouchableOpacity>
</View>

<View style ={styles.confirmbox}>
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
            padding:10,
            shadowColor: '#000000',
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
        },
    text :{
    marginTop: 5,
    marginHorizontal: 15,
    },
    attachcenter :{
    marginHorizontal: 4,
    flexDirection: 'row',
    alignItems: "center",
       textAlign: "center",
        },
    submitcenter:{

       marginTop: 8,
       color: 'white',
       alignItems: "center",
       textAlign: "center",
    },
    attachbtn:{
    flexDirection: 'row',
    width: 100,
    height: 40,
    backgroundColor: 'white',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#00A9B7',
    },
    submitbtn:{
       width: 100,
        height: 40,
        backgroundColor: '#00A9B7',
          borderRadius: 8,
          borderWidth: 1,
       borderColor: 'white',
       alignItems:'center',
    },
});

export default  AssignmentSubmitScreenStudent;


