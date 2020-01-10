import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  AsyncStorage
} from "react-native";

import DatePicker from "../components/DateTimePicker";
import Header from "../components/Header";
import Actions from "../components/Actions";
import Loading from "../components/Loading";

import api from "../services/api";


export default function Sheduler({ navigation }) {
  const [dataHora, setDataHora] = useState('');
  const [hora, setHora] = useState('');
  const [codigo, setCodigo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [numero, setNumero] = useState("");
  const [loadingIcon, setLoagingIcon] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("codigo").then(cod => {
      setCodigo(cod);
    });

    AsyncStorage.getItem("telefone").then(tel => {
      setTelefone(tel);
    });
    AsyncStorage.getItem("numero").then(num => {
      setNumero(num);
    });
  });

  const setDate = (event, date) => {
    const resultado = new Date(date)
    const mData = `${resultado.getFullYear()}-${resultado.getMonth() + 1}-${resultado.getDate()}`;
    const mHora = `${resultado.getHours()}:${resultado.getMinutes()}`

    const d = new Date()
    const dataAtual = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    console.log(mData, dataAtual)
    if (mData != dataAtual) {
      setDataHora(`${mData}`);
    }
    setHora(mHora)

  }

  const handleSheduler = () => navigation.navigate("Main");
  const handleDashboard = () => navigation.navigate("Dashboard");

  const handleAgendar = async () => {
    const data = dataHora;
    const mHora = hora;
    console.log(codigo, telefone, numero, data, mHora);
    setLoagingIcon(true);
    const result = await api.post("/portabilidade/back/sheduler", {
      codigo,
      telefone,
      numero,
      data,
      hora
    });

    const { msg } = result.data;
    if (msg) {
      setLoagingIcon(false);
      alert(msg);
      navigation.navigate("Main");
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Header
        handleSheduler={handleSheduler}
        handleDashboard={handleDashboard}
      />
      <View style={styles.form}>
        <Text style={styles.label}>Cofigo do cliente</Text>
        <TextInput style={styles.input} value={codigo} editable={false} />

        <Text style={styles.label}>Nº Telefone</Text>
        <TextInput style={styles.input} value={telefone} editable={false} />

        <Text style={styles.label}>Nº Serviço</Text>
        <TextInput style={styles.input} value={numero} editable={false} />

        <DatePicker setDate={setDate} />
      </View>
      {(dataHora) ? <Text style={styles.label} >{`${dataHora} ${hora}:00`}</Text> : <></>}
      <Actions action={handleAgendar} actionText="Agendar" />
      <Loading isIconAnimating={loadingIcon} />
    </KeyboardAvoidingView>
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
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#444",
    borderRadius: 2,
    marginBottom: 5
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
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
    color: "#153486"
  },
  inputData: {
    width: "100%",
    marginTop: 10,
    height: 22,
    marginBottom: 20
  }
});
