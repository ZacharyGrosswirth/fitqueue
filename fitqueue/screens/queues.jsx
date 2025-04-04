import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/header.jsx";
import WorkoutQueue from "../components/queue_config.jsx";
import { auth, db } from "../firebase/firebaseConfig.js";
import { doc, onSnapshot } from "firebase/firestore";
import { UserContext } from "../firebase/grabData.js";

const Queues = () => {
  const [queues, setQueues] = useState([]);
  const { userName, email, gender, gym, birthday } = useContext(UserContext);

  useEffect(() => {
    if (!gym) {
      console.log("No gym specified.");
      return;
    }
    const queueDocRef = doc(db, "Queues", gym);
    const unsubscribe = onSnapshot(
      queueDocRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          const userQueues = [];
          for (const exercise in data) {
            if (
              Array.isArray(data[exercise]) &&
              data[exercise].includes(userName)
            ) {
              const waitTime = `${data[exercise].length * 5} Minutes`;
              userQueues.push({
                title: exercise,
                queue: data[exercise],
                waitTime,
              });
            }
          }
          setQueues(userQueues);
        } else {
          console.log("No such document in Queues.");
          setQueues([]);
        }
      },
      (error) => {
        console.error("Error listening for queues:", error);
      }
    );
    return () => unsubscribe();
  }, [gym]);

  return (
    <View style={styles.container}>
      <Header gym={gym} text="Joined Queues" />
      {queues.length > 0 ? (
        queues.map((q, index) => (
          <WorkoutQueue
            key={index}
            title={q.title}
            waitTime={q.waitTime}
            queue={q.queue}
          />
        ))
      ) : (
        <Text style={styles.noQueueText}>No queues joined.</Text>
      )}
    </View>
  );
};

export default Queues;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  noQueueText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});
