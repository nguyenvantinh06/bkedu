import React from "react";
import { View, Text, StyleSheet } from "react-native";
const DATA = [
{
    id: '123456',
    title: 'Gương cầu',
    url: 'aaaaaaaaa',
    type: 'pdf'
},
{
    id: '123456',
    title: 'Slide cách vẽ gương cầu',
    url: 'aaaaaaaaa',
    type:'word',
},


];
const FileSubjectScreenStudent = () => {
    return (
        <View >
          <Text>{DATA[0].title}</Text>
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

export default  FileSubjectScreenStudent;
