import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  Pressable,
} from "react-native";
import { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const countries = [
    {
      id: "1",
      name: "Baca al-Quran",
      path: "QuranScreen",
    },
    {
      id: "2",
      name: "Pencarian Ayat",
      path: "QuranSearch",
    },
    {
      id: "3",
      name: "Jadwal Sholat",
      path: "JadwalScreen",
    },
    {
      id: "4",
      name: "Doa",
      path: "DoaScreen",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{ margin: 12 }}>
        <FlatList
          data={countries}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate(item.path)}
              style={[styles.card, styles.shadowProp]}
            >
              {/* <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
               */}
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                ICON
              </Text>
              <Text style={{ color: "white" }}>{item.name}</Text>
            </Pressable>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A5F7A",
    alignContent: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    flexDirection: "column",

    margin: 10,
    paddingVertical: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#159895",
    borderRadius: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
