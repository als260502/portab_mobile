import React, { useState } from "react";

import { SafeAreaView, View, StyleSheet, Text } from "react-native";

// import { Container } from './styles';

export default function DataSource({ list }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.tableBody}>
        <View style={styles.cellRow}>
          {list.result.map(lista => {
            <View style={styles.cellBody}>
              <Text>{lista.cod}</Text>
            </View>;
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10
  },
  tableBody: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    height: 30,
    marginTop: 2
  },
  cellRow: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#000",
    borderBottomWidth: 1
  },
  cellBody: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  }
});
