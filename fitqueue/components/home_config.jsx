import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeItem = ({
  name = "Leg Press",
  waitTime = "20 minutes"
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.exerciseName}>{name}</Text>
          <View style={styles.queuePill}>
            <Text style={styles.queuePillText}>Queue Joined</Text>
          </View>
          <Text style={styles.detailText}>Wait: {waitTime}</Text>
          {/* add the sets+reps+weight under */}
        </View>

        <View style={styles.leftHalf}>
          <TouchableOpacity style={styles.leftButton}>
            <Text style={styles.buttonText}>Work In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.leftButton, { marginTop: 8 }]}>
            <Text style={styles.buttonText}>Spot</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rightHalf}>
          <TouchableOpacity style={styles.rightButton}>
            <Text style={styles.buttonText}>Enter Sets</Text>
            <Text style={styles.buttonText}>&amp; Reps</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1,
  },
  leftContainer: {
    flex: 1,
    paddingRight: 10,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "black",
  },
  queuePill: {
    backgroundColor: "#1abc9c",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: "flex-start",
    marginBottom: 4,
  },
  queuePillText: {
    color: "#fff",
    fontSize: 12,
  },
  detailText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 2,
  },
  leftButton: {
    backgroundColor: "lightgrey",
    borderRadius: 6,
    paddingVertical: 6,
    marginVertical: 2,
    alignItems: "center",
  },
  rightButton: {
    backgroundColor: "lightgrey",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginVertical: 2,
    height: 68,
    justifyContent: "center",
    textAlign: "center",
    width: "90%",
  },
  buttonText: {
    fontSize: 14,
    color: "black",
    textAlign: 'center',
  },
  leftHalf: {
    flex: 1,
    justifyContent: "center",
  },
  rightHalf: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeItem;
