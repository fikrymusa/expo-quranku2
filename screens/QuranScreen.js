import { StyleSheet, Text, View, FlatList } from "react-native";
// import { FlatList, View } from "react";
import { useFonts } from "expo-font";
import { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const QuranScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const surah = require("../datas/surah.json");
  return (
    <View style={{ marginRight: 10, marginLeft: 10 }}>
      <FlatList
        data={surah}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              margin: 1,
              marginBottom: 12,
            }}
          >
            {/* <Image style={styles.imageThumbnail} source={{ uri: item.src }} /> */}
            <View
              style={{
                backgroundColor: "#159895",
                // marginBottom: 12,
                justifyContent: "center",
                alignItems: "center",
                width: 40,
                height: 40,
              }}
            >
              <Text>{item.surah_id}</Text>
            </View>

            <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 4 }}>
              <Text
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "#002B5B",
                }}
              >
                {item.surah_name}
              </Text>
              <Text style={{ color: "#159895" }}>
                Total {item.surah_verse_count} Ayat
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "MeQuran",
                  textAlign: "right",
                  fontSize: 20,
                }}
              >
                {item.surah_name_arabic}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default QuranScreen;

const styles = StyleSheet.create({});
