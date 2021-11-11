import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const HomeScreenTeacher = ({navigation}) => {
return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button title="Go to Class Screen" 
        onPress={() => navigation.navigate("Class")}
      />
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

export default HomeScreenTeacher;