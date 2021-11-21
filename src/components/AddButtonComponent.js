import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from "react-native";

const AddButtonComponent = ({onPress}) => {
    
    return (
        <TouchableOpacity style={styles.addButton} onPress={onPress}>
            <Text style={styles.addIcon}>+</Text>
        </TouchableOpacity>
    )
  };  

const styles = StyleSheet.create({
    addButton: {
        height: 55,
        width: 55,
        elevation: 3,
        borderColor: "#00F",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 30,
        right: 30,
        backgroundColor: '#00A9B7'
    },
    addIcon: {
        fontSize: 25,
        color: "white",
        textAlign: "center"
    }
  });
  
export default AddButtonComponent;