import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ColorKey, Phone } from "../types";
import { PHONE_COLORS, COLOR_ORDER } from "../data/phones";
import { colors } from "../theme";
import { SelectPhoneParamList } from "./SelectPhoneApp";

function formatPrice(n: number): string {
  return n.toLocaleString("vi-VN") + " đ";
}

type Props = NativeStackScreenProps<SelectPhoneParamList, "ChooseColor"> & {
  phone: Phone;
};

export function ChooseColorScreen({ navigation, route, phone }: Props) {
  const [picked, setPicked] = useState<ColorKey | undefined>(route.params?.color);
  const parts = phone.name.split(" - ");
  const line1 = parts[0] || phone.name;
  const line2 = parts[1] || "";

  const handleDone = () => {
    navigation.navigate({
      name: "Product",
      params: { color: picked },
      merge: true,
    } as any);
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <Image
          source={PHONE_COLORS[picked ?? phone.defaultColor].image}
          style={styles.thumb}
          resizeMode="contain"
        />
        <View style={styles.headerText}>
          <Text style={styles.line}>{line1}</Text>
          {line2 ? <Text style={styles.line}>{line2}</Text> : null}

          {picked ? (
            <View style={styles.pickedBox}>
              <Text style={styles.infoRow}>
                Màu: <Text style={styles.bold}>{PHONE_COLORS[picked].label}</Text>
              </Text>
              <Text style={styles.infoRow}>
                Cung cấp bởi <Text style={styles.bold}>{phone.supplier}</Text>
              </Text>
              <Text style={styles.price}>{formatPrice(phone.price)}</Text>
            </View>
          ) : null}
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.hint}>Chọn một màu bên dưới:</Text>

        <View style={styles.swatches}>
          {COLOR_ORDER.map((key) => {
            const isSelected = picked === key;
            return (
              <Pressable
                key={key}
                onPress={() => setPicked(key)}
                style={[
                  styles.swatch,
                  { backgroundColor: PHONE_COLORS[key].hex },
                  isSelected && styles.swatchOn,
                ]}
              >
                {isSelected && (
                  <Text
                    style={[
                      styles.checkMark,
                      key === "silver" && { color: "#000" },
                    ]}
                  >
                    ✓
                  </Text>
                )}
              </Pressable>
            );
          })}
        </View>

        <TouchableOpacity
          style={styles.doneBtn}
          activeOpacity={0.85}
          onPress={handleDone}
        >
          <Text style={styles.doneBtnText}>XONG</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  header: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#fff",
    gap: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  thumb: {
    width: 90,
    height: 110,
  },
  headerText: {
    flex: 1,
    justifyContent: "space-between",
  },
  line: {
    fontSize: 14,
    color: colors.text,
    fontWeight: "500",
  },
  pickedBox: {
    marginTop: 4,
    gap: 2,
  },
  infoRow: {
    fontSize: 13,
    color: colors.text,
  },
  bold: {
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
    marginTop: 2,
  },
  body: {
    flex: 1,
    backgroundColor: "#C4C4C4",
    padding: 16,
    justifyContent: "space-between",
  },
  hint: {
    fontSize: 16,
    color: "#000",
    marginBottom: 10,
  },
  swatches: {
    alignItems: "center",
    gap: 14,
  },
  swatch: {
    width: 75,
    height: 75,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  swatchOn: {
    borderWidth: 3,
    borderColor: "#fff",
  },
  checkMark: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  doneBtn: {
    backgroundColor: "rgba(25, 82, 226, 0.9)",
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1541A6",
  },
  doneBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
