import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Actions({ action, actionText }) {
  return (
    <View style={styles.actionConteiner}>
      <TouchableOpacity style={styles.button} onPress={action}>
        <Text style={styles.buttonText}>{actionText}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  actionConteiner: {
    alignSelf: "stretch",
    justifyContent: "center",
    marginHorizontal: 30,
    marginTop: 20

  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    height: 20,
    fontWeight: "bold",
    backgroundColor: "#5a82f0",
    height: 42
  },
  buttonText: {
    color: "#fcfffd",
    fontWeight: "bold",
    fontSize: 16
  }
});
