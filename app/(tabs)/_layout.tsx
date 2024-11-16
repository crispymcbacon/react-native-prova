// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "rgb(255, 255, 255)", // White color for active text and icons
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.7)", // Slightly transparent white for inactive text and icons
        tabBarStyle: {
          backgroundColor: "rgb(26, 151, 230)", // Background color
        },
        headerStyle: {
          backgroundColor: "hsl(203, 30%, 40%)", // Top navbar background color
        },
        headerTintColor: "rgb(255, 255, 255)", // White color for text
      }}
    >
      <Tabs.Screen
        name="(negozi)"
        options={{
          title: "Negozi",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="couch" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profilo"
        options={{
          title: "Profilo",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 size={20} name="user-alt" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
