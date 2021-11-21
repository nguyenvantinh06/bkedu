import React, {useState} from 'react';

import { View, StyleSheet, Text, Alert, Modal, TextInput, TouchableOpacity } from 'react-native';

import ActionButton from 'react-native-action-button';

import Icon from 'react-native-vector-icons/Ionicons';

export default function AddActionButtonDetailClass() {
  const [ImagemodalVisible, setImageModalVisible] = useState(false);
  const [DocumentmodalVisible, setDocumentmodalVisible] = useState(false);
  const [NotimodalVisible, setNotimodalVisible] = useState(false);

  const [text, onChangeText] = useState();
  const [DocuText, onChangeDocuText] = useState();
  const [noti, onChangeNoti] = useState();

  return (
    <>
      <ActionButton buttonColor="#00BFA5">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Tải lên hình ảnh"
          // onPress={() => Alert.alert('Chọn hình ảnh cần tải lên')}>
          onPress={() => setImageModalVisible(!ImagemodalVisible)}>
          <Icon
            name="md-cloud-upload"
            style={styles.icon}
          />
        </ActionButton.Item>

        <ActionButton.Item
          buttonColor="#00B8D4"
          title="Tải lên tài liệu"
          onPress={() => setDocumentmodalVisible(!DocumentmodalVisible)}>
          <Icon
            name="md-documents"
            style={styles.icon}
          />
        </ActionButton.Item>

        <ActionButton.Item
          buttonColor="#FF3D00"
          title="Thông báo"
          onPress={() => setNotimodalVisible(!NotimodalVisible)}>
          <Icon
            name="md-notifications"
            style={styles.icon}
          />
        </ActionButton.Item>
      </ActionButton>

            <Modal
                animationType="slide"
                transparent={true}
                visible={ImagemodalVisible}
                onRequestClose={() => {
                    setImageModalVisible(!ImagemodalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.contentAddStudent}>
                            <View style={styles.EmailContainer}>
                                <TextInput style={styles.inputMail} onChangeText={onChangeText} value={text} placeholder='Ảnh' />
                            </View>
                            <View style={styles.contentButton}>
                                <TouchableOpacity style={styles.buttonSubmit} onPress={() => Alert.alert('Đã thêm ảnh')}>
                                    <Text style={styles.buttonSubmitText}>Thêm ảnh</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonCancel} onPress={() => setImageModalVisible(!ImagemodalVisible)}>
                                    <Text style={styles.buttonCancelText}>Hủy</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={DocumentmodalVisible}
                onRequestClose={() => {
                  setDocumentmodalVisible(!DocumentmodalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.contentAddStudent}>
                            <View style={styles.EmailContainer}>
                                <TextInput style={styles.inputMail} onChangeText={onChangeDocuText} value={DocuText} placeholder='Tài liệu' />
                            </View>
                            <View style={styles.contentButton}>
                                <TouchableOpacity style={styles.buttonSubmit} onPress={() => Alert.alert('Đã thêm tài liệu')}>
                                    <Text style={styles.buttonSubmitText}>Thêm tài liệu</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonCancel} onPress={() => setDocumentmodalVisible(!DocumentmodalVisible)}>
                                    <Text style={styles.buttonCancelText}>Hủy</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={NotimodalVisible}
                onRequestClose={() => {
                    setNotimodalVisible(!NotimodalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.contentAddStudent}>
                            <View style={styles.EmailContainer}>
                                <TextInput style={styles.inputMail} onChangeText={onChangeText} value={text} placeholder='Email học sinh' />
                            </View>
                            <View style={styles.contentButton}>
                                <TouchableOpacity style={styles.buttonSubmit} onPress={() => Alert.alert('Đã thêm thông báo thành công')}>
                                    <Text style={styles.buttonSubmitText}>Thêm thông báo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonCancel} onPress={() => setNotimodalVisible(!NotimodalVisible)}>
                                    <Text style={styles.buttonCancelText}>Hủy</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

    </>
  );
}

const TEXT = {
  fontSize: 12,
  color: '#000',
  fontFamily: 'Roboto',
  fontWeight: 'bold'
}
const TEXTBUTTON = {
  fontSize: 14,
  color: '#fff',
  fontFamily: 'Roboto',
  fontWeight: 'bold'
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
  },

  icon: {
    fontSize: 24,
    height: 24,
    color: 'white',
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
    height: 120,
    borderWidth: 1,
    borderColor: '#B5B5B5',
    padding: 10
},
contentAddStudent: {
    flex: 1,
    borderColor: '#B5B5B5',
    borderRadius: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
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
EmailContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#B5B5B5',
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
},
inputMail: {
    flex: 1,
},
});