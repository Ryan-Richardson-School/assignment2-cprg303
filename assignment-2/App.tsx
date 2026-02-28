import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//import RootTabs from "./src/navigation/BottomTabs";
import RootStack from "./src/navigation/RootStack";

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}