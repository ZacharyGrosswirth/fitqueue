import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import Header from "../components/header.jsx";
import profilePicture from "../assets/profile_pic.png";

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState)

  return (
    <View style={styles.container}>
      <Header gym="Southwest Recreation Center" text="Settings" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.sectionHeader}>Name</Text>
        <Text style={styles.sectionText}>Brianna Cacciatore</Text>
        <Text style={styles.sectionHeader}>Email</Text>
        <Text style={styles.sectionText}>bricacciatore@ufl.edu</Text>
        <Text style={styles.sectionHeader}>Birthday</Text>
        <Text style={styles.sectionText}>2/2/2002 (23 years old)</Text>
        <Text style={styles.sectionHeader}>Gender</Text>
        <Text style={styles.sectionText}>Female</Text>
        <Text style={styles.sectionHeader}>Home Gym</Text>
        <Text style={styles.sectionText}>Southwest Recreation Center</Text>
        <Text style={styles.sectionHeader}>Profile Picture</Text>
        <Image source={profilePicture} style={styles.profileImage}></Image>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleLabel}>Dark Mode</Text>
          <Switch
            onValueChange={toggleSwitch}
            value={isDarkMode}
            trackColor={{false: "#767577", true: "#3CCFCF"}}
            thumbColor={isDarkMode ? "#ffffff" : "#3CCFCF"}
          />
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    padding: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
  },
  sectionText: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  profileImage: {
    width: 173,
    height: 173,
    marginLeft: 15,
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  toggleLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  editButton: {
    backgroundColor: "#3CCFCF",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  editButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
