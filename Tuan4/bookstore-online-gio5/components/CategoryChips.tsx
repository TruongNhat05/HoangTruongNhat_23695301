// GIỜ 2 — Danh mục dạng chip, tự xuống dòng khi tràn
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { CATEGORIES } from "../data";

export function CategoryChips({
  selectedCategory,
  onSelectCategory,
}: {
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}) {
  return (
    <View style={styles.wrap}>
      {CATEGORIES.map((name) => {
        const isSelected = selectedCategory === name;
        return (
          <Pressable
            key={name}
            style={[styles.chip, isSelected && styles.chipSelected]}
            onPress={() => onSelectCategory?.(name)}
          >
            <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
              {name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row", // xếp các chip theo hàng ngang
    flexWrap: "wrap", // tự động xuống dòng khi hết chỗ
    gap: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999, // dạng pill
    borderWidth: 1,
    borderColor: "#6366F1", // indigo
    backgroundColor: "#FFFFFF",
  },
  chipSelected: {
    backgroundColor: "#4338CA",
    borderColor: "#4338CA",
  },
  chipText: {
    color: "#4338CA",
    fontSize: 13,
    fontWeight: "600",
  },
  chipTextSelected: {
    color: "#FFFFFF",
  },
});
