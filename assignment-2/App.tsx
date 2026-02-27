import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootTabs from "./src/navigation/BottomTabs";

export default function App() {
  return (
    <NavigationContainer>
      <RootTabs />
    </NavigationContainer>
  );
}