import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button, Alert } from "react-native";
import {Avatar} from "react-native-elements"

const ProfileScreen = () => {
    return (
        
        <View style={styles.container}>
            <View style={styles.avatarName}>
                <Avatar size="large" rounded source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',}} />
                <View style={{paddingLeft:20}}>
                    <Text style={{fontSize:18, marginHorizontal: 20}}>Nguyễn Văn Tĩnh</Text>
                    <Text style={{fontSize:14, marginHorizontal: 20}}>23/03/2000</Text>
                </View>
            </View>
            <View style={styles.ContentContain}>
                <Text style={styles.text}>Email:</Text>
                <View style={styles.boxEmail}>
                    <Text style={{fontSize:14, paddingLeft:10}}>nguyenvantinh06@gmail.com</Text>
                </View>
            </View>
            <View style={styles.ContentContain}>
                <Text style={styles.text}>Mật khẩu:</Text>
                <View style={styles.box}>
                    <Text style={{fontSize:14, paddingLeft: 10}}>**********</Text>
                </View>
            </View>
            <View style={styles.ContentContain}>
                <Text style={styles.text}>Số điện thoại:</Text>
                <View style={styles.box}>
                    <Text style={{fontSize:14, paddingLeft: 10}}>0123456789</Text>
                </View>
            </View>
            <View style={styles.buttonContain}>
                {/* <Button
                    title="Chỉnh sửa"
                    onPress={() => Alert.alert('Chang button pressed')}
                />
                <Button
                    title="Đăng xuất"
                    onPress={() => Alert.alert('Logout button pressed')}
                /> */}
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Changr button pressed')}>
                    <Text style={styles.buttonText}>Chỉnh sửa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Logout button pressed')}>
                    <Text style={styles.buttonText}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
};

const TEXT = {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 18
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'space-around',
    },
    avatarName: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
    },
    ContentContain: {
        flex:1,
        marginHorizontal: 20,
        justifyContent: 'center',
    },
    boxEmail:{
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#DADADA',
        borderColor: '#00A9B7',
        height: 40,
        borderRadius:5,
        justifyContent: 'center',
        marginTop: 5,
    },
    box:{
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#fff',
        borderColor: '#00A9B7',
        height: 40,
        borderRadius:5,
        justifyContent: 'center',
        marginTop: 5,
    },
    buttonContain: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button:{
        backgroundColor: '#00A9B7',
        height: 40,
        width: 140,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    buttonText:{
        fontSize: 14,
        textAlign: "center",
        color: 'white',
        fontWeight: 'bold'
    },
    text: {
        ...TEXT,
    }
});

export default  ProfileScreen;