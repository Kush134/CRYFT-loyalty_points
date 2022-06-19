import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

const Send = () => {
  const [address, onChangeAddress] = useState(null);
  const [amount, onChangeAmount] = useState(null);

  const [transactionDetails, setTransactionDetails] = useState("");

  useEffect(() => {
    if (address && amount) {
      setTransactionDetails(`Sending ${amount} CHIPS to ${address}`);
    } else {
      setTransactionDetails("");
    }
  });
  return (
    <View style={styles.holder}>
      <View style={styles.inputGroup}>
        <Text style={styles.heading}>Available balance</Text>
        <Text style={styles.balance}>2 CHIPS</Text>
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.heading}>Send to</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          placeholder='Address'
          value={address}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.heading}>Amount CHIPS</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeAmount}
          value={amount}
          placeholder='Amount'
          keyboardType='numeric'
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.heading}>Transaction details</Text>
        <Text>{transactionDetails}</Text>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Send</Text>
      </Pressable>
    </View>
  );
};

export default Send;

const styles = StyleSheet.create({
  holder: {
    backgroundColor: "#ffffff",
    margin: "auto",
    width: 270,
    padding: 15,
    borderRadius: 20,
  },
  heading: {
    color: "#226484",
    fontSize: 14,
    fontWeight: "600",
  },
  balance: {
    fontWeight: "bold",
  },
  inputGroup: {
    marginBottom: 15,
  },
  input: {
    height: 34,
    marginTop: 8,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    width: 235,
  },
  button: {
    textTransform: "capitalize",
    backgroundColor: "#000",
    width: 123,
    height: 37,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
  },
});
