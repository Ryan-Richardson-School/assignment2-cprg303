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
        <View style={styles.avatar}>
          <Ionicons name="person" size={50} color="#bab3b3" />
        </View>
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

      {/* SUGGESTIONS SECTION */}
      <View style={styles.suggestionWrapper}>
        <Text style={styles.suggestionHeader}>Suggestions</Text>

        <View style={styles.suggestionCard}>

          {/* ICON IN TOP RIGHT */}
          <View style={styles.iconContainer}>
            <Ionicons name="id-card-outline" size={28} color="black" />
          </View>

          <Text style={styles.suggestionTitle}>Complete your account checkup</Text>

          <Text style={styles.suggestionText}>
            Complete your account checkup to make Uber work better for you and keep you secure.
          </Text>

          <TouchableOpacity
            style={styles.checkupButton}
            onPress={() => navigation.navigate("AccountCheckup")}
          >
            <Text style={styles.checkupButtonText}>Begin checkup</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },

  /* TOP BAR */
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

  /* PROFILE */
  profileSection: { alignItems: "center", marginBottom: 30 },
  
  avatar: {
  width: 90,
  height: 90,
  borderRadius: 45,
  backgroundColor: "#f7f3f3",
  marginBottom: 10,
  justifyContent: "center",
  alignItems: "center",
},
  name: { fontSize: 22, fontWeight: "700" },
  email: { fontSize: 14, color: "#555" },

  /* ICON CARDS */
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

  /* SUGGESTIONS */
  suggestionWrapper: { 
    marginTop: 10 
  },
  suggestionHeader: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  suggestionCard: {
    backgroundColor: "#fffefe",
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#e0e0e0",
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  suggestionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    width: "80%",
  },
  suggestionText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 15,
    width: "90%",
  },
  checkupButton: {
    backgroundColor: "#eae3e3c1",
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 5,
    width: "50%",
  },
  checkupButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
});
