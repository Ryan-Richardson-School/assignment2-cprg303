import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

/* Component styling with some functionality */
type Props = {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  leftEmoji?: string;
};

export default function SelectablePillButton({
  label,
  selected,
  onPress,
  leftEmoji,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.pill,
        selected ? styles.selected : styles.unselected,
      ]}
    >
      {leftEmoji ? <Text style={styles.emoji}>{leftEmoji}</Text> : null}
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  selected: {
    backgroundColor: "#EAEAEA",
  },
  unselected: {
    backgroundColor: "#F3F3F3",
  },
  emoji: {
    fontSize: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111",
  },
});