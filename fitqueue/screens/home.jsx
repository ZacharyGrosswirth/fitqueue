import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Header from "../components/header.jsx";
import WorkoutItem from "../components/workout_config.jsx";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header gym="Southwest Recreation Center" text="Today's Workout"/>
      <ScrollView>
        <WorkoutItem
          name="Leg Press"
          waitTime="20 minutes"
        />
        <WorkoutItem
          name="Squat"
          waitTime="20 minutes"
        />
        <WorkoutItem
          name="Leg Extension"
          waitTime="20 minutes"
        />
        <WorkoutItem
          name="Leg Curl"
          waitTime="20 minutes"
        />
        <WorkoutItem
          name="Calf Raises"
          waitTime="20 minutes"
        />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
