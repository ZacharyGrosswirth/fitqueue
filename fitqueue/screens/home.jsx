import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Header from "../components/header.jsx";
import HomeItem from "../components/home_config.jsx";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header gym="Southwest Recreation Center" text="Today's Workout"/>
      <ScrollView>
        <HomeItem
          name="Leg Press"
          waitTime="20 minutes"
        />
        <HomeItem
          name="Squat"
          waitTime="20 minutes"
        />
        <HomeItem
          name="Leg Extension"
          waitTime="20 minutes"
        />
        <HomeItem
          name="Leg Curl"
          waitTime="20 minutes"
        />
        <HomeItem
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
