// import React from "react";
// import { View, Text } from "react-native";

// export default function AccountScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Account Screen</Text>
//     </View>
//   );
// }

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Account() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* TOP BAR */}
      <View style={styles.topBar}>
        <Text style={[styles.topTab, styles.activeTab]}>Home</Text>
        <TouchableOpacity onPress={() => navigation.navigate("PersonalInfo")}>
          <Text style={styles.topTab}>Personal info</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Security")}>
          <Text style={styles.topTab}>Security</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("PrivacyData")}>
          <Text style={styles.topTab}>Privacy & Data</Text>
        </TouchableOpacity>
      </View>

      {/* PROFILE */}
      <View style={styles.profileSection}>
        <View style={styles.avatar} />
        <Text style={styles.name}>John Smith</Text>
        <Text style={styles.email}>johnsmith@gmail.com</Text>
      </View>

      {/* ICON CARDS */}
      <View style={styles.iconRow}>
        <TouchableOpacity
          style={styles.iconCard}
          onPress={() => navigation.navigate("PersonalInfo")}
        >
          <Ionicons name="person-outline" size={32} color="black" />
          <Text style={styles.iconLabel}>Personal info</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconCard}
          onPress={() => navigation.navigate("Security")}
        >
          <Ionicons name="shield-checkmark-outline" size={32} color="black" />
          <Text style={styles.iconLabel}>Security</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconCard}
          onPress={() => navigation.navigate("PrivacyData")}
        >
          <Ionicons name="lock-closed-outline" size={32} color="black" />
          <Text style={styles.iconLabel}>Privacy & Data</Text>
        </TouchableOpacity>
      </View>

      {/* SUGGESTIONS CARD */}
      <View style={styles.suggestionCard}>
        <Text style={styles.suggestionTitle}>
          Complete your account checkup
        </Text>
        <Text style={styles.suggestionText}>
          Complete your account checkup to make Uber work better for you and
          keep you secure.
        </Text>

        <TouchableOpacity style={styles.checkupButton}>
          <Text style={styles.checkupButtonText}>Begin checkup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20 
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  topTab: {
    fontSize: 14,
    fontWeight: "600",
    color: "#777",
  },

  activeTab: {
    color: "black",
    borderBottomWidth: 2,
    borderColor: "black",
    paddingBottom: 4,
  },

  profileSection: { 
    alignItems: "center",
    marginBottom: 30
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#e5e5e5",
    marginBottom: 10,
  },

  name: { 
    fontSize: 22,
    fontWeight: "700" 
  },

  email: { 
    fontSize: 14,
    color: "#555" 
  },

  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  iconCard: {
    width: "30%",
    backgroundColor: "#f5f5f5",
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: "center",
  },

  iconLabel: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },

  suggestionCard: { 
    backgroundColor: "#f5f5f5",
    padding: 20, 
    borderRadius: 12 
  },

  suggestionTitle: { 
    fontSize: 18,
    fontWeight: "700", 
    marginBottom: 8 
  },

  suggestionText: { 
    fontSize: 14, 
    color: "#555",
    marginBottom: 15 
  },

  checkupButton: {
    backgroundColor: "black",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  checkupButtonText: { 
    color: "white",
    fontSize: 16, 
    fontWeight: "600" 
  },
});
