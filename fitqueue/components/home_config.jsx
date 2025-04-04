import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { auth, db } from "../firebase/firebaseConfig.js";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import "firebase/firestore";
import { userName, email, gender, gym, birthday } from "../firebase/grabData.js";

const HomeItem = ({
  name = "Leg Press",
  waitTime = "20 minutes",
}) => {
  // 0: Join Queue, 1: Queue Joined, 2: Using Equipment
  const [queueState, setQueueState] = useState(0);

  const toggleQueue = async () => {
    console.log(`Current state: ${queueState} for ${name}...`);
    try {
      const queueRef = doc(db, "Queues", gym);
      
      if (queueState === 0) {
        await updateDoc(queueRef, {
          [name]: arrayUnion(userName)
        });
        setQueueState(1);
      } else if (queueState === 1) {
        setQueueState(2);
      } else if (queueState === 2) {
        await updateDoc(queueRef, {
          [name]: arrayRemove(userName)
        });
        setQueueState(0);
      }
    } catch (error) {
      console.error("Error toggling queue: ", error);
    }
  };

  let buttonLabel;
  let buttonStyle;
  let buttonTextStyle;
  if (queueState === 0) {
    buttonLabel = "Join Queue";
    buttonStyle = styles.notJoinedButton;
    buttonTextStyle = styles.notJoinedButtonText;
  } else if (queueState === 1) {
    buttonLabel = "Queue Joined";
    buttonStyle = styles.joinedButton;
    buttonTextStyle = styles.joinedButtonText;
  } else if (queueState === 2) {
    buttonLabel = "Using Equipment";
    buttonStyle = styles.usingEquipmentButton;
    buttonTextStyle = styles.usingEquipmentButtonText;
  }

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.exerciseName}>{name}</Text>
          <TouchableOpacity
            onPress={toggleQueue}
            style={[styles.joinButton, buttonStyle]}
          >
            <Text style={[styles.joinButtonText, buttonTextStyle]}>
              {buttonLabel}
            </Text>
          </TouchableOpacity>
          <Text style={styles.detailText}>Wait: {waitTime}</Text>
          {/* Additional details (e.g., sets+reps+weight) can go here */}
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
    width: "100%",
    minHeight: 100,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1
  },
  leftContainer: {
    flex: 1,
    paddingRight: 10
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "black"
  },
  joinButton: {
    borderRadius: 12,
    paddingVertical: 2,
    paddingHorizontal: 8,
    alignItems: "center",
    marginVertical: 2,
  },
  notJoinedButton: {
    backgroundColor: "lightgrey"
  },
  joinedButton: {
    backgroundColor: "#1abc9c",
  },
  usingEquipmentButton: {
    backgroundColor: "orange"
  },
  joinButtonText: {
    fontSize: 14,
    textAlign: "center"
  },
  notJoinedButtonText: {
    color: "black"
  },
  joinedButtonText: {
    color: "white"
  },
  usingEquipmentButtonText: {
    color: "white"
  },
  detailText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 2
  },
  leftButton: {
    backgroundColor: "lightgrey",
    borderRadius: 6,
    paddingVertical: 6,
    marginVertical: 2,
    alignItems: "center"
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
    width: "90%"
  },
  buttonText: {
    fontSize: 14,
    color: "black",
    textAlign: "center"
  },
  leftHalf: {
    flex: 1,
    justifyContent: "center"
  },
  rightHalf: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default HomeItem;
