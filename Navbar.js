import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts, Nunito_300Light } from "@expo-google-fonts/nunito";

const Navbar = () => {
  let [fontsLoaded] = useFonts({
    Nunito_300Light,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.navContainer}>
        <View style={styles.buttonHolder}>
          <View style={styles.buttonGroup}>
            <FontAwesome5 name='search' size={24} color='white' />
            <Text style={styles.buttonText}>Search</Text>
          </View>
          <View style={styles.buttonGroup}>
            <AntDesign name='staro' size={24} color='white' />
            <Text style={styles.buttonText}>My Rewards</Text>
          </View>
          <View style={styles.buttonGroup}>
            <Feather name='settings' size={24} color='white' />
            <Text style={styles.buttonText}>Settings</Text>
          </View>
          <View style={styles.buttonGroup}>
            <MaterialCommunityIcons
              name='alien-outline'
              size={24}
              color='white'
            />
            <Text style={styles.buttonText}>Account</Text>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  navContainer: {
    zIndex: 100,
    height: 71,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    width: "100%",
    backgroundColor: "#13547A",
    position: "absolute",
    bottom: 0,
  },
  buttonHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    marginTop: 10,
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
});
export default Navbar;
