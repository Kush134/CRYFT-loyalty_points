import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_300Light,
} from "@expo-google-fonts/nunito";
import WalletID from "./WalletID";
import Send from "./Send";

const ActionButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_300Light,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.buttonHolder}>
        <Pressable
          onPress={() => {
            setModalContent("send");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.buttonGroup}>
            <Feather name='arrow-up-right' size={24} color='white' />
            <Text style={styles.buttonText}>Send</Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => {
            setModalContent("receive");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.buttonGroup}>
            <Feather name='arrow-down-left' size={24} color='white' />
            <Text style={styles.buttonText}>Receive</Text>
          </View>
        </Pressable>

        <View style={styles.buttonGroup}>
          <AntDesign name='staro' size={24} color='white' />
          <Text style={styles.buttonText}>History</Text>
        </View>

        <View style={styles.buttonGroup}>
          <FontAwesome5 name='exchange-alt' size={24} color='white' />
          <Text style={styles.buttonText}>Exchange</Text>
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
              {modalContent == "send" && <Send />}
              {modalContent == "receive" && <WalletID />}
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  buttonHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    marginLeft: 36,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "Nunito_300Light",
  },
  overlay: {
    backgroundColor: "#000000aa",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ActionButton;
