import { Text, View, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";

const PlaceholderImage = require("@/assets/images/profile-pic.png");

// Dummy data structure for orders
const ordiniRecenti = [
  {
    id: "1",
    data: "15/03/2024",
    prodotto: "Divano in Pelle Milano",
    prezzo: "€899,99",
    stato: "Consegnato",
  },
  {
    id: "2",
    data: "02/03/2024",
    prodotto: "Tavolo da Pranzo Venezia",
    prezzo: "€459,00",
    stato: "In consegna",
  },
  {
    id: "3",
    data: "25/02/2024",
    prodotto: "Libreria Moderna Roma",
    prezzo: "€299,99",
    stato: "Consegnato",
  },
];

export default function Profilo() {
  const handleOrdinePress = (id: string) => {
    // TODO: Navigate to order detail page
    console.log(`Ordine selezionato: ${id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Mario Rossi</Text>
          <Text style={styles.email}>mariorossi@email.com</Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Image source={PlaceholderImage} style={styles.image} />
        </View>
      </View>
      <Text
        style={{ fontWeight: "bold", color: "rgb(26, 151, 230)", fontSize: 18 }}
      >
        Logout
      </Text>

      <View style={styles.ordiniSection}>
        <Text style={styles.ordiniTitle}>I Tuoi Ultimi Ordini</Text>
        {ordiniRecenti.map((ordine) => (
          <Pressable
            key={ordine.id}
            style={styles.ordineItem}
            onPress={() => handleOrdinePress(ordine.id)}
          >
            <View>
              <Text style={styles.ordineProdotto}>{ordine.prodotto}</Text>
              <Text style={styles.ordineDettagli}>
                {ordine.data} - {ordine.prezzo}
              </Text>
            </View>
            <Text
              style={[
                styles.ordineStato,
                { color: ordine.stato === "Consegnato" ? "green" : "orange" },
              ]}
            >
              {ordine.stato}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  image: {
    width: 84,
    height: 84,
    borderRadius: 52,
  },
  textContainer: {},
  name: {
    fontSize: 24,
  },
  email: {
    marginTop: 12,
    fontSize: 16,
    color: "rgb(128, 128, 128)",
  },
  ordiniSection: {
    marginVertical: 24,
  },
  ordiniTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  ordineItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  ordineProdotto: {
    fontSize: 16,
    fontWeight: "500",
  },
  ordineDettagli: {
    fontSize: 14,
    color: "rgb(128, 128, 128)",
    marginTop: 4,
  },
  ordineStato: {
    fontSize: 14,
    fontWeight: "500",
  },
});
