import { View, Text, StyleSheet } from "react-native";

export default function Receipt({ route }) {
  const { order } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receipt</Text>

      <Text style={styles.label}>Restaurant</Text>
      <Text style={styles.value}>{order.restaurant}</Text>

      <Text style={styles.label}>Items</Text>
      <Text style={styles.value}>{order.items}</Text>

      <Text style={styles.label}>Date</Text>
      <Text style={styles.value}>{order.date}</Text>

      <Text style={styles.label}>Total</Text>
      <Text style={styles.value}>{order.total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    color: "#555",
    marginTop: 4,
  },
});