import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Alert, TouchableOpacity, Image } from 'react-native';

import AddButtonComponent from "../../../components/AddButtonComponent"

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
                <Image source={{uri : item.uri}}
                    style={styles.image} resizeMode={'cover'} />
                <Text style={styles.nameText}>{item.fullName}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.contain}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={3}
            />
            <AddButtonComponent />
        </SafeAreaView>
    );
}

const TEXT = {
    fontSize: 12,
    color: '#000',
    fontFamily: 'Roboto',
    fontWeight: 'bold'
}
const styles = StyleSheet.create({
    container: {
        flex:1,
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
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameText:{
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
    }
});

export default StudentsClassScreenTeacher;
