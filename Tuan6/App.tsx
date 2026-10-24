import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { PHONES } from "./src/data/phones";
import { colors } from "./src/theme";

import { SelectPhoneApp } from "./src/Bai1/SelectPhoneApp";
import { SelectPhoneApi } from "./src/Bai2/SelectPhoneApi";
import { BottomTabApp } from "./src/Bai3/BottomTabApp";
import { StackTabApp } from "./src/Bai4/StackTabApp";
import { DrawerApp } from "./src/Bai5/DrawerApp";

export default function App() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const exercises = [
    {
      id: 1,
      title: "Bài 1: Select Phone",
      desc: "Thông tin sản phẩm ↔ Chọn màu (Screen 01 → 04)",
      icon: "phone-portrait-outline" as const,
      color: "#1E88E5",
    },
    {
      id: 2,
      title: "Bài 2: Gắn Mock API",
      desc: "Fetch dữ liệu sản phẩm qua API (mockapi.io), Loading & Error",
      icon: "cloud-download-outline" as const,
      color: "#43A047",
    },
    {
      id: 3,
      title: "Bài 3: Bottom Tab Navigation",
      desc: "3 tab: Trang chủ (FlatList) / Tìm kiếm / Cá nhân (Avatar)",
      icon: "browsers-outline" as const,
      color: "#FB8C00",
    },
    {
      id: 4,
      title: "Bài 4: Stack + Tab + Passing Params",
      desc: "Điều hướng lồng nhau, chi tiết sản phẩm, danh sách Yêu thích",
      icon: "layers-outline" as const,
      color: "#E53935",
    },
    {
      id: 5,
      title: "Bài 5: Drawer Navigation",
      desc: "Menu kéo cạnh trái: Home / Hồ sơ / Cài đặt Switch thông báo & Dark mode",
      icon: "menu-outline" as const,
      color: "#8E24AA",
    },
  ];

  if (activeTab !== null) {
    return (
      <View style={styles.exerciseWrapper}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        {}
        <SafeAreaView style={styles.topBar}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setActiveTab(null)}
            activeOpacity={0.7}
          >
            <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
            <Text style={styles.backButtonText}>Menu bài tập</Text>
          </TouchableOpacity>
          <Text style={styles.topBarTitle} numberOfLines={1}>
            {exercises.find((e) => e.id === activeTab)?.title}
          </Text>
        </SafeAreaView>

        {}
        <View style={styles.exerciseContent}>
          <NavigationContainer independent={true}>
            {activeTab === 1 && <SelectPhoneApp phone={PHONES[0]} />}
            {activeTab === 2 && <SelectPhoneApi />}
            {activeTab === 3 && <BottomTabApp />}
            {activeTab === 4 && <StackTabApp />}
            {activeTab === 5 && <DrawerApp />}
          </NavigationContainer>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.menuContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F5F7" />
      <ScrollView contentContainerStyle={styles.menuScroll}>
        <View style={styles.header}>
          <Text style={styles.courseSubtitle}>THỰC HÀNH LẬP TRÌNH THIẾT BỊ DI ĐỘNG</Text>
          <Text style={styles.headerTitle}>LAB 06 — NAVIGATION</Text>
        </View>

        <Text style={styles.sectionTitle}>DANH SÁCH BÀI TẬP (FIGMA & LAB 06):</Text>

        <View style={styles.list}>
          {exercises.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuCard}
              activeOpacity={0.8}
              onPress={() => setActiveTab(item.id)}
            >
              <View style={[styles.cardIconBox, { backgroundColor: item.color }]}>
                <Ionicons name={item.icon} size={26} color="#FFFFFF" />
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDesc}>{item.desc}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.muted} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.footerNote}>
          <Ionicons name="information-circle-outline" size={18} color={colors.muted} />
          <Text style={styles.footerNoteText}>
            Nhấn vào từng bài để chạy & chụp ảnh màn hình nộp báo cáo.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: "#F4F5F7",
  },
  menuScroll: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
    marginTop: 10,
  },
  courseSubtitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.muted,
    letterSpacing: 1,
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.text,
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: colors.muted,
    letterSpacing: 0.8,
    marginBottom: 12,
  },
  list: {
    gap: 12,
  },
  menuCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#EAEAEA",
  },
  cardIconBox: {
    width: 48,
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 3,
  },
  cardDesc: {
    fontSize: 13,
    color: colors.muted,
    lineHeight: 18,
  },
  footerNote: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    gap: 6,
  },
  footerNoteText: {
    fontSize: 13,
    color: colors.muted,
  },
  exerciseWrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.navy,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 12,
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
    marginLeft: 4,
  },
  topBarTitle: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  exerciseContent: {
    flex: 1,
  },
});
