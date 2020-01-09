import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../components/Header";

export default function Dashboard({ navigation }) {
  const handleSheduler = () => navigation.navigate("Main");

  return (
    <View style={styles.dashboardContainer}>
      <Header handleSheduler={handleSheduler} />
    </View>
  );
}

const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    marginTop: 20
  }
});
