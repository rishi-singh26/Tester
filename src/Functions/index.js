import { ToastAndroid } from "react-native";

export function toast(message) {
  ToastAndroid.showWithGravity(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.CENTER
  );
}

export function createStringWithFirstLetterCapital(string) {
  var capitalisedArr = string
    .toLowerCase()
    .split(" ")
    .map((item, index) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    });
  return capitalisedArr.join(" ");
}

export function createStringWithAllLettersCapital(string) {
  var strArr = string.split("");
  var capitalisedArr = [];
  strArr.map((item, index) => {
    capitalisedArr.push(item.toUpperCase());
  });
  return capitalisedArr.join("");
}
