import React from "react";

import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import formatDateTime from '../utils/FormatDateTime'

export default function List({ mail, del, edit, list }) {

  return (
    <View style={styles.container}>
      {list.map(t => (

        <View
          key={t.id}
          style={(t.enviado == 0) ? styles.tableCollumn : styles.tableCollumnEnviado}
        >
          <View style={styles.cell}>
            <Text style={styles.cellText}>{t.codigo}</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>{t.telefone}</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>{formatDateTime(t.data, t.hora)}</Text>
          </View>
          <View style={styles.cell}>
            <View style={styles.cellButtons}>

              <TouchableOpacity onPress={(id) => edit(t.id)} style={styles.button}>
                <MaterialIcons name="edit" size={20} color={"#5faffa"} />
              </TouchableOpacity>

              <TouchableOpacity onPress={(id) => mail(t.id)} style={styles.button}>
                <MaterialIcons name="mail" size={20} color={"#5faffa"} />
              </TouchableOpacity>

              <TouchableOpacity onPress={(id) => del(t.id)} style={styles.button}>
                <MaterialIcons name="delete" size={20} color={"#5faffa"} />
              </TouchableOpacity>

            </View>
          </View>
        </View>
      ))}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 15,
    justifyContent: "center",
  },
  tableCollumn: {
    width: '100%',
    flexDirection: "row",
    marginTop: 5,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  cell: {
    justifyContent: 'space-evenly',
    alignItems: 'stretch'
  },
  cellText: {
    fontSize: 12,
    padding: 5
  },
  cellButtons: {
    flexDirection: 'row'
  },
  button: {
    padding: 2

  },
  tableCollumnEnviado: {
    width: '100%',
    flexDirection: "row",
    marginTop: 5,
    backgroundColor: "#a3d6bd",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

});
