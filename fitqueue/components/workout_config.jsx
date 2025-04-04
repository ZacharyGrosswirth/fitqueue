import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const WorkoutItem = ({
  title = "Legs",
  exercises = [
    { name: "Leg Press", sets: 4, reps: 10, weight: 360 },
    { name: "Squat", sets: 4, reps: 10, weight: 225 },
    { name: "Leg Extension", sets: 3, reps: 12, weight: 150 },
    { name: "Leg Curl", sets: 3, reps: 12, weight: 110 },
    { name: "Calf Raises", sets: 3, reps: 15, weight: 90 },
  ],
}) => {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={handleToggle}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons
          name={collapsed ? "chevron-down" : "chevron-up"}
          size={20}
          color="#000"
        />
      </TouchableOpacity>

      {!collapsed && (
        <View style={styles.exerciseList}>
          {exercises.map((exercise, index) => (
            <View key={index} style={styles.exerciseRow}>
              <Text style={styles.exerciseName}>
                {index + 1}. {exercise.name}
              </Text>
              <Text style={styles.setRepWeight}>
                {exercise.sets} x {exercise.reps} - {exercise.weight} lbs
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  exerciseList: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  exerciseRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  exerciseName: {
    fontSize: 14,
    color: "#000",
    marginRight: 8,
  },
  setRepWeight: {
    fontSize: 14,
    color: "#000",
  },
});

export default WorkoutItem;
