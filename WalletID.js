import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import logo from "./assets/qr.png";

const WalletID = () => {
  return (
    <View style={styles.holder}>
      <Text style={styles.heading}>Ishika Wallet ID</Text>
      <View style={styles.qr}>
        <Image source={logo} />
        <Text style={styles.id}>ishika123@cryft</Text>
        <View style={styles.actionButtons}>
          <Text style={styles.copy}>Copy</Text>
          <Text style={styles.share}>Share</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  holder: {
    backgroundColor: "#ffffff",
    margin: "auto",
    height: 255,
    width: 270,
    padding: 15,
    borderRadius: 20,
  },
  heading: {
    color: "#226484",
    fontSize: 18,
    fontWeight: "600",
  },
  qr: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  id: {
    marginTop: -10,
    fontSize: 18,
    fontWeight: "bold",
  },
  actionButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    fontSize: 14,
    margin: 10,
  },
  copy: {
    color: "#195A7E",
  },
  share: {
    color: "#76C4C0",
  },
});

export default WalletID;
