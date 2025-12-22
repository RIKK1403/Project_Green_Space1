import { Stack } from "expo-router";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function RootLayout() {
  return (
    <LanguageProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="accounts" />
        <Stack.Screen name="history" />
        <Stack.Screen name="language" />
      </Stack>
    </LanguageProvider>
  );
}