import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Etec de Itanhaém</Text>

        <Image
          source={require("@/assets/images/CPS.jpg")}
          style={styles.logo}
          contentFit="contain"
        />
      </View>

      <View style={styles.courseBox}>
        <Text style={styles.courseText}>Informática para Internet</Text>
      </View>

      <Image
        source={require("@/assets/images/image.jpg")}
        style={styles.mainImage}
        contentFit="cover"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
  },

  header: {
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#004aad",
    marginBottom: 10,
  },

  logo: {
    width: 120,
    height: 120,
  },

  courseBox: {
    borderWidth: 2,
    borderColor: "#004aad",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginBottom: 30,
  },

  courseText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },

  mainImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
});
