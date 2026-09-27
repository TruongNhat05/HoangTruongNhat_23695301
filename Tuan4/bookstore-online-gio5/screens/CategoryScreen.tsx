// Màn hình Danh mục sách (Category Screen)
import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { CategoryChips } from "../components/CategoryChips";
import { BookGrid } from "../components/BookGrid";
import { Book, CATEGORIES } from "../data";

export function CategoryScreen({
  books,
  onPressBook,
}: {
  books: Book[];
  onPressBook: (id: number) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0]);

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Khám phá Danh mục</Text>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.subTitle}>Chọn thể loại:</Text>
        <CategoryChips
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <Text style={styles.sectionTitle}>
          Sách thuộc thể loại: <Text style={styles.highlight}>{selectedCategory}</Text>
        </Text>
        <BookGrid books={books} onPressBook={onPressBook} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  header: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111827",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 30,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4B5563",
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
    marginTop: 18,
    marginBottom: 12,
  },
  highlight: {
    color: "#4338CA",
  },
});
