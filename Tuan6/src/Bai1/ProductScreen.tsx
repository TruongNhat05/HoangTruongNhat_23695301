import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ColorKey, Phone } from "../types";
import { PHONE_COLORS } from "../data/phones";
import { Stars } from "../components/Stars";
import { colors } from "../theme";
import { SelectPhoneParamList } from "./SelectPhoneApp";

function formatPrice(n: number): string {
  return n.toLocaleString("vi-VN") + " đ";
}

type Props = NativeStackScreenProps<SelectPhoneParamList, "Product"> & {
  phone: Phone;
};

export function ProductScreen({ navigation, route, phone }: Props) {
  const picked = route.params?.color;
  const shown = picked ?? phone.defaultColor;

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.imageWrap}>
        <Image
          source={PHONE_COLORS[shown].image}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{phone.name}</Text>

        <View style={styles.row}>
          <Stars value={phone.rating} size={18} />
          <Text style={styles.review}>(Xem {phone.reviewCount} đánh giá)</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.price}>{formatPrice(phone.price)}</Text>
          <Text style={styles.oldPrice}>{formatPrice(phone.oldPrice)}</Text>
        </View>

        <View style={styles.badgeRow}>
          <Text style={styles.badge}>{phone.badge}</Text>
          <View style={styles.questionCircle}>
            <Text style={styles.questionMark}>?</Text>
          </View>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.chooseBtn,
            pressed && { backgroundColor: "#f0f0f0" },
          ]}
          onPress={() => navigation.navigate("ChooseColor", { color: picked })}
        >
          <Text style={styles.chooseBtnText}>
            {picked ? "4 MÀU-CHỌN LOẠI" : "4 MÀU-CHỌN MÀU"}
          </Text>
          <Text style={styles.chevron}>›</Text>
        </Pressable>
      </View>

      <TouchableOpacity
        style={styles.buyBtn}
        activeOpacity={0.85}
        onPress={() =>
          Alert.alert(
            "Đặt hàng",
            `Đã thêm ${phone.name} (${PHONE_COLORS[shown].label}) vào giỏ hàng!`
          )
        }
      >
        <Text style={styles.buyBtnText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
    justifyContent: "space-between",
    padding: 16,
  },
  imageWrap: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  info: {
    gap: 10,
  },
  name: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 22,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  review: {
    fontSize: 13,
    color: colors.muted,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
  },
  oldPrice: {
    fontSize: 14,
    color: colors.muted,
    textDecorationLine: "line-through",
  },
  badgeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  badge: {
    color: colors.red,
    fontWeight: "bold",
    fontSize: 12,
  },
  questionCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.muted,
    alignItems: "center",
    justifyContent: "center",
  },
  questionMark: {
    fontSize: 10,
    color: colors.muted,
  },
  chooseBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 8,
    paddingVertical: 10,
    marginTop: 6,
    position: "relative",
  },
  chooseBtnText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
  },
  chevron: {
    position: "absolute",
    right: 14,
    fontSize: 20,
    color: colors.muted,
  },
  buyBtn: {
    backgroundColor: colors.red,
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 12,
  },
  buyBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
