import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Phone } from "../types";
import { PHONE_COLORS } from "../data/phones";
import { colors, formatPrice } from "../theme";
import { Stars } from "../components/Stars";
import { useFavorites } from "./FavoritesContext";

export function ProductRow({
  phone,
  onPress,
}: {
  phone: Phone;
  onPress: () => void;
}) {
  const { has, toggle } = useFavorites();
  const isFav = has(phone.id);
  const thumb = PHONE_COLORS[phone.defaultColor]?.image;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.75}
    >
      {thumb && (
        <Image source={thumb} style={styles.thumb} resizeMode="contain" />
      )}

      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>
          {phone.name.split(" - ")[0]}
        </Text>
        <View style={styles.ratingRow}>
          <Stars value={phone.rating} size={13} />
          <Text style={styles.reviewText}>({phone.reviewCount})</Text>
        </View>
        <Text style={styles.price}>{formatPrice(phone.price)}</Text>
      </View>

      <TouchableOpacity
        style={styles.favBtn}
        onPress={() => toggle(phone.id)}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Ionicons
          name={isFav ? "heart" : "heart-outline"}
          size={24}
          color={isFav ? colors.red : colors.muted}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 10,
  },
  thumb: {
    width: 70,
    height: 80,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  reviewText: {
    fontSize: 12,
    color: colors.muted,
    marginLeft: 6,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.red,
  },
  favBtn: {
    padding: 6,
    marginLeft: 8,
  },
});
