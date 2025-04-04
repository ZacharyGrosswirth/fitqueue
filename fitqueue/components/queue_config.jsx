import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { UserContext } from "../firebase/grabData.js";

const WorkoutQueue = ({
  title = "Leg Press",
  waitTime = "20 minutes",
  queue = ["Bob", "Zach", "Misha", "You", "Brianna", "Katie"],
}) => {
  const [collapsed, setCollapsed] = useState(true);
  const { userName, email, gender, gym, birthday } = useContext(UserContext);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={handleToggle}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rightSection}>
          <Text style={styles.waitTime}>{waitTime}</Text>
          <Ionicons
            name={collapsed ? "chevron-down" : "chevron-up"}
            size={20}
            color="#000"
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>

      {!collapsed && (
        <View style={styles.queueList}>
          {queue.map((person, index) => (
            <Text key={index} style={styles.queueItem}>
              {index + 1}. {person}
            </Text>
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
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  waitTime: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginRight: 4,
  },
  queueList: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  queueItem: {
    fontSize: 14,
    color: "#000",
    marginVertical: 2,
  },
});

export default WorkoutQueue;
