import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


type Order = {
  id: string;
  restaurant: string;
  total: string;
  date: string;
  items: string;
  image: any;
};


export default function OrderCard({ order }: { order: Order }) {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>

    {/* IMAGE GOES HERE */}
      <Image source={order.image} style={styles.image} />

      <Text style={styles.restaurant}>{order.restaurant}</Text>
      <Text style={styles.items}>{order.items}</Text>
      <Text style={styles.meta}>{order.total} · {order.date}</Text>

      <View style={styles.linksRow}>
        <TouchableOpacity onPress={() => navigation.navigate("Receipt", { order })}>
          <Text style={styles.link}>View receipt</Text>
        </TouchableOpacity>

        <TouchableOpacity >
          <Text style={styles.link}>Request invoice</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.storeButton} onPress={() => navigation.navigate("Store", { order })}>
        <Text style={styles.storeButtonText}>View store</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
  restaurant: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },
  items: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  meta: {
    fontSize: 13,
    color: "#777",
    marginBottom: 12,
  },
  linksRow: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 12,
  },
  link: {
    fontSize: 14,
    color: "#0a84ff",
    fontWeight: "600",
  },
  storeButton: {
    backgroundColor: "#000",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  storeButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  image: {
    width: 350,
    height: 300,
    borderRadius: 8,
    marginBottom: 10,
  },

});