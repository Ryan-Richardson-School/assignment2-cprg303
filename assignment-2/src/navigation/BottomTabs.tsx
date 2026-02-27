import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OrdersScreen from "../screens/Orders";
import AccountScreen from "../screens/Account";
import HomeNavigation from "./HomeNavigation";

export type BottomTabParamList = {
  Home: undefined;
  Orders: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();
export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home"component={HomeNavigation} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}