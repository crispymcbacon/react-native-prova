import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(negozi)"
        options={{
          headerShown: true,
          title: "",
          headerBackTitle: "Indietro",
          headerStyle: {
            backgroundColor: "hsl(203, 30%, 40%)", // Top navbar background color
          },
          headerTintColor: "rgb(255, 255, 255)", // White color for text
        }}
      />
    </Stack>
  );
}
