import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_300Light,
} from "@expo-google-fonts/nunito";
import { Khand_600SemiBold } from "@expo-google-fonts/khand";
import { Ionicons } from "@expo/vector-icons";
import WalletID from "./WalletID";

const HomeCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Khand_600SemiBold,
    Nunito_300Light,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <LinearGradient
        // Background Linear Gradient
        style={styles.card}
        colors={["#13547A", "#80D0C7"]}
        start={[0.0, 0.0]}
        end={[1.0, 1.0]}
      >
        <View style={styles.card}>
          <View style={styles.topRow}>
            <Text style={styles.chipCount}>2 CHIPS</Text>
            <Text style={styles.cryftLogo}>cryft</Text>
          </View>

          <View>
            <Text style={styles.cardMessage}>
              Zeppo just added 2 CHIPS to your wallet
            </Text>
          </View>

          <Pressable
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.walletIdButton}>
              <Text style={styles.walletIdButtonText}>
                <Ionicons name='md-barcode-sharp' size={18} color='white' />
                &nbsp; View wallet ID
              </Text>
            </View>
          </Pressable>
        </View>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <TouchableOpacity
            style={styles.overlay}
            onPressOut={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <TouchableOpacity onPress={() => {}} activeOpacity={1}>
              <WalletID />
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
      </LinearGradient>
    );
  }
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    width: "95%",
    alignSelf: "center",
    height: 203,
    borderRadius: 20,
    marginTop: 12,
  },
  chipCount: {
    color: "#ffffff",
    fontSize: 24,
    fontFamily: "Nunito_600SemiBold",
  },
  topRow: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
    paddingBottom: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  cryftLogo: {
    fontFamily: "Khand_600SemiBold",
    fontSize: 24,
    color: "#185A7E",
  },
  cardMessage: {
    color: "#ffffff",
    fontFamily: "Nunito_300Light",
    width: 158,
    paddingLeft: 20,
  },
  walletIdButton: {
    backgroundColor: "#000000",
    height: 46,
    width: 311,
    borderRadius: 20,
    marginTop: 25,
    marginLeft: 12,
    width: "98%",
    display: "flex",
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
  },
  walletIdButtonText: {
    display: "flex",
    alignItems: "center",
    color: "#ffffff",
    fontFamily: "Nunito_300Light",
    fontSize: 18,
  },
  overlay: {
    backgroundColor: "#000000aa",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeCard;
