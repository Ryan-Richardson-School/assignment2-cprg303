import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootTabs from "./BottomTabs";
import Store from "../screens/Store";
import Receipt from "../screens/Receipt"; 

const Stack = createNativeStackNavigator();

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
    </Stack.Navigator>
  );
}