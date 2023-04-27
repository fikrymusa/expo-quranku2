import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import WellcomeScreen from "./screens/WellcomeScreen";
import QuranScreen from "./screens/QuranScreen";
import SearchScreen from "./screens/SearchScreen";
import JadwalScreen from "./screens/JadwalScreen";
import DoaScreen from "./screens/DoaScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    MeQuran: require("./assets/fonts/me_quran.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Wellcome" component={WellcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="QuranScreen" component={QuranScreen} />
        <Stack.Screen name="QuranSearch" component={SearchScreen} />
        <Stack.Screen name="JadwalScreen" component={JadwalScreen} />
        <Stack.Screen name="DoaScreen" component={DoaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
