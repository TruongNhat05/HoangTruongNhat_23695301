import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { PHONES, PHONE_COLORS } from "../data/phones";
import { colors, formatPrice } from "../theme";
import { Stars } from "../components/Stars";
import { Phone } from "../types";

export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const ICONS: Record<
  keyof TabParamList,
  [keyof typeof Ionicons.glyphMap, keyof typeof Ionicons.glyphMap]
> = {
  Home: ["home", "home-outline"],
  Search: ["search", "search-outline"],
  Profile: ["person", "person-outline"],
};

function PhoneItemCard({ item }: { item: Phone }) {
  const shortName = item.name.split(" - ")[0];
  const thumb = PHONE_COLORS[item.defaultColor]?.image;

  return (
    <View style={styles.card}>
      {thumb && <Image source={thumb} style={styles.cardThumb} resizeMode="contain" />}
      <View style={styles.cardInfo}>
        <Text style={styles.cardName} numberOfLines={2}>
          {shortName}
        </Text>
        <View style={styles.cardRating}>
          <Stars value={item.rating} size={14} />
          <Text style={styles.cardReview}>({item.reviewCount})</Text>
        </View>
        <Text style={styles.cardPrice}>{formatPrice(item.price)}</Text>
      </View>
    </View>
  );
}

function HomeTab() {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={PHONES}
        keyExtractor={(p) => p.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => <PhoneItemCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

function SearchTab() {
  const [keyword, setKeyword] = useState("");

  const filtered = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    if (!q) return PHONES;
    return PHONES.filter((p) => p.name.toLowerCase().includes(q));
  }, [keyword]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.searchBarWrap}>
        <Ionicons name="search" size={20} color={colors.muted} style={styles.searchIcon} />
        <TextInput
          value={keyword}
          onChangeText={setKeyword}
          placeholder="Nhập từ khóa tìm kiếm (vd: aris, joy...)"
          placeholderTextColor="#999"
          style={styles.searchInput}
          clearButtonMode="while-editing"
        />
        {keyword.length > 0 && (
          <TouchableOpacity onPress={() => setKeyword("")}>
            <Ionicons name="close-circle" size={18} color={colors.muted} />
          </TouchableOpacity>
        )}
      </View>

      {filtered.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="alert-circle-outline" size={48} color={colors.muted} />
          <Text style={styles.emptyText}>
            Không có kết quả cho “{keyword}”
          </Text>
        </View>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(p) => p.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => <PhoneItemCard item={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

function ProfileTab() {
  return (
    <SafeAreaView style={[styles.screen, styles.center]}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>NA</Text>
      </View>
      <Text style={styles.userName}>Hoàng Trương Nhật</Text>
      <Text style={styles.userEmail}>hoangtruongnhat0909@gmail.com</Text>
    </SafeAreaView>
  );
}

export function BottomTabApp() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.red,
        tabBarInactiveTintColor: colors.muted,
        tabBarIcon: ({ focused, color, size }) => {
          const iconPair = ICONS[route.name as keyof TabParamList];
          const iconName = iconPair ? iconPair[focused ? 0 : 1] : "apps";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: colors.text,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{ title: "Trang chủ" }}
      />
      <Tab.Screen
        name="Search"
        component={SearchTab}
        options={{ title: "Tìm kiếm" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        options={{ title: "Cá nhân" }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  listContent: {
    padding: 16,
    gap: 12,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  cardThumb: {
    width: 65,
    height: 75,
    marginRight: 14,
  },
  cardInfo: {
    flex: 1,
    justifyContent: "center",
  },
  cardName: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 4,
  },
  cardRating: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  cardReview: {
    fontSize: 12,
    color: colors.muted,
    marginLeft: 6,
  },
  cardPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.red,
  },
  searchBarWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: 14,
    marginBottom: 6,
    paddingHorizontal: 12,
    height: 46,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.line,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  emptyText: {
    marginTop: 12,
    fontSize: 16,
    color: colors.muted,
    textAlign: "center",
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    shadowColor: colors.blue,
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
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 6,
  },
  userEmail: {
    fontSize: 15,
    color: colors.muted,
    marginBottom: 16,
  },
  profileBadge: {
    backgroundColor: "#EBF3FF",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  profileBadgeText: {
    color: colors.blue,
    fontSize: 13,
    fontWeight: "500",
  },
});
