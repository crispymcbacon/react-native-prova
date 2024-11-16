import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

// Import the shops data
const shopImages = {
  shop1: require("@/assets/images/shop-calia.jpg"),
  shop2: require("@/assets/images/shop-lube.jpg"),
  shop3: require("@/assets/images/shop-arredo3.jpg"),
  shop4: require("@/assets/images/shop-veneta.jpg"),
};

const shops = [
  {
    id: "1",
    name: "Calia",
    image: shopImages.shop1,
  },
  {
    id: "2",
    name: "Lube",
    image: shopImages.shop2,
  },
  {
    id: "3",
    name: "Arredo3",
    image: shopImages.shop3,
  },
  {
    id: "4",
    name: "Veneta Cucine",
    image: shopImages.shop4,
  },
];

export default function ShopDetail() {
  const { id } = useLocalSearchParams();
  const shop = shops.find((s) => s.id === id);

  if (!shop) {
    return <Text>Shop not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={shop.image} style={styles.image} />
      <Text style={styles.title}>{shop.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
});
