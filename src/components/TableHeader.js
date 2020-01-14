import React from "react";
import { View, StyleSheet, Text } from "react-native";

// import { Container } from './styles';

export default function components() {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.tableHeader}>
        <View style={styles.headerCell}>
          <Text>Codigo</Text>
        </View>
        <View style={styles.headerCell}>
          <Text>Telefone</Text>
        </View>
        <View style={styles.headerCell}>
          <Text>Serviço</Text>
        </View>
        <View style={styles.headerCell}>
          <Text>Agenda</Text>
        </View>
        <View style={styles.headerCell}>
          <Text>Gerenciar</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tableContainer: {
    marginTop: 10,
    marginHorizontal: 10
  },
  tableHeader: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "#ddd",
    height: 30
  },
  headerCell: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  }
});
