import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button, Alert, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt from "jwt-decode";
import { useIsFocused } from "@react-navigation/native";

const ProfileScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    // const isVisible = useIsFocused();

    useEffect(async () => {
        const token = await AsyncStorage.getItem('access_token');
        const user = jwt(token);
        fetch(`https://bkedu-backend.herokuapp.com/v1/${(user.role).toLowerCase()}s/${user._id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.code == 200) {
                    setName(data.result.name);
                    setEmail(data.result.email);
                    setPhone(data.result.phone_number);
                }
                else navigation.navigate('LoginScreen')
            })
            .catch(error => console.log(error));
    }, [email]);
    return (
        <View style={styles.container}>
            <View style={styles.avatarName}>
                <Image source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' }}
                    style={styles.image} resizeMode={'cover'} />
            </View>
            <View style={styles.ContentContain}>
                <Text style={styles.text}>Email:</Text>
                <View style={styles.boxEmail}>
                    <Text style={{ fontSize: 14, paddingLeft: 10 }}>{email}</Text>
                </View>
            </View>
            <View style={styles.ContentContain}>
                <Text style={styles.text}>Họ và tên</Text>
                <View style={styles.box}>
                    <Text style={{ fontSize: 14, paddingLeft: 10 }}>{name}</Text>
                </View>
            </View>
            <View style={styles.ContentContain}>
                <Text style={styles.text}>Số điện thoại:</Text>
                <View style={styles.box}>
                    <Text style={{ fontSize: 14, paddingLeft: 10 }}>{phone}</Text>
                </View>
            </View>
            <View style={styles.buttonContain}>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Change button pressed')}>
                    <Text style={styles.buttonText}>Chỉnh sửa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={async () => {
                    const keys = await AsyncStorage.getAllKeys();
                    await AsyncStorage.multiRemove(keys);
                    navigation.navigate('LoginScreen');
                }}>
                    <Text style={styles.buttonText}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const TEXT = {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Roboto',
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
    },
    avatarName: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    ContentContain: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center',
    },
    boxEmail: {
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#DADADA',
        borderColor: '#00A9B7',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 5,
    },
    box: {
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#fff',
        borderColor: '#00A9B7',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 5,
    },
    buttonContain: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#00A9B7',
        height: 40,
        width: 140,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    buttonText: {
        fontSize: 14,
        textAlign: "center",
        color: 'white',
        fontWeight: 'bold'
    },
    timeSubmitText: {
        ...TEXT,
        marginVertical: 5,

    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 90 / 2,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#00A9B7",
        marginBottom: 5
    }
});

export default ProfileScreen;
