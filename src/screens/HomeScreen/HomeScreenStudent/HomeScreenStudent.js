import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

import FlatClassHome from "./components/FlatClassHome"

const HomeScreenStudent = ({ navigation }) => {
  return (
    <FlatClassHome navigation={navigation} />
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

export default HomeScreenStudent;