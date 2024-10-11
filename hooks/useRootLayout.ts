import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as NavigationBar from "expo-navigation-bar";
import * as SplashScreen from "expo-splash-screen";

import { FONTS } from "@/constants/THEME";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export function useRootLayout() {
  const [loaded, error] = useFonts(FONTS);

  useEffect(() => {
    if (loaded || error) {
      NavigationBar.setBackgroundColorAsync("black");
      NavigationBar.setVisibilityAsync("hidden");
      NavigationBar.setBehaviorAsync("overlay-swipe");
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return loaded;
}
