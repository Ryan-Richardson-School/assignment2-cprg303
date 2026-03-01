import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootTabs from "./BottomTabs";
import Store from "../screens/Store";
import Receipt from "../screens/Receipt"; 
import Account from "../screens/Account";
import PersonalInfo from "../screens/PersonalInfo";
import Security from "../screens/Security";
import PrivacyData from "../screens/Privacy&Data";
import AccountCheckup from "../screens/AccountCheckup";

export type RootStackParamList = {
  Tabs: undefined;
  Store: { order: any };
  Receipt: { order: any };
  Account: undefined;
  PersonalInfo: undefined;
  Security: undefined;
  PrivacyData: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={RootTabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Store"
        component={Store}
        options={{ title: "Store" }}
      />

      <Stack.Screen
        name="Receipt"
        component={Receipt}
        options={{ title: "Receipt" }}
       />

      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      <Stack.Screen name="Security" component={Security} />
      <Stack.Screen name="PrivacyData" component={PrivacyData} />
      <Stack.Screen name="AccountCheckup" component={AccountCheckup} />
    </Stack.Navigator>
  );
}