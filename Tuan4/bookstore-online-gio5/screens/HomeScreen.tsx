// GIỜ 4 — Màn hình Trang chủ BookStore hoàn chỉnh
import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Header } from "../components/Header";
import { CategoryChips } from "../components/CategoryChips";
import { BookGrid } from "../components/BookGrid";
import { FloatingCartButton } from "../components/FloatingCartButton";
import { Book } from "../data";

export function HomeScreen({
  books,
  cartCount,
  onPressBook,
  onPressCart,
}: {
  books: Book[];
  cartCount: number;
  onPressBook: (id: number) => void;
  onPressCart: () => void;
}) {
  return (
    <View style={styles.screen}>
      {/* 1. Header cố định trên cùng */}
      <Header onPressCart={onPressCart} />

      {/* 2. ScrollView cuộn được ở giữa */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Danh mục sách</Text>
        <CategoryChips />

        <Text style={styles.sectionTitle}>Sách nổi bật</Text>
        <BookGrid books={books} onPressBook={onPressBook} />
      </ScrollView>

      {/* 3. Floating Cart Button nổi ở góc ngoài ScrollView */}
      <FloatingCartButton count={cartCount} onPress={onPressCart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 90, // đảm bảo không bị nút giỏ hàng che mất phần tử cuối
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 10,
    marginTop: 6,
  },
});
