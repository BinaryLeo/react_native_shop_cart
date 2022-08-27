import React, { useEffect, useState, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/theme";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_400Regular_Italic
} from "@expo-google-fonts/poppins";
import { Startup } from "./src";
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Poppins_400Regular_Italic,
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_700Bold,
          Poppins_600SemiBold,
          
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    })();
  }, []);
  const onLayout = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  if (!appIsReady) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <View style={{ backgroundColor: "#eaeaea" }}>
        <Startup onLayout={onLayout} />
      </View>
    </ThemeProvider>
  );
}
