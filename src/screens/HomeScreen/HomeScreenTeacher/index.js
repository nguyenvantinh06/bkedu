import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MainStackNavigator } from "../../../navigations/StackNavigator";
import BottomTabNavigatorTeacher from "../../../navigations/TabNavigator";

 const HomeTeacher = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
export default HomeTeacher