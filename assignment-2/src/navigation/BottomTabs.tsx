import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Text,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeNavigation from "./HomeNavigation";
import Browse from "../screens/Browse";
import Search from "../screens/Search";
import Orders from "../screens/Orders";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();

function FloatingTabBar({ state, navigation }: any) {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        const isSearch = route.name === "Search";

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let iconName: keyof typeof Ionicons.glyphMap = "home-outline";

        if (route.name === "Home") {
          iconName = isFocused ? "home" : "home-outline";
        } else if (route.name === "Browse") {
          iconName = isFocused ? "navigate" : "navigate-outline";
        } else if (route.name === "Orders") {
          iconName = isFocused ? "receipt" : "receipt-outline";
        } else if (route.name === "Account") {
          iconName = isFocused ? "person" : "person-outline";
        }

        // Center Search Pill
        if (isSearch) {
          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.searchPill}
              activeOpacity={0.85}
            >
              <Ionicons
                name="search"
                size={18}
                color="#111"
                style={{ marginRight: 6 }}
              />
              <Text style={styles.searchText}>Search</Text>
            </TouchableOpacity>
          );
        }

        // Outer Circles
        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.circle, isFocused && styles.activeCircle]}
            activeOpacity={0.85}
          >
            <Ionicons
              name={iconName}
              size={20}
              color={isFocused ? "white" : "#111"}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <FloatingTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Browse" component={Browse} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 26 : 16,
    left: 0,
    right: 0,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  circle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 5,
  },

  activeCircle: {
    backgroundColor: "#111",
  },

  searchPill: {
    height: 48,
    minWidth: 120,
    borderRadius: 24,
    backgroundColor: "white",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 6,
  },

  searchText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
  },
});