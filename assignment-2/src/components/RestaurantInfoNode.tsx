import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { Restaurant } from "../data/HomeData";

/* Component styling with some functionality */
type Props = {
  item: Restaurant;
  variant?: "featured" | "list";
  onPress?: () => void;
};

export default function RestaurantInfoNode({
  item,
  variant = "list",
  onPress,
}: Props) {
  const [liked, setLiked] = useState(false);

  const isFeatured = variant === "featured";

  const imgSource =
    typeof item.image === "string"
      ? { uri: item.image }
      : item.image;

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.card,
        isFeatured ? styles.featuredCard : styles.listCard,
      ]}
    >
      <View style={styles.imageWrap}>
        <Image source={imgSource} style={styles.image} />

        {item.promo ? (
          <View style={styles.promoPill}>
            <Text style={styles.promoText}>{item.promo}</Text>
          </View>
        ) : null}
      </View>

      <View style={styles.meta}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>

          {/* Heart Toggle its about is perfect as I can get using emojis didn't work */}
          <Pressable
            onPress={() => setLiked(!liked)}
            hitSlop={10}
          >
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={22}
              color={liked ? "#E31B23" : "#777"}
              style={styles.heart}
            />
          </Pressable>
        </View>

        <Text style={styles.sub}>
          {item.deliveryFeeText} • {item.etaMins} min
        </Text>

        <View style={styles.badgeRow}>
          {item.tag ? (
            <View style={styles.badgeDark}>
              <Text style={styles.badgeTextDark}>
                {item.tag}
              </Text>
            </View>
          ) : null}

          {item.cuisineRank ? (
            <View style={styles.badgeSoft}>
              <Text style={styles.badgeTextSoft}>
                {item.cuisineRank}
              </Text>
            </View>
          ) : null}

          {typeof item.rating === "number" ? (
            <Text style={styles.rating}>
              {item.rating.toFixed(1)}★{" "}
              {item.ratingCountText ?? ""}
            </Text>
          ) : null}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    overflow: "hidden",
  },

  featuredCard: {
    width: 265,
    marginRight: 14,
  },

  listCard: {
    width: "100%",
    marginBottom: 16,
  },

  imageWrap: {
    position: "relative",
  },

  image: {
    width: "100%",
    height: 140,
    backgroundColor: "#EEE",
  },

  promoPill: {
    position: "absolute",
    left: 10,
    top: 10,
    backgroundColor: "#E31B23",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },

  promoText: {
    color: "white",
    fontWeight: "900",
    fontSize: 12,
  },

  meta: {
    paddingTop: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  name: {
    fontSize: 18,
    fontWeight: "900",
    color: "#111",
    flex: 1,
    paddingRight: 6,
  },

  heart: {
    marginRight: 6,
  },

  sub: {
    marginTop: 4,
    color: "#444",
    fontSize: 13,
    fontWeight: "700",
  },

  badgeRow: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
  },

  badgeDark: {
    backgroundColor: "#111",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },

  badgeTextDark: {
    color: "white",
    fontWeight: "900",
    fontSize: 12,
  },

  badgeSoft: {
    backgroundColor: "#E7F3EA",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },

  badgeTextSoft: {
    color: "#0A7D2C",
    fontWeight: "900",
    fontSize: 12,
  },

  rating: {
    fontSize: 13,
    fontWeight: "900",
    color: "#111",
  },
});