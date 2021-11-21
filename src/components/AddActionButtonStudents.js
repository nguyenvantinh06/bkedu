import React, {useState} from 'react';

import { View, StyleSheet, Text, Alert, Modal, TextInput, TouchableOpacity, Picker } from 'react-native';

import ActionButton from 'react-native-action-button';

import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons'; 


export default function AddActionButtonStudents() {
    const [StudentModalVisible, setStudentModalVisible] = useState(false);
    const [ClassModalVisible, setClassModalVisible] = useState(false);

    const [EmailText, onChangeEmailText] = useState();
    const [selectedClass, setSelectedClass] = useState("");

    return (
    <>
        <ActionButton buttonColor="#00A9B7">
            <ActionButton.Item
                buttonColor="#9b59b6"
                title="Thêm học sinh"
                onPress={() => setStudentModalVisible(!StudentModalVisible)}>
                <Icon name="md-person-add" style={styles.icon} />
                </ActionButton.Item>

            <ActionButton.Item
                buttonColor="#00B8D4"
                title="Nhập lớp học"
                onPress={() => setClassModalVisible(!ClassModalVisible)}>
                    <MaterialIcons name="group-add" style={styles.icon} />
                </ActionButton.Item>
        </ActionButton>

        <Modal
            animationType="slide"
            transparent={true}
            visible={StudentModalVisible}
            onRequestClose={() => {
                setStudentModalVisible(!StudentModalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.contentAddStudent}>
                        <View style={styles.EmailContainer}>
                            <TextInput style={styles.inputMail} onChangeText={onChangeEmailText} value={EmailText} placeholder='Email học sinh' />
                        </View>
                    <View style={styles.contentButton}>
                        <TouchableOpacity style={styles.buttonSubmit} onPress={() => Alert.alert('Đã thêm học sinh')}>
                            <Text style={styles.buttonSubmitText}>Thêm học sinh</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonCancel} onPress={() => setStudentModalVisible(!StudentModalVisible)}>
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
            visible={ClassModalVisible}
            onRequestClose={() => {
                setClassModalVisible(!ClassModalVisible);
            }}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.contentAddStudent}>
                        <View style={styles.ClassContainer}>
                            {/* <TextInput style={styles.inputMail} onChangeText={onChangeDocuText} value={DocuText} placeholder='Tài liệu' /> */}
                            <Picker
                                selectedValue={selectedClass}
                                onValueChange={(itemValue, itemIndex) => setSelectedClass(itemValue)}
                                style={styles.selectclass}
                            >
                                <Picker.Item label="7A" value="7A" />
                                <Picker.Item label="7B" value="7B" />
                                <Picker.Item label="8A" value="8A" />
                                <Picker.Item label="9B" value="9B" />
                            </Picker>
                        </View>
                    <View style={styles.contentButton}>
                        <TouchableOpacity style={styles.buttonSubmit} onPress={() => Alert.alert('Đã thêm lớp học')}>
                            <Text style={styles.buttonSubmitText}>Nhập lớp học</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonCancel} onPress={() => setClassModalVisible(!ClassModalVisible)}>
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
        justifyContent: 'center',
        alignItems:'center'
    },
    ClassContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#B5B5B5',
        borderRadius: 5,
        padding: 5,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems:'center'
    },
    selectclass: {
        flex: 1,
    },
    inputMail:{
        flex:1
    }
});