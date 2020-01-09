import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

import logo from "../assets/logo.png";

export default function Header({ handleSheduler, handleDashboard }) {
  return (
    <View style={styles.headerContainer}>
      <Image source={logo} />
      <Text style={styles.label}>Portab Manager</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSheduler}>
          <Text style={styles.buttonText}>Agendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDashboard}>
          <Text style={styles.buttonText}>Listar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    marginLeft: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    width: 80,
    height: 20,
    fontWeight: "bold",
    backgroundColor: "#5a82f0"
  },
  buttonText: {
    color: "#fcfffd",
    fontWeight: "bold",
    fontSize: 14
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
    color: "#153486"
  }
});
