import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import GlobalStyles from "./GlobalStyles";
import HomeCard from "./HomeCard";
import Navbar from "./Navbar";
import AppLoading from "expo-app-loading";
import { useFonts, Khand_400Regular } from "@expo-google-fonts/khand";
import ActionButton from "./ActionButton";
import brand1 from "./assets/brand1.png";
import Web3 from "web3";
import { newKitFromWeb3 } from "@celo/contractkit";

const web3 = new Web3("https://alfajores-forno.celo-testnet.org");
const kit = newKitFromWeb3(web3);

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    offer: "Earn 2 CHIPS on Sunday Happy Meal",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    offer: "Earn 2 CHIPS on Sunday Happy Meal",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    offer: "Earn 2 CHIPS on Sunday Happy Meal",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b99",
    title: "First Item",
    offer: "Earn 2 CHIPS on Sunday Happy Meal",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f22",
    title: "Second Item",
    offer: "Earn 2 CHIPS on Sunday Happy Meal",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d11",
    title: "Third Item",
    offer: "Earn 2 CHIPS on Sunday Happy Meal",
  },
];

const Item = ({ title, source, offer }) => (
  <View style={styles.item}>
    <Image
      source={brand1}
      style={{
        width: "100%",
        height: 105,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
      }}
    />
    <View style={styles.cardText}>
      <Text style={styles.category}>{title}</Text>
      <Text style={styles.message}>{offer}</Text>
      <Text style={styles.button}>Redeem now </Text>
    </View>
  </View>
);

export default function App() {
  const [modalVisible, setModalVisible] = useState(true);
  let [fontsLoaded] = useFonts({
    Khand_400Regular,
  });
  const renderItem = ({ item }) => (
    <Item title={item.title} offer={item.offer} />
  );

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <Text
          style={{
            fontFamily: "Khand_400Regular",
            fontSize: 24,
            color: "#72C0BD",
            paddingTop: 10,
            paddingLeft: 36,
          }}
        >
          Hi Ishika
        </Text>
        <HomeCard />
        <ActionButton />
        <Text
          style={{
            fontFamily: "Khand_400Regular",
            fontSize: 24,
            color: "#72C0BD",
            paddingTop: 10,
            paddingLeft: 36,
          }}
        >
          Explore loyalty programs
        </Text>
        <Navbar />
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  item: {
    borderColor: "#fff",
    borderWidth: 1,
    backgroundColor: "#000000",
    height: 178,
    margin: 12,
    borderRadius: 12,
    margin: 10,
  },
  cardText: {
    paddingLeft: 4,
  },
  title: {
    color: "#fff",
  },
  category: {
    fontSize: 12,
    color: "#77C6C1",
  },
  message: {
    fontSize: 16,
    color: "#fff",
  },
  button: {
    fontSize: 12,
    color: "#fff",
  },
});
