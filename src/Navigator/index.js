import React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Accordian from "../Pages/Accordian/index";
import BlurView from "../Pages/BlurView/index";
import FoldView from "../Pages/FoldView/index";

const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Accordian">
        <Drawer.Screen name="Accordian" component={Accordian} />
        <Drawer.Screen name="BlurView" component={BlurView} />
        <Drawer.Screen name="FoldView" component={FoldView} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
