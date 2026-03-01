import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Account from "../screens/Account";
import PersonalInfo from "../screens/PersonalInfo";
import Security from "../screens/Security";
import PrivacyData from "../screens/Privacy&Data";
import AccountCheckup from "../screens/AccountCheckup";

//Houses all the links for the other tabs

export type AccountNavigationParamList = {
  AccountMain: undefined;
  PersonalInfo: undefined;
  Security: undefined;
  PrivacyData: undefined;
  AccountCheckup: undefined;
};

const Stack = createNativeStackNavigator<AccountNavigationParamList>();

export default function AccountNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AccountMain" component={Account} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      <Stack.Screen name="Security" component={Security} />
      <Stack.Screen name="PrivacyData" component={PrivacyData} />
      <Stack.Screen name="AccountCheckup" component={AccountCheckup} />
    </Stack.Navigator>
  );
}