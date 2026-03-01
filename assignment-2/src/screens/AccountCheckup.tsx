import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AccountCheckup() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account checkup</Text>

      {/* PASSKEYS */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Passkeys</Text>
        <Text style={styles.cardText}>
          Use passkeys for an easier, faster and more secure sign in to your Uber account
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>

      {/* 2 STEP VERIFICATION */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>2-step verification</Text>
        <Text style={styles.value}>Turn on 2-step verification</Text>
      </View>

      {/* PHONE */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Phone number</Text>
        <Text style={styles.value}>+1 (825) 962-0996</Text>
      </View>

      {/* EMAIL */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Email</Text>
        <Text style={styles.value}>anagharoy411@gmail.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 26, fontWeight: "700", marginBottom: 20 },

  card: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },

  cardText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 15,
  },

  value: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 3,
  },

  button: {
    backgroundColor: "black",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});