import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from "../components/header.jsx";
import WorkoutQueue from "../components/queue_config.jsx";

const queue0 = ["Alice", "Bob", "Jack"]
const queue1 = ["Bob", "Zach"]

const Queues = () => {
  return (
    <View style={styles.container}>
      <Header gym="Southwest Recreation Center" text="Joined Queues"/>
      <WorkoutQueue title="Leg Press" waitTime="20 Minutes" queue={queue0}></WorkoutQueue>
      <WorkoutQueue title="Squat" waitTime="10 Minutes" queue={queue1}></WorkoutQueue>
    </View>
  );
};

export default Queues;

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