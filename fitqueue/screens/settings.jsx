import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../components/header.jsx";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Header gym="Southwest Recreation Center" text="Settings" />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
