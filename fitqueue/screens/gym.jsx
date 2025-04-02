import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Gym = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gym</Text>
    </View>
  );
};

export default Gym;

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