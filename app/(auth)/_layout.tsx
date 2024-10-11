import React from "react";
import { Slot, Stack } from "expo-router";

export default function AuthLayout() {
  console.log("🚀 ~ AuthLayout");
  // renders
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Slot />
    </Stack>
  );
}
