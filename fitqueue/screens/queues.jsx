import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Queues = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Queues</Text>
    </View>
  );
};

export default Queues;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});