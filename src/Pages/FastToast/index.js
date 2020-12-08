import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import Header from "../../Components/Header";
import { primaryColor } from "../../Styles";
import { useToast } from "react-native-fast-toast";

export default function FastToast(props) {
  const [toastInputVal, setToastInputVal] = useState("");
  const [toastType, setToastType] = useState("success");
  const toast = useToast();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header
        menuBtnPress={() => {
          props.navigation.toggleDrawer();
        }}
        title={"Fast toast"}
      />
      <View>
        <TextInput
          value={toastInputVal}
          onChangeText={(text) => {
            setToastInputVal(text);
          }}
          placeholder={"Enter toast text"}
          style={styles.toastTextInput}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        >
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#fcba03" }]}
            onPress={() => {
              setToastType("warning");
            }}
          >
            <Text style={{ color: "#fff", fontSize: 17 }}>Warning</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#ed4f3e" }]}
            onPress={() => {
              setToastType("danger");
            }}
          >
            <Text style={{ color: "#fff", fontSize: 17 }}>Danger</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#3a9136" }]}
            onPress={() => {
              setToastType("success");
            }}
          >
            <Text style={{ color: "#fff", fontSize: 17 }}>Success</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            toastInputVal === ""
              ? toast.show("Default text", { type: toastType })
              : toast.show(toastInputVal, { type: toastType });
          }}
        >
          <Text style={{ color: "#fff", fontSize: 17 }}>Show Toast</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  toastTextInput: {
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#efefef",
    fontSize: 17,
  },
  button: {
    alignSelf: "center",
    marginVertical: 15,
    backgroundColor: primaryColor,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },
});
