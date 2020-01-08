import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({ navigation }) {
  async function handleSheduler() {
    navigation.navigate("Main");
  }
  async function handleDashboard() {
    navigation.navigate("Dashboard");
  }

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handleSheduler}>
        <Text style={styles.buttonText}>Agendar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleDashboard}>
        <Text style={styles.buttonText}>Listar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  }
});
