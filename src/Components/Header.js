import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MenuIcon from "./MenuIcon";
import { primaryLightColor, primaryColor } from "../Styles/index";

export default function Header({ menuBtnPress, title }) {
  return (
    <View style={styles.headerBox}>
      <View style={styles.headerMenuView}>
        <View style={{ flexDirection: "column" }}>
          <MenuIcon
            onPress={() => {
              menuBtnPress();
            }}
            iconColor="#fff"
          />
          <Text style={styles.headerHeading}>{title}</Text>
        </View>
        <View>
          <MaterialCommunityIcons
            name="account-outline"
            size={30}
            color={primaryColor}
            style={styles.headerBoxIcon}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBox: {
    backgroundColor: primaryLightColor,
  },

  headerMenuView: {
    flexDirection: "row",
    padding: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerHeading: {
    color: "#fff",
    paddingTop: 25,
    fontSize: 32,
    fontWeight: "700",
  },

  headerBoxIcon: {
    padding: 10,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
  },
});
