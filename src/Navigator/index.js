import React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Accordian from "../Pages/Accordian/index";
import BlurView from "../Pages/BlurView/index";
import BottomTabs from "../Pages/CustomBottomTabs/index";
import Chips from "../Pages/Chip/index";

const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Accordian">
        <Drawer.Screen name="Accordian" component={Accordian} />
        <Drawer.Screen name="BlurView" component={BlurView} />
        <Drawer.Screen name="BottomTabs" component={BottomTabs} />
        <Drawer.Screen name="Chips" component={Chips} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
