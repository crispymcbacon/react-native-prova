import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";

const PlaceholderImage = require("@/assets/images/profile-pic.png");

export default function Profilo() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Mario Rossi</Text>
          <Text style={styles.email}>mariorossi@email.com</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Image source={PlaceholderImage} style={styles.image} />
        </View>
      </View>
      <Text style={{ fontWeight: 'bold', color: 'rgb(26, 151, 230)' }}>Logout</Text>
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
  textContainer: {
  },
  name: {
    fontSize: 24,
  },
  email: {
    marginTop: 12,
    fontSize: 16,
    color: "rgb(128, 128, 128)",
  },
});
