import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

import api from '../services/api'
import formatDateTime from '../utils/FormatDateTime'

import Header from '../components/Header'
import Actions from '../components/Actions'
import DatePicker from 'react-native-modern-datepicker'


export default function Edit({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const [telefone, setTelefone] = useState('')
  const [codigo, setCodigo] = useState('')
  const [numero, setNumero] = useState('')
  const [alerta, setAlerta] = useState("");
  const [id, setId] = useState('')



  useEffect(() => {
    async function getFoneData() {
      const response = await api.get(`/portabilidade/back/dashboard/find/${navigation.getParam("id")}`);

      const { msg, state } = response.data

      if (state === 0) {
        setAlerta(msg)
        return
      }
      const { id, codigo, numero, telefone, data, hora } = response.data
      setId(id)
      setCodigo(codigo)
      setNumero(numero)
      setTelefone(telefone)
    }
    getFoneData();
  });


  async function handleEdit() {
    console.log(selectedDate)
    setAlerta("");

    const [data, hora] = selectedDate.split(" ")

    const response = await api.put("portabilidade/back/dashboard/update", { id, data, hora });

    const { msg, state } = response.data;

    if (state === 0) {
      setAlerta(msg);
      return;
    }

    setAlerta("Data de agendamento alterada com sucesso")
    navigation.navigate("Dashboard");

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

        <Text style={styles.formLabel}>Numero do serviço</Text>
        <TextInput
          value={String(numero)}
          style={styles.formInput}
          editable={false}
        />
        <View style={styles.calendar}>
          <DatePicker
            onSelectedChange={date => setSelectedDate(date)}
          />
        </View>

        <Actions action={handleEdit} actionText="Editar" />
      </View>

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
  dataHoraLabel: {
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 16,
    color: "#053890"
  },
})

