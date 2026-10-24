import React, { useState, createContext, useContext } from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme";

type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

interface AppThemeContextType {
  notify: boolean;
  setNotify: (val: boolean) => void;
  dark: boolean;
  setDark: (val: boolean) => void;
}

const AppThemeContext = createContext<AppThemeContextType>({
  notify: true,
  setNotify: () => {},
  dark: false,
  setDark: () => {},
});

function HomeScreen() {
  const { dark } = useContext(AppThemeContext);
  const bg = dark ? "#121212" : colors.bg;
  const textColor = dark ? "#FFFFFF" : colors.text;

  return (
    <SafeAreaView style={[styles.center, { backgroundColor: bg }]}>
      <Text style={[styles.big, { color: textColor }]}>Xin chào 👋</Text>
      <Text style={[styles.subText, { color: dark ? "#AAAAAA" : colors.muted }]}>
        Chào mừng bạn đến với ứng dụng Lab 06 Drawer Navigation!
      </Text>
      <Text style={[styles.tipText, { color: colors.blue }]}>
        ← Kéo từ mép trái hoặc bấm biểu tượng ☰ trên thanh tiêu đề để mở Menu
      </Text>
    </SafeAreaView>
  );
}

function ProfileScreen() {
  const { dark } = useContext(AppThemeContext);
  const bg = dark ? "#121212" : colors.bg;
  const textColor = dark ? "#FFFFFF" : colors.text;

  return (
    <SafeAreaView style={[styles.center, { backgroundColor: bg }]}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>NA</Text>
      </View>
      <Text style={[styles.big, { color: textColor }]}>Hoàng Trương Nhật</Text>
      <Text style={[styles.muted, { color: dark ? "#999999" : colors.muted }]}>
        hoangtruongnhat0909@gmail.com
      </Text>
    </SafeAreaView>
  );
}

function SettingsScreen() {
  const { notify, setNotify, dark, setDark } = useContext(AppThemeContext);
  const bg = dark ? "#121212" : colors.bg;
  const cardBg = dark ? "#1E1E1E" : "#FFFFFF";
  const textColor = dark ? "#FFFFFF" : colors.text;

  return (
    <SafeAreaView style={[styles.settingsContainer, { backgroundColor: bg }]}>
      <View style={[styles.settingsCard, { backgroundColor: cardBg }]}>
        {}
        <View style={styles.switchRow}>
          <View style={styles.switchLabelWrap}>
            <Ionicons
              name={notify ? "notifications" : "notifications-off-outline"}
              size={22}
              color={notify ? colors.red : colors.muted}
              style={{ marginRight: 10 }}
            />
            <Text style={[styles.switchLabel, { color: textColor }]}>
              Nhận thông báo
            </Text>
          </View>
          <Switch
            value={notify}
            onValueChange={setNotify}
            trackColor={{ false: "#767577", true: "#FF8A80" }}
            thumbColor={notify ? colors.red : "#f4f3f4"}
          />
        </View>

        <View style={styles.divider} />

        {}
        <View style={styles.switchRow}>
          <View style={styles.switchLabelWrap}>
            <Ionicons
              name={dark ? "moon" : "sunny-outline"}
              size={22}
              color={dark ? "#F5C518" : colors.muted}
              style={{ marginRight: 10 }}
            />
            <Text style={[styles.switchLabel, { color: textColor }]}>
              Chế độ tối (Dark Mode)
            </Text>
          </View>
          <Switch
            value={dark}
            onValueChange={setDark}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={dark ? colors.blue : "#f4f3f4"}
          />
        </View>
      </View>

      {}
      <View style={[styles.statusBox, { backgroundColor: cardBg }]}>
        <Text style={[styles.statusText, { color: dark ? "#DDD" : colors.text }]}>
          Thông báo:{" "}
          <Text style={{ fontWeight: "bold", color: notify ? "#2E7D32" : colors.red }}>
            {notify ? "BẬT" : "TẮT"}
          </Text>{" "}
          · Giao diện:{" "}
          <Text style={{ fontWeight: "bold", color: dark ? colors.blue : "#E65100" }}>
            {dark ? "tối" : "sáng"}
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

export function DrawerApp() {
  const [notify, setNotify] = useState<boolean>(true);
  const [dark, setDark] = useState<boolean>(false);

  return (
    <AppThemeContext.Provider value={{ notify, setNotify, dark, setDark }}>
      <StatusBar barStyle={dark ? "light-content" : "dark-content"} />
      <Drawer.Navigator
        screenOptions={({ route }) => ({
          drawerActiveTintColor: colors.red,
          drawerInactiveTintColor: dark ? "#BBBBBB" : colors.muted,
          drawerActiveBackgroundColor: dark ? "#331111" : "#FFEBEE",
          drawerStyle: {
            backgroundColor: dark ? "#1E1E1E" : "#FFFFFF",
            width: 270,
          },
          headerStyle: {
            backgroundColor: dark ? "#1E1E1E" : "#FFFFFF",
          },
          headerTintColor: dark ? "#FFFFFF" : colors.text,
          drawerIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = "home-outline";
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Trang chủ" }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Hồ sơ cá nhân" }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: "Cài đặt" }}
        />
      </Drawer.Navigator>
    </AppThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  big: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subText: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
  tipText: {
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "center",
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.red,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    shadowColor: colors.red,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "bold",
  },
  muted: {
    fontSize: 15,
  },
  settingsContainer: {
    flex: 1,
    padding: 16,
  },
  settingsCard: {
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 16,
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
  },
  switchLabelWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "#EEEEEE",
  },
  statusBox: {
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  statusText: {
    fontSize: 15,
  },
});
