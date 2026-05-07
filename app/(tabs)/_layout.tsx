import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Etec de Itanhaém",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="primeiro"
        options={{
          title: "Primeiro Ano",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="html5" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="segundo"
        options={{
          title: "Segundo Ano",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 size={28} name="php" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="terceiro"
        options={{
          title: "Terceiro Ano",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="android" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
