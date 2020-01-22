import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import api from '../services/api'
import formatDateTime from '../utils/FormatDateTime'

import Header from '../components/Header'
import DatePicker from '../components/DateTimePicker'
import Actions from '../components/Actions'


export default function Edit({ navigation }) {
  const [dataHora, setDataHora] = useState('');
  const [hora, setHora] = useState('');
  const [telefone, setTelefone] = useState('')
  const [codigo, setCodigo] = useState('')
  const [numero, setNumero] = useState('')
  const [alerta, setAlerta] = useState("");
  const [id, setId] = useState("9")
  //const id = navigation.getParam("id")


  useEffect(() => {
    async function getFoneData() {
      const response = await api.get(`/portabilidade/back/dashboard/find/${'9'}`);

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
      setDataHora(data)
      setHora(hora)
    }
    getFoneData();
  });



  const setDate = (event, date) => {
    const resultado = new Date(date)
    const mData = `${resultado.getFullYear()}-${resultado.getMonth() + 1}-${resultado.getDate()}`;
    const mHora = `${resultado.getHours()}:${resultado.getMinutes()}`

    const d = new Date()
    const dataAtual = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    if (mData != dataAtual) {
      setDataHora(`${mData}`);
    }
    setHora(mHora)

  }
  function handleEdit() {

  }
  const handleSheduler = () => navigation.navigate("Main")
  const handleDashboard = () => navigation.navigate("Dashboard")
  return (

    <View style={styles.container}>
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

        <DatePicker setDate={setDate} />
      </View>
      {(dataHora) ? <Text style={styles.dataHoraLabel} >{`${dataHora} ${hora}`}</Text> : <></>}

      <Actions action={handleEdit} actionText="Editar" />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    justifyContent: "center",
    marginTop: 20

  },
  viewForm: {

  },
  formLabel: {
    fontWeight: 'bold',
    fontSize: 16
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
  }




})

