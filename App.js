import React from "react";
import Navigator from "./src/Navigator/index";
import { ToastProvider } from "react-native-fast-toast";

export default function App() {
  return (
    <ToastProvider>
      <Navigator />
    </ToastProvider>
  );
}
