import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import Header from "../components/Header";
import List from "../components/List";
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
    setLoagingIcon(true);
    async function load() {
      const response = await api.get(`/portabilidade/back/sheduler/${page}`, {
        headers: {
          itensPerPage,
          page
        }
      });

      setFones(response.data.result);
      setLoagingIcon(false);
    }

    load();
  }, []);

  function handleEdit(id) {
    console.log(id)
    navigation.navigate("Edit", {
      id
    })
  }

  return (
    <View style={styles.dashboardContainer}>
      <Header handleSheduler={handleSheduler} />
      
      <List list={fones} edit={handleEdit} />
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
