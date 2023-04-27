import { Button, Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

const WellcomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://quran.paraduta.id/static/media/quran.a973903a91d7e87de1db.jpeg",
        }}
        style={styles.img}
      />

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>Visist</Text>
      </Pressable>
    </View>
  );
};

export default WellcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#159895",
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#147EFB",
    padding: 10,
    borderRadius: 4,
    marginTop: 10,
  },
  text: {
    color: "white",
  },
});
