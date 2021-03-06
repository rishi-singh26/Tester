import React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Accordian from "../Pages/Accordian/index";
import BlurView from "../Pages/BlurView/index";
import BottomTabs from "../Pages/CustomBottomTabs/index";
import Chips from "../Pages/Chip/index";
import SwipeToDelete from "../Pages/SwipeToDelete/index";
import Calender from "../Pages/Calender/index";
import FastToast from "../Pages/FastToast/index";
import { primaryLightColor } from "../Styles";

const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Accordian"
        // drawerStyle={{
        //   backgroundColor: primaryLightColor,
        //   width: 60,
        //   borderColor: primaryLightColor,
        // }}
        // drawerType="permanent"
      >
        <Drawer.Screen name="Accordian" component={Accordian} />
        <Drawer.Screen name="Blur View" component={BlurView} />
        <Drawer.Screen name="Bottom Tabs" component={BottomTabs} />
        <Drawer.Screen name="Chips" component={Chips} />
        <Drawer.Screen name="Swipe To Delete" component={SwipeToDelete} />
        <Drawer.Screen name="Calender" component={Calender} />
        <Drawer.Screen name="Fast Toast" component={FastToast} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
