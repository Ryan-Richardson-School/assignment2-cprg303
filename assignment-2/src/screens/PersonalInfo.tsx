import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PersonalInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal info</Text>

      {/* PROFILE IMAGE */}
      <View style={styles.profilePic} />

      {/* INFO CARD */}
      <View style={styles.card}>
        {/* NAME */}
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>John Smith</Text>

        {/* PHONE */}
        <Text style={styles.label}>Phone number</Text>
        <View style={styles.row}>
          <Text style={styles.value}>+1 (825) 978-2117</Text>
          <Ionicons name="checkmark-circle" size={20} color="#4CAF50" style={styles.icon} />
        </View>

        {/* EMAIL */}
        <Text style={styles.label}>Email</Text>
        <View style={styles.row}>
          <Text style={styles.value}>johnsmith@gmail.com</Text>
          <Ionicons name="checkmark-circle" size={20} color="#4CAF50" style={styles.icon} />
        </View>

        {/* LANGUAGE */}
        <Text style={styles.label}>Language</Text>
        <View style={styles.row}>
          <Text style={styles.value}>Update device language</Text>
          <Ionicons name="chevron-forward" size={20} color="#555" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
  },

  profilePic: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#e5e5e5",
    alignSelf: "center",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 12,
  },

  label: {
    fontSize: 14,
    color: "#777",
    marginTop: 18,
  },

  value: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 3,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    marginLeft: 6,
  },
});