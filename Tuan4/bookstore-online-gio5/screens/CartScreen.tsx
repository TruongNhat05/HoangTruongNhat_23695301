// GIỜ 5 — Bài tập 2: Màn hình Giỏ hàng (Cart Screen)
// Xử lý chuẩn 3 vùng theo đề bài & sơ đồ image4.png:
// 1. Vùng 1: Header tiêu đề và Danh sách sản phẩm cuộn được ở giữa (ScrollView flex:1).
// 2. Vùng 2: Thanh tổng tiền + nút "Thanh toán" cố định, KHÔNG cuộn, nằm ngay trên Tab Bar.
// 3. Vùng 3: Tab Bar cố định ở đáy màn hình (được render ở App.tsx).
// -> Không vùng nào chồng lấp lên vùng nào.
import React from "react";
import { View, ScrollView, Text, Pressable, StyleSheet } from "react-native";
import { CartLineItem } from "../components/CartLineItem";
import { CartItem } from "../data";

export function CartScreen({
  items,
  onCheckout,
}: {
  items: CartItem[];
  onCheckout?: () => void;
}) {
  const total = items.reduce((sum, item) => sum + item.book.price * item.quantity, 0);

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Giỏ hàng ({items.length} món)</Text>

      {/* Vùng 1: Danh sách sản phẩm CUỘN được (flex:1), nằm giữa header và thanh tổng tiền */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {items.map((item) => (
          <CartLineItem key={item.book.id} item={item} />
        ))}
      </ScrollView>

      {/* Vùng 2: Thanh tổng tiền + nút thanh toán cố định ngay trên TabBar, KHÔNG cuộn */}
      <View style={styles.totalBar}>
        <View>
          <Text style={styles.totalLabel}>Tổng thanh toán</Text>
          <Text style={styles.totalValue}>{total.toLocaleString()} đ</Text>
        </View>
        <Pressable
          style={styles.checkoutButton}
          onPress={onCheckout ?? (() => alert("Đặt hàng thành công!"))}
        >
          <Text style={styles.checkoutText}>Thanh toán</Text>
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
  header: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111827",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  scroll: {
    flex: 1, // cho phép cuộn trọn vẹn danh sách mà không đẩy thanh tổng tiền
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  totalBar: {
    flexDirection: "row", // tổng tiền bên trái, nút thanh toán bên phải
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
  },
  totalLabel: {
    fontSize: 12,
    color: "#5B6B7F",
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1E1B4B",
  },
  checkoutButton: {
    backgroundColor: "#4338CA",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
  },
  checkoutText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
});
