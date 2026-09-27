// GIỜ 5 — Bài tập 2: Dòng sản phẩm trong giỏ hàng (CartLineItem)
// Kỹ thuật theo sơ đồ image4.png:
// - flexDirection: 'row', alignItems: 'center'
// - Ảnh bìa nhỏ bên trái (width/height cố định)
// - Cột thông tin ở giữa (flex: 1) gồm Tên sách (trên) + Số lượng "SL: x" (dưới)
// - Giá tiền ở bên phải cùng (width cố định, căn lề phải)
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { CartItem } from "../data";

export function CartLineItem({ item }: { item: CartItem }) {
  return (
    <View style={styles.row}>
      <Image source={{ uri: item.book.cover }} style={styles.thumb} />

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {item.book.title}
        </Text>
        <Text style={styles.qty}>SL: {item.quantity}</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>
          {(item.book.price * item.quantity).toLocaleString()} đ
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row", // ảnh - cột thông tin (tên + SL) - giá
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  thumb: {
    width: 48,
    height: 66, // ảnh cố định, không co giãn theo flex
    borderRadius: 6,
    backgroundColor: "#EEF2F7",
  },
  info: {
    flex: 1, // co giãn chiếm hết không gian giữa ảnh và giá
    justifyContent: "center",
    gap: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
  qty: {
    fontSize: 12,
    color: "#5B6B7F",
  },
  priceContainer: {
    width: 90, // width cố định -> giữ đúng vị trí cột giá
    alignItems: "flex-end",
  },
  price: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E1B4B",
  },
});
