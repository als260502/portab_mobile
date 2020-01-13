import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import Header from "../components/Header";
import DataSource from "../components/DataSource";
import TableHeader from "../components/TableHeader";
import Loading from "../components/Loading";

import api from "../services/api";

export default function Dashboard({ navigation }) {
  const [fones, setFones] = useState([]);
  const [page, setPage] = useState([]);
  const [itensPerPage] = useState(10);
  const [loadingIcon, setLoagingIcon] = useState(false);

  const handleSheduler = () => navigation.navigate("Main");

  useEffect(() => {
    async function load() {
      setLoagingIcon(true);
      const response = await api.get(`/portabilidade/back/sheduler/${page}`, {
        headers: {
          itensPerPage,
          page
        }
      });

      setFones(response.data.result);
    }

    load();
    console.log(fones);
    setLoagingIcon(false);
  }, []);

  return (
    <View style={styles.dashboardContainer}>
      <Header handleSheduler={handleSheduler} />
      <TableHeader />
      <DataSource cod="12315" />;
      <Loading isIconAnimating={loadingIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    marginTop: 20
  }
});
