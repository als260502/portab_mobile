import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

import api from '../services/api'

import Header from '../components/Header'
import Actions from '../components/Actions'

export default function Mail({ navigation }) {
  const [telefone, setTelefone] = useState('')
  const [codigo, setCodigo] = useState('')
  const [alerta, setAlerta] = useState("");
  const [id, setId] = useState('')



  useEffect(() => {
    console.log(navigation.getParam("id"))
    async function getFoneData() {
      const response = await api.get(`/portabilidade/back/dashboard/find/${navigation.getParam("id")}`);

      const { msg, state } = response.data
      if (state === 0) {
        setAlerta(msg)
        return
      }
      const { id, codigo, telefone } = response.data
      setId(id)
      setCodigo(codigo)
      setTelefone(telefone)
    }
    getFoneData();
  });


  async function handleMail() {
    setAlerta("");
    const mail = await api.post(`/portabilidade/back/dashboard/mail/${id}`, {
      id
    })
    const { msg } = mail.data
    navigation.navigate("Dashboard")
  }
  const handleSheduler = () => navigation.navigate("Main")
  const handleDashboard = () => navigation.navigate("Dashboard")
  return (

    <ScrollView style={styles.container}>
      <Header
        handleSheduler={handleSheduler}
        handleDashboard={handleDashboard}
      />

      <View style={styles.viewForm}>
        <Text style={styles.formLabel}>Codigo do cliente</Text>
        <TextInput
          value={String(codigo)}
          style={styles.formInput}
          editable={false}
        />

        <Text style={styles.formLabel}>Numero do telefone</Text>
        <TextInput
          style={styles.formInput}
          editable={false}
          value={String(telefone)}
        />
      </View>
      <Actions action={handleMail} actionText="Enviar Email" />

    </ScrollView>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewForm: {
    marginHorizontal: 30
  },
  formLabel: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  formInput: {
    borderColor: '#000',
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: "#79b0a2"
  },
})

