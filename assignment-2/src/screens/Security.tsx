  import { View, Text, StyleSheet } from "react-native";

  export default function Security() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Security</Text>

        <Text style={styles.label}>Password</Text>
        <Text style={styles.value}>********</Text>

        <Text style={styles.label}>Two-Factor Authentication</Text>
        <Text style={styles.value}>Not enabled</Text>
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