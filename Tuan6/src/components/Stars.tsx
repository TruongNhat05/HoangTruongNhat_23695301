import React from "react";
import { Text } from "react-native";
import { colors } from "../theme";

export function Stars({ value, size = 16 }: { value: number; size?: number }) {
  const safeVal = Math.max(0, Math.min(5, Math.floor(value)));
  return (
    <Text style={{ color: colors.star, fontSize: size, letterSpacing: 1 }}>
      {"★".repeat(safeVal)}
      <Text style={{ color: colors.line }}>{"★".repeat(5 - safeVal)}</Text>
    </Text>
  );
}
