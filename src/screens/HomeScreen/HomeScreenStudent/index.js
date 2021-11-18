import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MainStackNavigatorStudentScreen } from "../../../navigations/StackNavigatorStudent";
import {BottomTabNavigatorStudent} from "../../../navigations/TabNavigatorStudent";

 const HomeTeacher = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigatorStudent />
    </NavigationContainer>
  );
}
export default HomeStudent