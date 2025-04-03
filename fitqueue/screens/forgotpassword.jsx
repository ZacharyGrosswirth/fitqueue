import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ForgotPassword</Text>
    </View>
  );
};

export default ForgotPassword;

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