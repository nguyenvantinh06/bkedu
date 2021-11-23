import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Alert, TouchableOpacity, Modal, Image, TextInput } from 'react-native';
import { Formik } from 'formik';

import CustomButton from "../../../../components/CustomButton"
import AddButtonComponent from "../../../../components/AddButtonComponent"
import {createClassSchema} from "../../../../components/validation"

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
  const [subjectName, setSubjectName] = useState("");
  const [className, setClassName] = useState("");

  function createClass(){
    console.log(subjectName, className);
  }
  return (
    <SafeAreaView style={styles.contain}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <AddButtonComponent onPress={() => Alert.alert('Thêm Lớp học')} /> */}
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
            <Formik
              initialValues={{ subjectName: '', className:'' }}
              onSubmit={values => console.log(values)}
              validationSchema = {createClassSchema}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
              <View style={styles.inputContainer}>
                <TextInput 
                  style={styles.inputClass} 
                  onChangeText={handleChange('subjectName')}
                  onBlur={handleBlur('subjectName')}
                  value={values.subjectName}
                  placeholder='Tên môn học' 
                />
                {errors.subjectName && touched.subjectName ? 
                  <Text style={{ color: 'red', textAlign:'center', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>{errors.subjectName}</Text> : null}
              </View>
            
              <View style={styles.inputContainer}>
                <TextInput 
                  style={styles.inputClass} 
                  onChangeText={handleChange('className')}
                  onBlur={handleBlur('className')}
                  value={values.className}
                  placeholder='Lớp học' 
                />
                {errors.className && touched.className ? 
                  <Text style={{color: 'red', marginTop: 10}}>{errors.className}</Text> : null}
              </View>
              <View style={styles.contentButton}>
                <TouchableOpacity style={styles.buttonSubmit} onPress={handleSubmit}>
                  <Text style={styles.buttonSubmitText}>Tạo lớp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCancel} onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.buttonCancelText}>Hủy</Text>
                </TouchableOpacity>
              </View>
              </>
              )}
            </Formik>
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
    alignItems: 'center', 
    justifyContent: 'center'
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
