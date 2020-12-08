import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function Button(onPress, title, btnStyle, titleStyle) {
  return (
    <TouchableOpacity style={btnStyle} onPress={onPress}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
