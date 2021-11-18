import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MainStackNavigatorTeacherScreen } from "../../../navigations/StackNavigator";
import {BottomTabNavigatorTeacher} from "../../../navigations/TabNavigator";

 const HomeTeacher = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigatorTeacher />
    </NavigationContainer>
  );
}
export default HomeTeacher