import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

export type HomeNavigationParamList = {
  Home: undefined;
  // Add Restaurant later when we build it
  // Restaurant: { restaurantId: string };
};

const Stack = createNativeStackNavigator<HomeNavigationParamList>();

export default function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
