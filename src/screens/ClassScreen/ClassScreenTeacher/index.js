import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MainStackNavigatorTeacherScreen } from "../../../navigations/StackNavigator";
import {BottomTabNavigatorTeacher, BottomTabNavigatorTeacherClass} from "../../../navigations/TabNavigator";

const ClassTeacher = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigatorTeacherClass />
    </NavigationContainer>
  );
}
export default ClassTeacher