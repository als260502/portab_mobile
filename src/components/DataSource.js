import React, { useState } from 'react';

import { View, StyleSheet, Text } from 'react-native';

// import { Container } from './styles';

const DataSource = ({ fones }) => {

  return (
    <View style={styles.tableContainer}>
      <View style={styles.tableHeader}>
        <View style={styles.headerCell}><Text>Codigo</Text></View>
        <View style={styles.headerCell}><Text>Telefone</Text></View>
        <View style={styles.headerCell}><Text>Serviço</Text></View>
        <View style={styles.headerCell}><Text>Agenda</Text></View>
        <View style={styles.headerCell}><Text>Gerenciar</Text></View>
      </View>

      <View style={styles.tableBody}>
        {fones.map(fone => {
          <View key={fone.id} style={styles.bodyCell} ><Text>{fone.codigo}</Text></View>
        })}

      </View>
    </View >

  )
}
export default DataSource;

const styles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10

  },
  tableHeader: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    height: 30
  },
  headerCell: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableBody: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 25,
    marginTop: 2
  },
  bodyCell: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },

})
