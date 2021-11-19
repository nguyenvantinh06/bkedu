import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import {BottomTabNavigatorStudent,BottomTabNavigatorStudentClass} from "../../../navigations/TabNavigatorStudent";

const ClassStudent = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigatorStudentClass />
    </NavigationContainer>
  );
}
export default ClassStudent