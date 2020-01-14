import React, { useState, useEffect } from "react";
import { View, Button, Platform, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function({ setDate }) {
  const [show, setShow] = useState(false);
  const [state, setState] = useState(new Date());
  const [mode, setMode] = useState("date");

  function isShow() {
    setShow(true);
  }

  const datepicker = () => {
    setMode("date");
    isShow();
  };

  function timepicker() {
    setMode("time");
    isShow();
  }
  useEffect(() => {
    setShow(false);
  }, []);
  return (
    <View>
      <View style={styles.button}>
        <Button onPress={datepicker} title="Escolha a data!" />
      </View>
      <View style={styles.button}>
        <Button onPress={timepicker} title="Escolha a hora!" />
      </View>
      {show && (
        <DateTimePicker
          value={state}
          mode={mode}
          is24Hour={true}
          onChange={setDate}
          style={styles.dt}
          display="default"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dt: {
    marginBottom: 20
  },
  button: {
    marginTop: 20
  }
});
