import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabs from "./src/navigation/BottomTabs";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}