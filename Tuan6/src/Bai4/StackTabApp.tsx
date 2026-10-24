import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme";
import { TabParamList, RootStackParamList } from "./types";
import { FavoritesProvider, useFavorites } from "./FavoritesContext";
import { ProductsTab } from "./ProductsTab";
import { FavoritesTab } from "./FavoritesTab";
import { ProductDetailsScreen } from "./ProductDetailsScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

function HomeTabs() {
  const { ids } = useFavorites();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.red,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Products"
        component={ProductsTab}
        options={{
          title: "Sản phẩm",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "cube" : "cube-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesTab}
        options={{
          title: "Yêu thích",
          tabBarBadge: ids.length > 0 ? ids.length : undefined,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function StackTabApp() {
  return (
    <FavoritesProvider>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: colors.text,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: "#FFFFFF",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ title: "Cửa hàng Vsmart" }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={{ title: "Chi tiết sản phẩm" }}
        />
      </Stack.Navigator>
    </FavoritesProvider>
  );
}
