import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button, Alert, Image } from "react-native";
import { Avatar } from "react-native-elements"

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarName}>
                <Image source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' }}
                    style={styles.image} resizeMode={'cover'} />
                <View style={{ paddingLeft: 20 }}>
                    <Text style={{ fontSize: 18, marginHorizontal: 20 }}>Nguyễn Văn Tĩnh</Text>
                    <Text style={{ fontSize: 14, marginHorizontal: 20 }}>23/03/2000</Text>
                </View>
            </View>
            <View style={styles.ContentContain}>
                <Text style={styles.text}>Email:</Text>
                <View style={styles.boxEmail}>
                    <Text style={{ fontSize: 14, paddingLeft: 10 }}>nguyenvantinh06@gmail.com</Text>
                </View>
            </View>
            <View style={styles.ContentContain}>
                <Text style={styles.text}>Mật khẩu:</Text>
                <View style={styles.box}>
                    <Text style={{ fontSize: 14, paddingLeft: 10 }}>**********</Text>
                </View>
            </View>
            <View style={styles.ContentContain}>
                <Text style={styles.text}>Số điện thoại:</Text>
                <View style={styles.box}>
                    <Text style={{ fontSize: 14, paddingLeft: 10 }}>0123456789</Text>
                </View>
            </View>
            <View style={styles.buttonContain}>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Change button pressed')}>
                    <Text style={styles.buttonText}>Chỉnh sửa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.buttonText}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.contain}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />

        </SafeAreaView>
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
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#00A9B7",
        marginBottom: 5
    }
});

export default ProfileScreen;
