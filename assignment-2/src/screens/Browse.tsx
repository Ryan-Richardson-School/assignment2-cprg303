import React, { useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
  type ListRenderItemInfo,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import SelectablePillButton from "../components/SelectablePillButton";

//Ngl building this map feels hella out of scope. But this is kinda a janky fix I put together.

type Spot = {
  id: string;
  name: string;
  subtitle: string;
  rating: number;
  ratingCountText: string;
  etaMins: number;
  pickupMins: number;
  image: string;
  coord: { latitude: number; longitude: number };
  promo?: string;
};

const spots: Spot[] = [
  {
    id: "s1",
    name: "Connie & John's Pizza",
    subtitle: "Sponsored",
    rating: 4.4,
    ratingCountText: "(190+)",
    etaMins: 19,
    pickupMins: 5,
    promo: "Buy 1, get 1",
    image: "https://dummyimage.com/1200x800/111/ffffff&text=PIZZA",
    coord: { latitude: 51.0501, longitude: -114.0715 },
  },
  {
    id: "s2",
    name: "Leopold's Tavern",
    subtitle: "Burgers • Poutine",
    rating: 4.6,
    ratingCountText: "(1,000+)",
    etaMins: 25,
    pickupMins: 9,
    image: "https://dummyimage.com/1200x800/111/ffffff&text=COMFORT+FOOD",
    coord: { latitude: 51.045, longitude: -114.059 },
  },
  {
    id: "s3",
    name: "Kibo Sushi",
    subtitle: "Sushi",
    rating: 4.5,
    ratingCountText: "(500+)",
    etaMins: 22,
    pickupMins: 7,
    image: "https://dummyimage.com/1200x800/111/ffffff&text=SUSHI",
    coord: { latitude: 51.054, longitude: -114.091 },
  },
  {
    id: "s4",
    name: "Popeyes Louisiana Kitchen",
    subtitle: "Chicken",
    rating: 4.3,
    ratingCountText: "(2,000+)",
    etaMins: 18,
    pickupMins: 6,
    image: "https://dummyimage.com/1200x800/111/ffffff&text=CHICKEN",
    coord: { latitude: 51.06, longitude: -114.07 },
  },
];

function formatPinNumber(n: number) {
  return `${n}`;
}

export default function Browse() {
  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["18%", "52%", "86%"], []);
  const [selectedId, setSelectedId] = useState<string | null>(spots[0]?.id ?? null);

  const initialRegion: Region = {
    latitude: 51.0486,
    longitude: -114.0708,
    latitudeDelta: 0.12,
    longitudeDelta: 0.12,
  };

  const selectedSpot = spots.find((s) => s.id === selectedId) ?? spots[0];

  return (
    <View style={styles.container}>
      {/* MAP */}
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
      >
        {spots.map((s) => {
          const isSelected = s.id === selectedId;
          return (
            <Marker
              key={s.id}
              coordinate={s.coord}
              onPress={() => setSelectedId(s.id)}
            >
              <View style={[styles.pin, isSelected && styles.pinSelected]}>
                <Ionicons
                  name="restaurant"
                  size={16}
                  color={isSelected ? "white" : "#111"}
                  style={{ marginRight: 6 }}
                />
                <Text style={[styles.pinText, isSelected && styles.pinTextSelected]}>
                  {formatPinNumber(s.etaMins)}
                </Text>
              </View>

              {s.promo ? (
                <View style={styles.promoBubble}>
                  <Text style={styles.promoBubbleText}>{s.promo}</Text>
                </View>
              ) : null}
            </Marker>
          );
        })}
      </MapView>

      {/* TOP SEARCH BAR */}
      <View style={styles.topOverlay}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color="#111" style={{ marginRight: 10 }} />
          <Text style={styles.searchPlaceholder}>Search pickup spots nearby</Text>
        </View>

        <View style={styles.filterRow}>
          <SelectablePillButton
            label="Pickup"
            leftIcon="walk-outline"
            rightIcon="chevron-down"
          />
          <SelectablePillButton label="Uber One" leftIcon="planet-outline" />
          <SelectablePillButton label="Offers" leftIcon="pricetag-outline" />
        </View>
      </View>

      {/* Under the map stuff*/}
      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        backgroundStyle={styles.sheetBg}
        handleIndicatorStyle={styles.handle}
      >
        <View style={styles.sheetHeader}>
          <Text style={styles.sheetTitle}>Pickup spots near you</Text>
        </View>

        <BottomSheetFlatList
          data={spots}
          keyExtractor={(item: Spot) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }: ListRenderItemInfo<Spot>) => (
            <Pressable
              onPress={() => setSelectedId(item.id)}
              style={[
                styles.card,
                item.id === selectedId && styles.cardSelected,
              ]}
            >
              <Image source={{ uri: item.image }} style={styles.cardImg} />
              <View style={styles.cardMeta}>
                <View style={styles.cardTopRow}>
                  <Text style={styles.cardName} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Ionicons
                    name={item.id === selectedId ? "heart" : "heart-outline"}
                    size={20}
                    color={item.id === selectedId ? "#E31B23" : "#777"}
                  />
                </View>

                <Text style={styles.cardSub}>
                  {item.subtitle} • {item.rating.toFixed(1)}★ {item.ratingCountText} •{" "}
                  {item.etaMins} min
                </Text>

                <View style={styles.cardBottomRow}>
                  <Ionicons name="car-outline" size={16} color="#666" />
                  <Text style={styles.cardBottomText}>{item.pickupMins} min</Text>
                </View>
              </View>
            </Pressable>
          )}
        />
      </BottomSheet>

      <Pressable style={styles.crosshair}>
        <Ionicons name="locate" size={22} color="#111" />
      </Pressable>
    </View>
  );
}

//Style
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  map: { ...StyleSheet.absoluteFillObject },

  topOverlay: {
    position: "absolute",
    left: 16,
    right: 16,
    top: 14,
  },
  searchBar: {
    height: 52,
    borderRadius: 26,
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  searchPlaceholder: { color: "#666", fontSize: 16, fontWeight: "600" },
  filterRow: {
    marginTop: 12,
    flexDirection: "row",
    gap: 10,
  },
  sheetBg: {
    backgroundColor: "white",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  handle: {
    backgroundColor: "#DDD",
    width: 48,
  },
  sheetHeader: {
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 10,
  },
  sheetTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: "#111",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 140,
  },
  card: {
    flexDirection: "row",
    marginBottom: 14,
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: "white",
  },
  cardSelected: {
    backgroundColor: "#FAFAFA",
  },
  cardImg: {
    width: 120,
    height: 86,
    backgroundColor: "#EEE",
  },
  cardMeta: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
  },
  cardTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardName: {
    fontSize: 18,
    fontWeight: "900",
    color: "#111",
    flex: 1,
    paddingRight: 10,
  },
  cardSub: {
    marginTop: 4,
    color: "#666",
    fontSize: 13,
    fontWeight: "600",
  },
  cardBottomRow: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  cardBottomText: {
    color: "#666",
    fontSize: 13,
    fontWeight: "700",
  },
  pin: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#E5E5EA",
  },
  pinSelected: {
    backgroundColor: "#111",
    borderColor: "#111",
  },
  pinText: { fontWeight: "900", color: "#111" },
  pinTextSelected: { color: "white" },

  promoBubble: {
    position: "absolute",
    top: -18,
    left: 0,
    backgroundColor: "#E31B23",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  promoBubbleText: { color: "white", fontWeight: "900", fontSize: 12 },
  crosshair: {
    position: "absolute",
    right: 18,
    top: 220,
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 6,
  },
});