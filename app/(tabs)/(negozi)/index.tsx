// app/(tabs)/(negozi)/index.tsx
import { Text, View, FlatList, Dimensions } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";

// Import shop images
const shopImages = {
  shop1: require("@/assets/images/shop-calia.jpg"),
  shop2: require("@/assets/images/shop-lube.jpg"),
  shop3: require("@/assets/images/shop-arredo3.jpg"),
  shop4: require("@/assets/images/shop-veneta.jpg"),
};

// Updated shops data with local images
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

const { width } = Dimensions.get("window");
const columnWidth = width / 2 - 15;

export default function Index() {
  const renderShopCard = ({
    item,
  }: {
    item: { id: string; name: string; image: any };
  }) => (
    <Link
      href={{ pathname: "/(negozi)/[id]", params: { id: item.id } }}
      style={{
        width: columnWidth,
        margin: 5,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <Image
        source={item.image}
        style={{
          width: "100%",
          height: 150,
          borderRadius: 8,
        }}
      />
      <Text
        style={{
          marginTop: 8,
          fontSize: 16,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        {item.name}
      </Text>
    </Link>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={shops}
        renderItem={renderShopCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{
          padding: 10,
        }}
      />
    </View>
  );
}
