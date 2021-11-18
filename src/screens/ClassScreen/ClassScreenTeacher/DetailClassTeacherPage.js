import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailClassTeacherPage = () => {
    return (
        <View style={styles.center}>
          <Text>This is the Detail Class Teacher Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    },
});

export default  DetailClassTeacherPage;