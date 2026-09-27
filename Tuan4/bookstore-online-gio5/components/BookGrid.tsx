// GIỜ 2 — Lưới sản phẩm 2 cột (Book Grid) tích hợp DiscountBadge
import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Book } from "../data";
import { DiscountBadge } from "./DiscountBadge";

export function BookGrid({
  books,
  onPressBook,
}: {
  books: Book[];
  onPressBook: (id: number) => void;
}) {
  return (
    <View style={styles.grid}>
      {books.map((book) => (
        <Pressable
          key={book.id}
          style={styles.item}
          onPress={() => onPressBook(book.id)}
        >
          <View style={styles.coverWrap}>
            <Image source={{ uri: book.cover }} style={styles.cover} />
            <DiscountBadge discountPercent={book.discountPercent} isNew={book.isNew} />
          </View>
          <Text style={styles.title} numberOfLines={2}>
            {book.title}
          </Text>
          <Text style={styles.price}>{book.price.toLocaleString()} đ</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row", // các item xếp theo hàng ngang
    flexWrap: "wrap", // xuống dòng khi hết hàng
    justifyContent: "space-between", // chia đều 2 cột
  },
  item: {
    width: "48%", // 2 cột với khoảng cách giữa
    marginBottom: 16,
  },
  coverWrap: {
    position: "relative", // làm containing block cho DiscountBadge absolute
    width: "100%",
    aspectRatio: 3 / 4, // giữ tỉ lệ ảnh
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#EEF2F7",
  },
  cover: {
    width: "100%",
    height: "100%",
  },
  title: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "600",
    color: "#111827",
  },
  price: {
    marginTop: 2,
    fontSize: 13,
    fontWeight: "700",
    color: "#1E1B4B",
  },
});
