import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Store from "../screens/Store";

export type HomeNavigationParamList = {
  HomeMain: undefined;
  Store: {
    order: {
      id: string;
      restaurant: string;
      total: string;
      date: string;
      items: string;
      image: any; 
    };
  };
};

const Stack = createNativeStackNavigator<HomeNavigationParamList>();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={Home} />
      <Stack.Screen name="Store" component={Store} />
    </Stack.Navigator>
  );
}