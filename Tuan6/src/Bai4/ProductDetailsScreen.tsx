import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PHONES, PHONE_COLORS } from "../data/phones";
import { colors, formatPrice } from "../theme";
import { Stars } from "../components/Stars";
import { RootProps } from "./types";
import { useFavorites } from "./FavoritesContext";

export function ProductDetailsScreen({ route }: RootProps<"ProductDetails">) {
  const { id } = route.params;
  const phone = PHONES.find((x) => x.id === id);
  const { has, toggle } = useFavorites();

  if (!phone) {
    return (
      <SafeAreaView style={[styles.screen, styles.center]}>
        <Ionicons name="alert-circle-outline" size={60} color={colors.red} />
        <Text style={styles.notFoundText}>Không tìm thấy sản phẩm #{id}</Text>
      </SafeAreaView>
    );
  }

  const isFav = has(phone.id);
  const thumb = PHONE_COLORS[phone.defaultColor]?.image;

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        {}
        <View style={styles.imageBox}>
          {thumb && (
            <Image
              source={thumb}
              style={styles.image}
              resizeMode="contain"
            />
          )}
        </View>

        <View style={styles.detailsBox}>
          <Text style={styles.name}>{phone.name}</Text>

          <View style={styles.ratingRow}>
            <Stars value={phone.rating} size={18} />
            <Text style={styles.reviewText}>
              (Xem {phone.reviewCount} đánh giá từ người mua)
            </Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.price}>{formatPrice(phone.price)}</Text>
            {phone.oldPrice > phone.price && (
              <Text style={styles.oldPrice}>{formatPrice(phone.oldPrice)}</Text>
            )}
          </View>

          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Nhà cung cấp:</Text>
            <Text style={styles.metaValue}>{phone.supplier}</Text>
          </View>

          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Cam kết:</Text>
            <Text style={styles.badge}>{phone.badge}</Text>
          </View>

          {}
          <TouchableOpacity
            style={[styles.favActionBtn, isFav && styles.favActionBtnActive]}
            activeOpacity={0.8}
            onPress={() => toggle(phone.id)}
          >
            <Ionicons
              name={isFav ? "heart" : "heart-outline"}
              size={22}
              color={isFav ? "#FFFFFF" : colors.red}
              style={{ marginRight: 8 }}
            />
            <Text
              style={[
                styles.favActionBtnText,
                isFav && styles.favActionBtnTextActive,
              ]}
            >
              {isFav ? "♥ Đã lưu vào yêu thích" : "♡ Lưu vào yêu thích"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  content: {
    padding: 20,
  },
  notFoundText: {
    fontSize: 18,
    color: colors.red,
    fontWeight: "bold",
    marginTop: 12,
  },
  imageBox: {
    alignItems: "center",
    justifyContent: "center",
    height: 280,
    backgroundColor: "#F9F9FB",
    borderRadius: 12,
    marginBottom: 20,
    padding: 10,
  },
  image: {
    width: "80%",
    height: "90%",
  },
  detailsBox: {
    paddingHorizontal: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    lineHeight: 28,
    marginBottom: 10,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  reviewText: {
    fontSize: 14,
    color: colors.muted,
    marginLeft: 10,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 16,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.red,
    marginRight: 16,
  },
  oldPrice: {
    fontSize: 16,
    color: colors.muted,
    textDecorationLine: "line-through",
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  metaLabel: {
    fontSize: 15,
    color: colors.muted,
    width: 110,
  },
  metaValue: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.text,
  },
  badge: {
    fontSize: 13,
    fontWeight: "bold",
    color: colors.red,
  },
  favActionBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: colors.red,
    marginTop: 24,
    backgroundColor: "#FFFFFF",
  },
  favActionBtnActive: {
    backgroundColor: colors.red,
    borderColor: colors.red,
  },
  favActionBtnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.red,
  },
  favActionBtnTextActive: {
    color: "#FFFFFF",
  },
});
