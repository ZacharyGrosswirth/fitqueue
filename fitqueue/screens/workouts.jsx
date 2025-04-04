import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { userName, email, gender, gym, birthday } from "../firebase/grabData.js";


import Header from "../components/header.jsx";
import WorkoutItem from "../components/workout_config.jsx";

const workout0 = [
  { name: "Bench Press", sets: 4, reps: 10, weight: 225 },
  { name: "Incline Dumbbell Press", sets: 4, reps: 10, weight: 75 },
  { name: "Chest Fly", sets: 3, reps: 12, weight: 50 },
  { name: "Tricep Pushdown", sets: 3, reps: 12, weight: 70 },
  { name: "Shoulder Press", sets: 3, reps: 15, weight: 60 },
  { name: "Lateral Raise", sets: 3, reps: 15, weight: 25 },
]

const workout1 = [
  { name: "Deadlift", sets: 4, reps: 10, weight: 405 },
  { name: "Pull Up", sets: 4, reps: 10, weight: 0 },
  { name: "Bent Over Row", sets: 3, reps: 12, weight: 185 },
  { name: "Lat Pulldown", sets: 3, reps: 12, weight: 160 },
  { name: "Bicep Curl", sets: 3, reps: 15, weight: 40 },
  { name: "Face Pull", sets: 3, reps: 15, weight: 40 },
]

const workout2 = [
  { name: "Leg Press", sets: 4, reps: 10, weight: 360 },
  { name: "Squat", sets: 4, reps: 10, weight: 225 },
  { name: "Leg Extension", sets: 3, reps: 12, weight: 150 },
  { name: "Leg Curl", sets: 3, reps: 12, weight: 110 },
  { name: "Calf Raises", sets: 3, reps: 15, weight: 90 },
]

const Workouts = () => {
  return (
    <View style={styles.container}>
      <Header gym={gym} text="Your Workouts" />
      <WorkoutItem title="Push" exercises={workout0}></WorkoutItem>
      <WorkoutItem title="Pull" exercises={workout1}></WorkoutItem>
      <WorkoutItem title="Legs" exercises={workout2}></WorkoutItem>
    </View>
  );
};

export default Workouts;

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