import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/header.jsx";
import { auth, db } from "../firebase/firebaseConfig.js";
import { doc, updateDoc } from "firebase/firestore";
import { initUserInfo } from "../firebase/grabData.js";
import { userName, email, gender, gym, birthday } from "../firebase/grabData.js";

const Gym = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const gymOptions = [
    "Southwest Rec",
    "Student Rec",
    "Crunch",
  ];

  const handleSelectGym = async (selectedGym) => {
    setLoading(true);
    try {
      const userRef = doc(db, "Users", auth.currentUser.uid);
      await updateDoc(userRef, { gym: selectedGym });
    } catch (error) {
      console.error("Error updating gym: ", error);
    } finally {
      setLoading(false);
      setDropdownVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header gym={gym} text="Selected Gym" />
      <View style={styles.contentContainer}>
        <Text style={styles.sectionHeader}>Gym Name</Text>
        <Text style={styles.sectionText}>Southwest Recreation Center</Text>
        <Text style={styles.sectionHeader}>Address</Text>
        <Text style={styles.sectionText}>
          3150 Hull Rd, Gainesville, FL 32611
        </Text>
        <Text style={styles.sectionHeader}>Hours</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 295,
            marginLeft: 10,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.columnText}>Monday - Friday</Text>
            <Text style={styles.columnText}>Saturday-Sunday</Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.columnText}>5:30 AM - 12 AM</Text>
            <Text style={styles.columnText}>8 AM - 9 PM</Text>
          </View>
        </View>
        <Text style={styles.sectionHeader}>Peak Hours</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 230,
            marginLeft: 10,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.columnText}>Monday</Text>
            <Text style={styles.columnText}>Tuesday</Text>
            <Text style={styles.columnText}>Wednesday</Text>
            <Text style={styles.columnText}>Thursday</Text>
            <Text style={styles.columnText}>Friday</Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.columnText}>5 PM - 8 PM</Text>
            <Text style={styles.columnText}>5 PM - 7 PM</Text>
            <Text style={styles.columnText}>4 PM - 8 PM</Text>
            <Text style={styles.columnText}>7 PM - 8 PM</Text>
            <Text style={styles.columnText}>3 PM - 6 PM</Text>
          </View>
        </View>
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginLeft: 30,
            marginRight: 30,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <TouchableOpacity style={[styles.infoButton, { width: 150 }]}>
              <Text style={styles.infoText}>Staff</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.infoButton, { width: 150 }]}>
              <Text style={styles.infoText}>Classes</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "column" }}>
            <TouchableOpacity style={[styles.infoButton, { width: 150 }]}>
              <Text style={styles.infoText}>Trainers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.infoButton, { width: 150 }]}>
              <Text style={styles.infoText}>Other</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: -30,
        }}
      >
        <TouchableOpacity
          style={[styles.editButton, { width: "70%" }]}
          onPress={() => setDropdownVisible(true)}
          disabled={loading}
        >
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      {dropdownVisible && (
        <View style={styles.dropdown}>
          {gymOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownItem}
              onPress={() => handleSelectGym(option)}
            >
              <Text style={styles.dropdownItemText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Gym;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  contentContainer: {
    padding: 20,
    marginTop: -15,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 11,
  },
  sectionText: {
    fontSize: 16,
    marginTop: 7,
    marginLeft: 10,
  },
  columnText: {
    fontSize: 16,
  },
  infoButton: {
    backgroundColor: "#737373",
    width: 120,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    color: "#FFF",
    alignSelf: "center",
  },
  editButton: {
    backgroundColor: "#36BCC0",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  editText: {
    fontSize: 17,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#FFF",
  },
  dropdown: {
    position: "absolute",
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  dropdownItem: {
    paddingVertical: 10,
  },
  dropdownItemText: {
    fontSize: 16,
  },
});
