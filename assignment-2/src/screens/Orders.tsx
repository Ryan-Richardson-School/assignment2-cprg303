import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import OrderCard from "../components/OrderCard";

const orders = [
  {
    id: "1",
    restaurant: "KFC",
    total: "$22.57",
    date: "Nov 16 at 12:10 p.m.",
    items: "1 Chili Crunch Chicken Sandwich Box Meal",
    image: require("../../assets/images/kfc.jpg"),
  },
  {
    id: "2",
    restaurant: "Mr. Puffs",
    total: "$27.13",
    date: "Nov 04 at 3:50 p.m.",
    items: "1 Box of 50 Puffs (Dubai Cream, Sweet & Salty, Cappucino Crisp)",
    image: require("../../assets/images/mr.puffs.webp"),
  },
  {
    id: "3",
    restaurant: "Pizza Hut",
    total: "$11.37",
    date: "Oct 31 at 1:50 p.m.",
    items: "1 Chicken Pizza",
    image: require("../../assets/images/pizzahut.jpg"),
  },
];

export default function Orders() {
  return (
    <View style={styles.container}>

      {/* TOP BAR */}
      <View style={styles.topBar}>
        <View style={styles.leftRow}>
          <Ionicons name="menu" size={28} color="black" />
          <Text style={styles.title}>Uber Eats</Text>
        </View>

        <TouchableOpacity>
          <Ionicons name="cart-outline" size={26} color="black" />
        </TouchableOpacity>
      </View>

      {/* SEARCH BAR */}
      <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color="black" />
        <TextInput
          placeholder="Search orders"
          placeholderTextColor="black"
          style={styles.searchInput}
        />
      </View>
</View>

      {/* PAGE HEADER */}
      <Text style={styles.header}>Past Orders</Text>

      {/* ORDER LIST */}
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderCard order={item} />}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  leftRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
  },

  header: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
  },

  searchContainer: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
    width: "100%",            // length
    gap: 12,                  // gap between icon and text
  },
  
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "black", 
    outlineWidth: 0,          
    outlineColor: "#f2e9e96e",       
  },
});