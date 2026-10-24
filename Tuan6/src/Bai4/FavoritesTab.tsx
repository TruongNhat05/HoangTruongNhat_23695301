import React, { useMemo } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PHONES } from "../data/phones";
import { colors } from "../theme";
import { TabProps } from "./types";
import { useFavorites } from "./FavoritesContext";
import { ProductRow } from "./ProductRow";

export function FavoritesTab({ navigation }: TabProps<"Favorites">) {
  const { ids } = useFavorites();

  const favoritePhones = useMemo(() => {
    return PHONES.filter((p) => ids.includes(p.id));
  }, [ids]);

  return (
    <SafeAreaView style={styles.screen}>
      {favoritePhones.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="heart-dislike-outline" size={64} color={colors.muted} />
          <Text style={styles.emptyTitle}>Chưa có sản phẩm nào được lưu.</Text>
          <Text style={styles.emptySubtitle}>
            Hãy nhấn vào biểu tượng trái tim để lưu lại sản phẩm bạn quan tâm!
          </Text>
        </View>
      ) : (
        <FlatList
          data={favoritePhones}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <ProductRow
              phone={item}
              onPress={() => navigation.navigate("ProductDetails", { id: item.id })}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  listContent: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
    marginTop: 16,
    textAlign: "center",
  },
  emptySubtitle: {
    fontSize: 14,
    color: colors.muted,
    marginTop: 8,
    textAlign: "center",
    lineHeight: 20,
  },
});
