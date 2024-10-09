import React from "react";
import { Stack } from "expo-router";

export default function AuthLayout() {
  console.log("🚀 ~ AuthLayout");
  // renders
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
