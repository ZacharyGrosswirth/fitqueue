import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from "../components/header.jsx";

const Gym = () => {
  return (
    <View style={styles.container}>
      <Header gym="Southwest Recreation Center" text="Selected Gym" />
    </View>
  );
};

export default Gym;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});