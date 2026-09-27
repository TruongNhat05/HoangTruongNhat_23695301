// GIỜ 5 — Tổng hợp: Bottom Tab Layout & Hoàn thiện toàn bộ ứng dụng
// Kết hợp toàn bộ các màn hình đã làm:
// - Tab Trang chủ (HomeScreen: Header + CategoryChips + BookGrid + FloatingCartButton)
// - Tab Danh mục (CategoryScreen: Duyệt sách theo chuyên mục)
// - Tab Giỏ hàng (CartScreen: Danh sách sản phẩm cuộn + Thanh tổng tiền cố định)
// - Tab Tài khoản (AccountScreen: Thông tin cá nhân & Quản lý)
// - Màn hình Chi tiết sách (BookDetailScreen: Ảnh lớn ngoài ScrollView + Mô tả cuộn + Thanh Thêm vào giỏ cố định)
// - Thanh Bottom Tab Bar: Cố định ở đáy màn hình dùng chung cho toàn bộ app
import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TabBar, TabKey } from "./components/TabBar";
import { HomeScreen } from "./screens/HomeScreen";
import { CategoryScreen } from "./screens/CategoryScreen";
import { CartScreen } from "./screens/CartScreen";
import { AccountScreen } from "./screens/AccountScreen";
import { BookDetailScreen } from "./screens/BookDetailScreen";
import { BOOKS, CART_ITEMS, CartItem, Book } from "./data";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>("home");
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>(CART_ITEMS);

  const selectedBook: Book | null =
    BOOKS.find((b) => b.id === selectedBookId) ?? null;

  // Tính tổng số lượng sản phẩm trong giỏ hàng
  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Thêm sách vào giỏ hàng
  const handleAddToCart = (book: Book) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.book.id === book.id);
      if (existing) {
        return prev.map((item) =>
          item.book.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { book, quantity: 1 }];
    });
  };

  const handleSelectBook = (id: number) => {
    setSelectedBookId(id);
  };

  const handleTabChange = (key: TabKey) => {
    setSelectedBookId(null); // đóng chi tiết khi chuyển tab
    setActiveTab(key);
  };

  const renderContent = () => {
    if (selectedBook) {
      return (
        <BookDetailScreen
          book={selectedBook}
          onBack={() => setSelectedBookId(null)}
          onAddToCart={() => handleAddToCart(selectedBook)}
        />
      );
    }

    switch (activeTab) {
      case "home":
        return (
          <HomeScreen
            books={BOOKS}
            cartCount={totalCartCount}
            onPressBook={handleSelectBook}
            onPressCart={() => setActiveTab("cart")}
          />
        );
      case "category":
        return (
          <CategoryScreen
            books={BOOKS}
            onPressBook={handleSelectBook}
          />
        );
      case "cart":
        return <CartScreen items={cartItems} />;
      case "account":
        return <AccountScreen />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      {/* Vùng nội dung ứng dụng chiếm trọn phần không gian còn lại */}
      <View style={styles.body}>{renderContent()}</View>

      {/* Thanh Bottom Tab Bar: Cố định ở đáy toàn ứng dụng, không bị cuộn */}
      <TabBar
        active={activeTab}
        onChange={handleTabChange}
        cartBadge={totalCartCount}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  body: {
    flex: 1,
  },
});
