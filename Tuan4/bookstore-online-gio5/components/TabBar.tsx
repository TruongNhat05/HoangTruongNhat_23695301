// GIỜ 5 — Bài tập 1: Thanh Tab Bar dưới cùng (Bottom Tab Bar)
// Kỹ thuật Flexbox:
// - Container: flexDirection: 'row', chiều cao cố định 64, đặt cố định ngoài ScrollView ở đáy màn hình.
// - Mỗi tab item: flex: 1 (chia đều 4 phần bằng nhau), flexDirection: 'column', alignItems: 'center', justifyContent: 'center'.
// - Icon trên, chữ dưới, tab đang chọn có màu nổi bật (#4338CA).
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export type TabKey = "home" | "category" | "cart" | "account";

interface TabItemConfig {
  key: TabKey;
  label: string;
  icon: string;
}

const TABS: TabItemConfig[] = [
  { key: "home", label: "Trang chủ", icon: "🏠" },
  { key: "category", label: "Danh mục", icon: "📂" },
  { key: "cart", label: "Giỏ hàng", icon: "🛒" },
  { key: "account", label: "Tài khoản", icon: "👤" },
];

export function TabBar({
  active,
  onChange,
  cartBadge = 0,
}: {
  active: TabKey;
  onChange: (key: TabKey) => void;
  cartBadge?: number;
}) {
  return (
    <View style={styles.bar}>
      {TABS.map((tab) => {
        const isActive = tab.key === active;
        const showBadge = tab.key === "cart" && cartBadge > 0;

        return (
          <Pressable
            key={tab.key}
            style={styles.tabItem} // flex:1 -> 4 mục chia đều bằng nhau
            onPress={() => onChange(tab.key)}
          >
            <View style={styles.iconWrap}>
              <Text style={[styles.icon, isActive && styles.iconActive]}>{tab.icon}</Text>
              {showBadge && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{cartBadge}</Text>
                </View>
              )}
            </View>
            <Text style={[styles.label, isActive && styles.labelActive]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row", // 4 mục xếp theo hàng ngang
    height: 64, // chiều cao cố định
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  tabItem: {
    flex: 1, // chia đều 1/4 bề rộng container cho mỗi mục
    flexDirection: "column", // icon trên, chữ dưới
    alignItems: "center", // căn giữa trục ngang
    justifyContent: "center", // căn giữa trục dọc
    gap: 2,
  },
  iconWrap: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 20,
    opacity: 0.5,
  },
  iconActive: {
    opacity: 1,
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -10,
    backgroundColor: "#DC2626",
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 3,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
  },
  label: {
    fontSize: 11,
    color: "#9CA3AF",
  },
  labelActive: {
    color: "#4338CA", // màu nổi bật cho mục đang chọn
    fontWeight: "700",
  },
});
