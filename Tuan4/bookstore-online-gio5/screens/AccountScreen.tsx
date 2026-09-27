// Màn hình Tài khoản (Account Screen)
import React from "react";
import { View, ScrollView, Text, StyleSheet, Pressable } from "react-native";

export function AccountScreen() {
  const menuItems = [
    { icon: "📦", title: "Đơn hàng của tôi", sub: "3 đơn hàng đang giao" },
    { icon: "🎟️", title: "Kho voucher & Khuyến mãi", sub: "5 mã có thể dùng" },
    { icon: "📍", title: "Sổ địa chỉ nhận hàng", sub: "2 địa chỉ đã lưu" },
    { icon: "💳", title: "Phương thức thanh toán", sub: "Thẻ ngân hàng, Ví điện tử" },
    { icon: "⚙️", title: "Cài đặt ứng dụng", sub: "Thông báo, bảo mật" },
    { icon: "💬", title: "Hỗ trợ khách hàng", sub: "Hotline 1900 xxxx" },
  ];

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Tài khoản</Text>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Khối Profile người dùng */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>Hoàng Trương Nhật</Text>
            <Text style={styles.userEmail}>truongnhat@gmail.com</Text>
            <View style={styles.badgeMember}>
              <Text style={styles.badgeMemberText}>⭐ Thành viên Vàng</Text>
            </View>
          </View>
        </View>

        {/* Khối thống kê nhanh: flexDirection 'row', flex: 1 cho mỗi ô */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Đã mua</Text>
          </View>
          <View style={[styles.statBox, styles.statBorder]}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Yêu thích</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>250k</Text>
            <Text style={styles.statLabel}>Điểm thưởng</Text>
          </View>
        </View>

        {/* Danh sách menu tính năng */}
        <Text style={styles.sectionHeader}>Quản lý tài khoản</Text>
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <Pressable
              key={index}
              style={[
                styles.menuItem,
                index < menuItems.length - 1 && styles.menuItemBorder,
              ]}
            >
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <View style={styles.menuTextWrap}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSub}>{item.sub}</Text>
              </View>
              <Text style={styles.menuArrow}>›</Text>
            </Pressable>
          ))}
        </View>
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
    paddingBottom: 24,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    gap: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#EEF2FF",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 28,
  },
  profileInfo: {
    flex: 1,
    gap: 2,
  },
  userName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  userEmail: {
    fontSize: 13,
    color: "#6B7280",
  },
  badgeMember: {
    marginTop: 4,
    alignSelf: "flex-start",
    backgroundColor: "#FEF3C7",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeMemberText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#D97706",
  },
  statsRow: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginTop: 12,
    borderRadius: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  statBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  statBorder: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#F3F4F6",
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "800",
    color: "#4338CA",
  },
  statLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: "700",
    color: "#374151",
    marginTop: 20,
    marginBottom: 8,
  },
  menuContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 12,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  menuIcon: {
    fontSize: 18,
  },
  menuTextWrap: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
  },
  menuSub: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 2,
  },
  menuArrow: {
    fontSize: 18,
    color: "#9CA3AF",
  },
});
