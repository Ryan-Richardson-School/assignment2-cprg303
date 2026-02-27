import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Component styling with some functionality
type Props = {
  label: string;
  selected?: boolean;
  onPress?: () => void;


  leftEmoji?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
};

export default function SelectablePillButton({
  label,
  selected = false,
  onPress,
  leftEmoji,
  leftIcon,
  rightIcon,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.pill, selected && styles.pillSelected]}
    >
      {leftEmoji ? <Text style={styles.emoji}>{leftEmoji}</Text> : null}

      {leftIcon ? (
        <Ionicons
          name={leftIcon}
          size={18}
          color="#111"
          style={{ marginRight: 8 }}
        />
      ) : null}

      <Text style={styles.label}>{label}</Text>

      {rightIcon ? (
        <Ionicons
          name={rightIcon}
          size={16}
          color="#111"
          style={{ marginLeft: 8 }}
        />
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: "#F2F2F2",
    marginRight: 10,
  },

  pillSelected: {
    backgroundColor: "#EAEAEA",
  },

  emoji: {
    marginRight: 8,
    fontSize: 16,
  },

  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111",
  },
});