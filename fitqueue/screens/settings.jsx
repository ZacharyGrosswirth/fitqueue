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
            trackColor={{ false: "#767577", true: "#36BCC0" }}
            thumbColor={isDarkMode ? "#FFF" : "#36BCC0"}
          />
        </View>

        <View style={styles.editContainer}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
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
    marginTop: -15,
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
  profileImage: {
    width: 173,
    height: 173,
    marginLeft: 15,
  },
  toggleContainer: {
    marginVertical: 20,
  },
  toggleLabel: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  editContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: "#36BCC0",
    width: "35%",
    height: "35%",
    justifyContent: "center",
    borderRadius: 10,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center"
  },
});
