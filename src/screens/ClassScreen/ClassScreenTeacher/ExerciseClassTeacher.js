import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Alert, TouchableOpacity, Modal, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import CustomButton from "../../../components/CustomButton"
import AddButtonComponent from "../../../components/AddButtonComponent"
import DatePickerApp from "../../../components/DatePickerApp"

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

// const Item = ({ title, desc, deadline }) => (
//     <View style={styles.container}>
//         <View style={styles.desciption}>
//             <View style={styles.iconTitle}>
//                 <MaterialIcons name="assignment" size={24} color="grey" />
//                 <Text style={styles.titleText}> {title}</Text>
//             </View>
//             <Text style={styles.descText}>{desc}</Text>
//             <Text style={styles.deadlineText}>Hạn nộp: {deadline}</Text>
//         </View>
//         <View style={styles.listResult}>
//             <Text style={styles.titleText}>Thang điểm: 10</Text>
//             {/* <TouchableOpacity style={styles.buttonListSubmit} onPress={() => Alert.alert('Hiển thị danh sách bài nộp')}>
//                 <Text style={styles.buttonText}>Danh sách bài nộp</Text>
//             </TouchableOpacity> */}
//             <CustomButton title={'Danh sách bài nộp'} onPress={() => Alert.alert('Hiển thị danh sách')} />
//         </View>
//     </View>
// );

const ExercisesClassScreenTeacher = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <View style={styles.container}>
            <View style={styles.desciption}>
                <View style={styles.iconTitle}>
                    <MaterialIcons name="assignment" size={24} color="grey" />
                    <Text style={styles.titleText}> {item.title}</Text>
                </View>
                <Text style={styles.descText}>{item.desc}</Text>
                <Text style={styles.deadlineText}>Hạn nộp: {item.deadline}</Text>

            </View>
            <View style={styles.listResult}>
                <Text style={styles.titleText}>Thang điểm: 10</Text>
                {/* <TouchableOpacity style={styles.buttonListSubmit} onPress={() => navigation.push("ExercisesClassDetail", {name:"{item.desc}"})} >
                <Text style={styles.buttonText}>Danh sách bài nộp</Text>
            </TouchableOpacity> */}
                <CustomButton title={'Danh sách bài nộp'} onPress={() => navigation.navigate({ name: "DetailSubmitTeacher", params: { name: item.desc } })} />
            </View>
        </View>
    );

    const [modalVisible, setModalVisible] = useState(false);
    const [text, onChangeText] = React.useState(null);

    return (
        <SafeAreaView style={styles.contain}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <AddButtonComponent onPress={() => setModalVisible(true)} />
            {/* <AddButtonComponent onPress={() => setModalVisible(true)} /> */}
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
                        <View style={styles.contentAddExercise}>
                            <View style={styles.DescContainer}>
                                <TextInput style={styles.inputDesc} onChangeText={onChangeText} value={text} placeholder='Mô tả bài tập lớn' />
                            </View>
                            <View style={styles.selectedDate}>
                                <TextInput style={styles.inputDate} onChangeText={onChangeText} value={text} placeholder='Hạn nộp' />
                                <DatePickerApp style={styles.datepickerapp} />
                            </View>
                            <View style={styles.contentButton}>
                                <TouchableOpacity style={styles.buttonSubmit} onPress={() => Alert.alert('Đã thêm bài tập thành công')}>
                                    <Text style={styles.buttonSubmitText}>Tạo bài tập</Text>
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
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 10,
        marginHorizontal: 10,
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
    contain: {
        flex: 1,
    },
    desciption: {
        flex: 1,
        justifyContent: "center",
    },
    listResult: {
        flex: 1,
        justifyContent: "space-around",

    },
    titleText: {
        ...TEXT,
        marginVertical: 5,
    },
    descText: {
        fontSize: 18,
        fontWeight: 'bold',
        //marginVertical: 5,
    },
    deadlineText: {
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
        height: 180,
        borderWidth: 1,
        borderColor: '#B5B5B5',
        padding: 10,
    },
    contentAddExercise: {
        flex: 1,
        borderColor: '#B5B5B5',
        borderRadius: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    DescContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#B5B5B5',
        borderRadius: 5,
        padding: 5,
        marginVertical: 5,
    },
    inputDesc: {
        flex: 1,
    },
    selectedDate: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#B5B5B5',
        borderRadius: 5,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    inputDate: {
        flex: 1
    },
    datepickerapp: {
        flex: 1,
        justifyContent: 'center',
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



});

export default ExercisesClassScreenTeacher;
