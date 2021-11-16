import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Dimensions, Image, Alert } from "react-native";

const TestPress = () => {
    Alert.alert('Hiển thị trang danh sách')
}
const CustomButton = ({title}) => {
    
    return (
        <TouchableOpacity style={styles.buttonListSubmit} onPress={TestPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
};  

const TEXT = {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Roboto',
}
const styles = StyleSheet.create({
    buttonListSubmit: {
        borderColor: '#00A9B7',
        borderWidth: 1.5,
        height: 30,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText:{
        ...TEXT,
        color: "#00A9B7",
    }
});
  
export default CustomButton;