import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Orders from "../screens/Orders";
import Store from "../screens/Store";
import Receipt from "../screens/Receipt";

//
export type OrdersNavigationParamList = {
  OrdersMain: undefined;
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
  Receipt: {
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

const Stack = createNativeStackNavigator<OrdersNavigationParamList>();

export default function OrdersNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OrdersMain" component={Orders} />
      <Stack.Screen name="Store" component={Store} />
      <Stack.Screen name="Receipt" component={Receipt} />
    </Stack.Navigator>
  );
}