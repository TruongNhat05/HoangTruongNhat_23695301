import React from "react";
import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { PHONES } from "../data/phones";
import { colors } from "../theme";
import { TabProps } from "./types";
import { ProductRow } from "./ProductRow";

export function ProductsTab({ navigation }: TabProps<"Products">) {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={PHONES}
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
});
