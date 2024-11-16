// app/(tabs)/(negozi)/_layout.tsx
import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          headerTitle: "Dettaglio negozio",
        }}
      />
    </Stack>
  );
}
