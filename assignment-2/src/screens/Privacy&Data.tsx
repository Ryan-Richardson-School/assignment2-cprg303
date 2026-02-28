import { View, Text, StyleSheet } from "react-native";

export default function PrivacyData() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Privacy & Data</Text>

      <Text style={styles.label}>Data Sharing</Text>
      <Text style={styles.value}>Standard</Text>

      <Text style={styles.label}>Download Your Data</Text>
      <Text style={styles.value}>Available upon request</Text>
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
  label: {
    fontSize: 14,
    color: "#777",
    marginTop: 20,
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
  },
});