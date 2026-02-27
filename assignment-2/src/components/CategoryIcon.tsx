import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";


/* Component styling with some functionality */
type Props = {
  emoji: string;
  label: string;
  onPress?: () => void;
};

export default function CategoryIcon({ emoji, label, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.wrap}>
      <View style={styles.iconBubble}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    width: 88,
    marginRight: 10,
  },
  iconBubble: {
    width: 64,
    height: 64,
    borderRadius: 18,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 30,
  },
  label: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "700",
    color: "#111",
    textAlign: "center",
  },
});