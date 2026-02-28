import { View, Text, Image, StyleSheet } from "react-native";

export default function Store({ route }) {
  const { order } = route.params;

  return (
    <View style={styles.container}>
      <Image source={order.image} style={styles.image} />
      <Text style={styles.title}>{order.restaurant}</Text>
      <Text style={styles.subtitle}>Popular items coming soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
  },
});