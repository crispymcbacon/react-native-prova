import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";
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
    description:
      "Calia è un negozio di mobili di alta qualità con una vasta gamma di prodotti per arredare la tua casa con stile e comfort.",
  },
  {
    id: "2",
    name: "Lube",
    image: shopImages.shop2,
    description:
      "Lube offre una selezione di cucine moderne e funzionali, progettate per soddisfare ogni esigenza e gusto personale.",
  },
  {
    id: "3",
    name: "Arredo3",
    image: shopImages.shop3,
    description:
      "Arredo3 è specializzato in soluzioni di arredamento innovative e di design, perfette per creare ambienti unici e accoglienti.",
  },
  {
    id: "4",
    name: "Veneta Cucine",
    image: shopImages.shop4,
    description:
      "Veneta Cucine propone cucine eleganti e di alta qualità, realizzate con materiali pregiati e attenzione ai dettagli.",
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
      <Text style={styles.description}>{shop.description}</Text>
      <Button title="Associa profilo" onPress={() => {}} />
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
  description: {
    fontSize: 16,
    marginTop: 8,
  },
});