import "react-native-reanimated";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Provider as ReduxProvider } from "react-redux";
import { RootSiblingParent } from "react-native-root-siblings";
import store from "@/store";
// ///////////////////////////////////////////////
import { useRootLayout } from "@/hooks/useRootLayout";

export default function RootLayout() {
  const loaded = useRootLayout();

  return !loaded ? null : (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <RootSiblingParent>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="+not-found" />
          </Stack>
        </RootSiblingParent>
      </ReduxProvider>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}
