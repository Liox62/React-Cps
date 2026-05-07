import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Etec de Itanhaém</Text>

        <Image
          source={require("@/assets/images/CPS.png")}
          style={styles.logo}
          contentFit="contain"
        />
      </View>

      <View style={styles.courseBox}>
        <Text style={styles.courseText}>Informática para Internet</Text>
      </View>

      <View style={styles.courseBox}>
        <Text style={styles.courseText}>
          Técnico em Informática para Internet
        </Text>
      </View>

      <Image
        source={require("@/assets/images/lagosta.jpg")}
        style={styles.mainImage}
        contentFit="cover"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#818181",
    alignItems: "center",
    paddingTop: 50,
  },

  header: {
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ffd000",
    marginBottom: 10,
  },

  logo: {
    width: 300,
    height: 200,
  },

  courseBox: {
    borderWidth: 2,
    borderColor: "#ffd000",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginBottom: 30,
  },

  courseText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffd000",
  },

  mainImage: {
    width: 350,
    height: 250,
    borderRadius: 10,
  },
});
