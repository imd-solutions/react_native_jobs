import { SplashScreen, Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SpashScreen from "expo-splash-screen";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    DMBold: require("./../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("./../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("./../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SpashScreen.preventAutoHideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Stack>
      <View onLayout={onLayoutRootView}></View>
    </Stack>
  );
}
