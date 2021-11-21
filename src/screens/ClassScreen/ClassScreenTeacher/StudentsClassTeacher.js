import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Alert, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AddButtonComponent from "../../../components/AddButtonComponent"
import AddActionButtonStudents from "../../../components/AddActionButtonStudents"

const DATA = [
    {
        fullName: 'Nguyễn Văn Tĩnh',
        uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
    },
    {
        fullName: 'Nguyễn Văn Tĩnh',
        uri: 'https://www.w3schools.com/w3images/avatar2.png',
    },
    {
        fullName: 'Nguyễn Văn Tĩnh',
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_EtH246MdNMHK4XgrftXYAPNZk4LIaOvQ1s7De-cq8GUOmpfyqO4jkB7KBt1lQ0s6N94&usqp=CAU',
    },
];

// const Item = ({ fullName, uri }) => (
//     <View style={styles.container}>
//         <TouchableOpacity onPress={() => Alert.alert('Xem thông tin cá nhân')}>
//             <Image source={{uri : {uri}}}
//                 style={styles.image} resizeMode={'cover'} />
//             <Text style={styles.nameText}>{fullName}</Text>
//         </TouchableOpacity>
//     </View>
// );

const StudentsClassScreenTeacher = () => {
    const renderItem = ({ item }) => (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => Alert.alert('Xem thông tin cá nhân')}>
                <Image source={{ uri: item.uri }}
                    style={styles.image} resizeMode={'cover'} />
                <Text style={styles.nameText}>{item.fullName}</Text>
            </TouchableOpacity>
        </View>
    );

    const [modalVisible, setModalVisible] = useState(false);
    const [text, onChangeText] = React.useState(null);

    return (
        <SafeAreaView style={styles.contain}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
            />
            {/* <AddButtonComponent onPress={() => setModalVisible(true)} />
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
                        <View style={styles.contentAddStudent}>
                            <View style={styles.EmailContainer}>
                                <TextInput style={styles.inputMail} onChangeText={onChangeText} value={text} placeholder='Email học sinh' />
                            </View>
                            <View style={styles.contentButton}>
                                <TouchableOpacity style={styles.buttonSubmit} onPress={() => Alert.alert('Đã thêm học sinh')}>
                                    <Text style={styles.buttonSubmitText}>Thêm học sinh</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonCancel} onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.buttonCancelText}>Hủy</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            <AddButtonComponent onPress={() => Alert.alert('Modal Thêm học sinh')} /> */}
            <AddActionButtonStudents />
        </SafeAreaView>
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
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contain: {
        flex: 1,
    },
    iconTitle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameText: {
        ...TEXT,
        textAlign: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#00A9B7",
        marginBottom: 5
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

export default StudentsClassScreenTeacher;
