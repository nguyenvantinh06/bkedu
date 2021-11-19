import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Alert, TouchableOpacity, Modal, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import CustomButton from "../../../../components/CustomButton"

const DATA = [
  {
    fullName: 'Nguyễn Văn A',
    mark: 'Chưa chấm',
    contentSubmit: 'Đây là bài làm của Nguyễn Văn A'
  },
  {
    fullName: 'Nguyễn Văn B',
    mark: '8/10',
    contentSubmit: 'Đây là bài làm của Nguyễn Văn B'
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

const DetailSubmitTeacher = ({ route, item }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nameMark}>
        <Text style={styles.nameText}>Nguyễn Văn A</Text>
        <Text style={styles.markText}>Điểm: 9</Text>
      </View>
      <View style={styles.contentSubmit}>
        {/* <View style={styles.submitContent}>
          <Text style={{}}> Bài làm</Text>
        </View> */}
        <Text style={{ textAlign: 'center', fontSize: 14, marginTop: 10, }}>Bài làm</Text>
        {/* <Text style={{fontSize: 14, marginTop:10}}>Đây là bài làm của Nguyễn Văn Aaaaaaaaaaaaaaaaaaaaaaaaa</Text> */}
        <View>
          <Text style={{ textAlign: 'center', fontSize: 14, marginTop: 10, marginBottom: 300 }}>Đây là bài làm của Nguyễn Văn A</Text>
        </View>
        {/* <TouchableOpacity style={styles.buttonSubmit} onPress={() => Alert.alert('Đã thêm học sinh')}>
            <Text style={styles.buttonSubmitText}>Phản hồi</Text>
          </TouchableOpacity> */}
        <View>
          <TouchableOpacity style={styles.buttonFeedback} onPress={() => setModalVisible(true)} >
            <Text style={styles.buttonFeedbackText}>Phản hồi</Text>
          </TouchableOpacity>
        </View>
      </View>
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
                <TextInput style={styles.inputClass} onChangeText={onChangeText} value={text} placeholder='Điểm' />
              </View>
              <View style={styles.inputContainer}>
                <TextInput style={styles.inputClass} onChangeText={onChangeText} value={text} placeholder='Nhận xét' />
              </View>
              <View style={styles.contentButton}>
                <TouchableOpacity style={styles.buttonSubmit} onPress={() => Alert.alert('Đã chấm bài')}>
                  <Text style={styles.buttonSubmitText}>Xác nhận</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCancel} onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.buttonCancelText}>Hủy</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const TEXT = {
  fontSize: 14,
  color: '#000',
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
    backgroundColor: 'white',
    margin: 10,
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
  nameMark: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  nameText: {
    flex: 1,
    ...TEXT,
    fontSize: 20,
    color: '#00A9B7',
    fontWeight: 'bold',

  },
  markText: {
    flex: 1,
    ...TEXT,
    fontSize: 18,
    marginLeft: 40,
  },
  contentSubmit: {
    flex: 15,
  },
  buttonFeedback: {
    //flex:1,
    backgroundColor: '#00A9B7',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: 5,

  },
  buttonFeedbackText: {
    ...TEXTBUTTON,
    elevation: 2,
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

export default DetailSubmitTeacher;