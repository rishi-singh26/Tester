import React from "react";
import { StatusBar } from "react-native";

export default function CustomStatus({ backgroundColor, contentType }) {
  return <StatusBar barStyle={contentType} backgroundColor={backgroundColor} />;
}
