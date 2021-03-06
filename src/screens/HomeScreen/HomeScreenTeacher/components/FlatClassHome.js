import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Alert, TouchableOpacity, Modal, Image, TextInput, Dimensions } from 'react-native';
import AddButtonComponent from "../../../../components/AddButtonComponent";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt from "jwt-decode";
import DropDownPicker from 'react-native-dropdown-picker';
import _ from "lodash";
import { useIsFocused } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');

const FlatClassHome = ({ navigation }) => {

  const isFocused = useIsFocused();

  const [subject, setSubject] = useState([]);

  const [subjectName, setSubjectName] = useState("");

  const [classes, setClasses] = useState([]);

  const handlerChangeSubjectName = _.debounce((name) => {
    setSubjectName(name);
  }, 200);

  useEffect(async () => {
    const token = await AsyncStorage.getItem('access_token');
    const user = jwt(token);
    fetch(`https://bkedu-backend.herokuapp.com/v1/subjects?id=${user._id}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => {
      if (data.code == 200) {
        setSubject(data.result);
      }
      else navigation.navigate('LoginScreen')
    })
    .catch(error => console.log(error));
  }, [isFocused]);

  useEffect(async () => {
    const token = await AsyncStorage.getItem('access_token');
    fetch(`https://bkedu-backend.herokuapp.com/v1/classes`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => {
      if (data.code == 200) {
        let newListClass = data.result.map((listClass) => {
          return {
            label: listClass.name,
            value: listClass._id
          }
        });
        setItems(newListClass);
      }
      else navigation.navigate('LoginScreen')
    })
    .catch(error => console.log(error));
  }, [modalVisible]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(classes);

  const handlerCreateClass = async () => {
    const token = await AsyncStorage.getItem('access_token');
    fetch(`https://bkedu-backend.herokuapp.com/v1/subjects`, {
        method: "POST",
        headers: {
          "Accept": 'application/json',
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: subjectName,
          class: value
        })
      }).then(res => res.json())
      .then(data => {
        if (data.code == 201) {
          Alert.alert("Th??nh c??ng", "T???o m??n h???c th??nh c??ng",
            [{
              text: "Ok",
              onPress: () => {setModalVisible(!modalVisible);}
            }])
        } else Alert.alert("T???o m??n h???c th???t b???i th???t b???i!");
      }).catch(error => console.log(error));
  }

  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ClassScreen', {
      screen: "DetailClass",
      params: subject[index]
    })}>
      <View style={styles.container}>
        <View style={styles.desciptionContent}>
          <Text style={styles.subjectText}>{item.name}</Text>
          <Text style={styles.classTeachText}>L???p: {item.class.name}</Text>
          <Text style={styles.teacherText}>Gi??o vi??n: {item.teacher.name}</Text>
        </View>
        <Image source={{ uri: 'https://www.besonline.in/Physics.png' }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [className, setClassName] = useState("");

  function createClass(){
    console.log(subjectName, className);
  }
  return (
    <SafeAreaView style={styles.contain}>
      <FlatList
        data={subject}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <AddButtonComponent onPress={() => Alert.alert('Th??m L???p h???c')} /> */}
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
                <TextInput style={styles.inputClass} onChangeText={handlerChangeSubjectName} placeholder='T??n m??n h???c' />
              </View>
              <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  maxHeight={130}
              />
              <View style={styles.contentButton}>
                <TouchableOpacity style={styles.buttonSubmit} onPress={handlerCreateClass}>
                  <Text style={styles.buttonSubmitText}>T???o l???p</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCancel} onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.buttonCancelText}>H???y</Text>
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
    width: width * 0.95,
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
    alignItems: 'center',
    justifyContent: 'center'
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
    height: 300,
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
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#B5B5B5',
    borderRadius: 5,
    padding: 5,
    marginTop: 20,
    marginBottom: 30,
  },
  inputClass: {
    flex: 1,
    height: 40
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
