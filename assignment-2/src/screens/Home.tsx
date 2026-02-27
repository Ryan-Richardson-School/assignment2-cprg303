import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import SelectablePillButton from "../components/SelectablePillButton";
import CategoryIcon from "../components/CategoryIcon";
import RestaurantCard from "../components/RestaurantInfoNode";

import {
  categories,
  featured,
  placesYouMightLike,
  quickFilters,
  topChips,
} from "../data/HomeData";

export default function Home({ navigation }: any) {
  const [selectedTopChipId, setSelectedTopChipId] = useState("all");

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={placesYouMightLike}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponentStyle={styles.headerPadding}
        ListHeaderComponent={
          <View style={styles.headerWrap}>
            {/* Top Row */}
            <View style={styles.topRow}>
              <Text style={styles.addressText}>Your Location</Text>
              <Ionicons
                name="notifications-outline"
                size={22}
                color="#111"
              />
            </View>

            {/* Top Buttons */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.hScroll}
            >
              {topChips.map((chip) => (
                <SelectablePillButton
                  key={chip.id}
                  label={chip.label}
                  leftEmoji={chip.emoji}
                  selected={chip.id === selectedTopChipId}
                  onPress={() => setSelectedTopChipId(chip.id)}
                />
              ))}
            </ScrollView>

            {/* Categories */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.hScroll}
            >
              {categories.map((cat) => (
                <CategoryIcon
                  key={cat.id}
                  emoji={cat.emoji}
                  label={cat.label}
                />
              ))}
            </ScrollView>

            {/* Quick Filters */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.hScroll}
            >
              {quickFilters.map((q) => (
                <SelectablePillButton
                  key={q.id}
                  label={q.label}
                />
              ))}
            </ScrollView>

            {/* Featured Section */}
            <Text style={styles.sectionTitle}>
              Featured on Uber Eats
            </Text>

            <FlatList
              data={featured}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.featuredList}
              renderItem={({ item }) => (
                <RestaurantCard
                  item={item}
                  variant="featured"
                  onPress={() =>
                    navigation?.navigate?.("Restaurant", {
                      restaurantId: item.id,
                    })
                  }
                />
              )}
            />

            {/* Places Section Title */}
            <Text style={styles.sectionTitle}>
              Places you might like
            </Text>
          </View>
        }
        renderItem={({item}) => (
          <RestaurantCard
            item={item}
            variant="list"
            onPress={() =>
              navigation?.navigate?.("Restaurant", {
                restaurantId: item.id,
              })
            }
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "white",
  },

  headerPadding: {
    paddingHorizontal: 16,
  },

  headerWrap: {
    paddingTop: 12,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  addressText: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111",
  },

  hScroll: {
    marginTop: 16,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    marginTop: 24,
    marginBottom: 12,
  },

  featuredList: {
    paddingBottom: 8,
  },

  listContent: {
    paddingBottom: 120,
  },
  
});