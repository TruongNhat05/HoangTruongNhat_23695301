// GIỜ 1 — Header ứng dụng BookStore
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export function Header({
  onPressSearch,
  onPressCart,
}: {
  onPressSearch?: () => void;
  onPressCart?: () => void;
}) {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>📚 BookStore</Text>

      <View style={styles.iconGroup}>
        <Pressable onPress={onPressSearch}>
          <Text style={styles.icon}>🔍</Text>
        </Pressable>
        <Pressable onPress={onPressCart}>
          <Text style={styles.icon}>🛒</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row", // xếp logo và nhóm icon theo hàng ngang
    justifyContent: "space-between", // đẩy 2 đầu ra xa nhau
    alignItems: "center", // căn giữa theo trục dọc
    height: 56, // chiều cao cố định
    paddingHorizontal: 16,
    backgroundColor: "#1E1B4B", // navy/indigo
  },
  logo: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },
  iconGroup: {
    flexDirection: "row",
    gap: 14,
  },
  icon: {
    fontSize: 18,
  },
});
