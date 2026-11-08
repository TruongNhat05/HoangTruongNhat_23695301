import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { CartItem } from "../types";
import { colors, formatPrice, radius } from "../theme";
import { useDebounce } from "../hooks/useDebounce";

interface Props {
  item: CartItem;
  onChangeQty: (bookId: number, quantity: number) => void;
  onRemove: (bookId: number) => void;
}

export function CartItemRow({ item, onChangeQty, onRemove }: Props) {
  const [qty, setQty] = useState(item.quantity);
  const debouncedQty = useDebounce(qty, 300);

  useEffect(() => {
    if (debouncedQty !== item.quantity) {
      onChangeQty(item.bookId, debouncedQty);
    }
  }, [debouncedQty]);

  useEffect(() => {
    setQty(item.quantity);
  }, [item.quantity]);

  const canDec = qty > 1;
  const canInc = qty < item.stock;

  return (
    <View style={styles.row}>
      <View style={[styles.cover, { backgroundColor: item.color }]}>
        <Text style={styles.emoji}>{item.emoji}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.price}>{formatPrice(item.price)}</Text>
        <View style={styles.controlsRow}>
          <View style={styles.stepper}>
            <Pressable
              disabled={!canDec}
              onPress={() => setQty((q) => q - 1)}
              accessibilityLabel="Giảm"
              style={[styles.stepBtn, !canDec && styles.stepBtnDisabled]}
              hitSlop={4}
            >
              <Text style={[styles.stepBtnText, !canDec && styles.stepBtnTextDisabled]}>−</Text>
            </Pressable>
            <Text style={styles.qtyText}>{qty}</Text>
            <Pressable
              disabled={!canInc}
              onPress={() => setQty((q) => q + 1)}
              accessibilityLabel="Tăng"
              style={[styles.stepBtn, !canInc && styles.stepBtnDisabled]}
              hitSlop={4}
            >
              <Text style={[styles.stepBtnText, !canInc && styles.stepBtnTextDisabled]}>+</Text>
            </Pressable>
          </View>
          <Text style={styles.stockText}>Còn {item.stock}</Text>
        </View>
      </View>
      <Pressable onPress={() => onRemove(item.bookId)} hitSlop={8} accessibilityLabel="Xóa khỏi giỏ">
        <Text style={styles.trash}>🗑️</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: 10,
    marginHorizontal: 12,
    marginVertical: 5,
    gap: 10,
  },
  cover: { width: 54, height: 72, borderRadius: radius.sm, alignItems: "center", justifyContent: "center" },
  emoji: { fontSize: 26 },
  info: { flex: 1, gap: 4 },
  title: { fontWeight: "700", color: colors.text },
  price: { color: colors.indigo, fontWeight: "800" },
  controlsRow: { flexDirection: "row", alignItems: "center", gap: 10, marginTop: 4 },
  stepper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.sm,
    backgroundColor: "#fff",
  },
  stepBtn: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: radius.sm,
  },
  stepBtnDisabled: { opacity: 0.35 },
  stepBtnText: { fontSize: 16, fontWeight: "800", color: colors.navy },
  stepBtnTextDisabled: { color: colors.muted },
  qtyText: {
    minWidth: 26,
    textAlign: "center",
    fontWeight: "700",
    color: colors.text,
    fontSize: 14,
  },
  stockText: { color: colors.muted, fontSize: 12 },
  trash: { fontSize: 22, padding: 4 },
});
