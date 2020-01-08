import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

import api from "../services/api";

import Button from "../components/Button";

import logo from "../assets/logo.png";

export default function Main({ navigation }) {
  const [telefone, setTelefone] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit() {
    const response = await api.post("/portabilidade/back/telefone", {
      telefone
    });

    const { error } = response.data;
    console.log(response.data);

    if (error) {
      setError(error);
      return;
    }

    const { codcliente, numero, sip_username } = response.data;

    await AsyncStorage.setItem("codigo", `${codcliente}`);
    await AsyncStorage.setItem("numero", `${numero}`);
    await AsyncStorage.setItem("telefone", sip_username);

    navigation.navigate("Sheduler");
  }

  return (
    <View style={styles.container}>
      <Image source={logo} />
      <Button />
      <Text style={styles.label}>Portab Manager</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Nº do telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="2128280000"
          placeholderTextColor="#999"
          keyboardType="number-pad"
          value={telefone}
          onChangeText={setTelefone}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginTop: 10
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
    color: "#153486"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#444",
    marginBottom: 20,
    borderRadius: 2
  },
  button: {
    height: 42,
    backgroundColor: "#5a82f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  },
  error: {
    fontWeight: "bold",
    marginTop: 10,
    color: "#153486",
    backgroundColor: "#fec3c3"
  }
});
