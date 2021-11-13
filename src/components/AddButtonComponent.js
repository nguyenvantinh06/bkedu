import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from "react-native";

const TestPress = () => {
    console.log('Press');
}
const AddButtonComponent = () => {
    
    return (
        <TouchableOpacity style={styles.addButton} onPress={TestPress}>
            <Text style={styles.addIcon}>+</Text>
        </TouchableOpacity>
    )
  };  

const styles = StyleSheet.create({
    addButton: {
        height: 50,
        width: 50,
        elevation: 3,
        borderColor: "#00F",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 25,
        right: 25,
        backgroundColor: '#00A9B7'
    },
    addIcon: {
        fontSize: 25,
        color: "white",
        textAlign: "center"
    }
  });
  
export default AddButtonComponent;