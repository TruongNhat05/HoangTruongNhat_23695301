// GIỜ 4 — Màn hình Chi tiết sách (Book Detail)
import React from "react";
import { View, ScrollView, Text, Image, Pressable, StyleSheet } from "react-native";
import { Book } from "../data";

export function BookDetailScreen({
  book,
  onBack,
  onAddToCart,
}: {
  book: Book;
  onBack: () => void;
  onAddToCart: () => void;
}) {
  return (
    <View style={styles.screen}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>← Quay lại</Text>
      </Pressable>

      {/* 1. Phần cố định trên cùng: Ảnh bìa lớn ngoài ScrollView, căn giữa bằng alignSelf */}
      <View style={styles.coverSection}>
        <Image source={{ uri: book.cover }} style={styles.cover} />
      </View>

      {/* 2. ScrollView riêng flex:1 chứa thông tin và mô tả dài để không đẩy tràn thanh dưới */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
        <Text style={styles.price}>{book.price.toLocaleString()} đ</Text>
        <Text style={styles.descLabel}>Mô tả chi tiết</Text>
        <Text style={styles.description}>{book.description}</Text>
      </ScrollView>

      {/* 3. Thanh dưới cùng: row, 2 đầu cách xa nhau, KHÔNG nằm trong ScrollView */}
      <View style={styles.bottomBar}>
        <Text style={styles.bottomPrice}>{book.price.toLocaleString()} đ</Text>
        <Pressable style={styles.addButton} onPress={onAddToCart}>
          <Text style={styles.addButtonText}>Thêm vào giỏ</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  backButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  backText: {
    color: "#4338CA",
    fontWeight: "600",
    fontSize: 15,
  },
  coverSection: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    alignItems: "center",
  },
  cover: {
    alignSelf: "center",
    width: "55%",
    aspectRatio: 3 / 4,
    borderRadius: 12,
    backgroundColor: "#EEF2F7",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: "800",
    color: "#111827",
  },
  author: {
    marginTop: 4,
    fontSize: 14,
    color: "#5B6B7F",
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "700",
    color: "#1E1B4B",
  },
  descLabel: {
    marginTop: 14,
    fontSize: 14,
    fontWeight: "700",
    color: "#374151",
  },
  description: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 22,
    color: "#4B5563",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
  },
  bottomPrice: {
    fontSize: 17,
    fontWeight: "800",
    color: "#1E1B4B",
  },
  addButton: {
    backgroundColor: "#4338CA",
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 10,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
