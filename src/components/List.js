import React, { useState } from "react";

import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  FlatList,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import { format, parseISO } from "date-fns";

import imagem from "../assets/edit.png";

export default function List({ list }) {
  const [columns, setColumns] = useState("4");
  return (
    <SafeAreaView>
      <FlatList
        data={list.result}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <View style={styles.item}>
                <Text style={styles.text}>{item.codigo}</Text>
                <Text style={styles.text}>{item.telefone}</Text>
                <Text style={styles.text}>{item.numero}</Text>
                <Text style={styles.text}>
                  {format(
                    parseISO(`${item.data} ${item.hora}`),
                    "dd/MM/yyyy HH:mm"
                  )}
                </Text>
                <TouchableOpacity style={styles.editButton} ><Text style={styles.text}>Edit</Text></TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 5
  },
  item: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: "row",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    flexGrow: 1,
    backgroundColor: "#00bfff",
    height: 40
  },
  text: {
    color: "#333333",
    padding: 2,
    fontSize: 14,
    alignSelf: 'center',
    justifyContent: "center"
  },
  image: {
    height: 30,
    width: 30,
    justifyContent: 'flex-end'
  },
  editButton: {
    fontSize: 14,
    height: 20,
    width: 35,
    backgroundColor: "#5a82f0",
    borderRadius: 5,

  }
});
