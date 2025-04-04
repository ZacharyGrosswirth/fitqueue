import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

import headerLogo from "../assets/header.png";

const Header = ({ gym, text }) => {
  // Use the provided logo, or a default placeholder image if none is provided.
  const defaultLogo = headerLogo;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Image source={headerLogo} style={styles.logo} />
      </View>

      <View style={styles.gymBar}>
        <Text style={styles.gymText}>Selected Gym: {gym}</Text>
      </View>

      <View style={styles.textBox}>
        <Text style={styles.headerText}>{text}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    width: "100%",
    backgroundColor: "#36BCC0",
  },
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "#36BCC0",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  logo: {
    width: 225,
    resizeMode: "contain",
    marginRight: 12,
  },
  gymBar: {
    width: "100%",
    backgroundColor: "#737373",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  gymText: {
    fontSize: 16,
    color: "#fff",
  },
  textBox: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Header;
