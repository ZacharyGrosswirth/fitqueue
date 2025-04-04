import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
  Modal,
  TextInput,
  ActivityIndicator,
} from "react-native";
import Header from "../components/header.jsx";
import profilePicture from "../assets/profile_pic.png";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, updateDoc } from "firebase/firestore";
import { UserContext } from "../firebase/grabData.js";

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { userData, setUserData } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [editName, setEditName] = useState("");
  const [editBirthday, setEditBirthday] = useState("");
  const [editGender, setEditGender] = useState("");
  const [updating, setUpdating] = useState(false);

  // When userData changes, set the edit fields
  useEffect(() => {
    if (userData) {
      setEditName(userData.name || "");
      setEditBirthday(userData.birthday || "");
      setEditGender(userData.gender || "");
    }
  }, [userData]);

  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      await AsyncStorage.removeItem("user");
      console.log("User logged out and cache cleared.");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleSaveEdits = async () => {
    setUpdating(true);
    try {
      const userRef = doc(db, "Users", auth.currentUser.uid);
      const updatedFields = {
        name: editName,
        birthday: editBirthday,
        gender: editGender,
      };
      await updateDoc(userRef, updatedFields);
      setUserData((prevData) => ({ ...prevData, ...updatedFields }));
      setModalVisible(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header gym={userData?.gym} text="Settings" />
      <View style={styles.contentContainer}>
        <Text style={styles.sectionHeader}>Name</Text>
        <Text style={styles.sectionText}>{userData?.name}</Text>
        <Text style={styles.sectionHeader}>Email</Text>
        <Text style={styles.sectionText}>{userData?.email}</Text>
        <Text style={styles.sectionHeader}>Birthday</Text>
        <Text style={styles.sectionText}>{userData?.birthday}</Text>
        <Text style={styles.sectionHeader}>Gender</Text>
        <Text style={styles.sectionText}>{userData?.gender}</Text>
        <Text style={styles.sectionHeader}>Home Gym</Text>
        <Text style={styles.sectionText}>{userData?.gym}</Text>

        <View style={styles.toggleContainer}>
          <Text style={styles.toggleLabel}>Dark Mode</Text>
          <Switch
            onValueChange={toggleSwitch}
            value={isDarkMode}
            trackColor={{ false: "#767577", true: "#36BCC0" }}
            thumbColor={isDarkMode ? "#FFF" : "#36BCC0"}
          />
        </View>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.editButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeader}>Edit Profile</Text>

            <Text style={styles.modalLabel}>Name</Text>
            <TextInput
              style={styles.modalInput}
              value={editName}
              onChangeText={setEditName}
              placeholder="Enter your name"
            />

            <Text style={styles.modalLabel}>Birthday</Text>
            <TextInput
              style={styles.modalInput}
              value={editBirthday}
              onChangeText={setEditBirthday}
              placeholder="Enter your birthday"
            />

            <Text style={styles.modalLabel}>Gender</Text>
            <TextInput
              style={styles.modalInput}
              value={editGender}
              onChangeText={setEditGender}
              placeholder="Enter your gender"
            />

            {updating ? (
              <ActivityIndicator size="large" color="#36BCC0" />
            ) : (
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity
                  style={[styles.modalButton, { backgroundColor: "#36BCC0" }]}
                  onPress={handleSaveEdits}
                >
                  <Text style={styles.modalButtonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, { backgroundColor: "#737373" }]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>
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
  toggleContainer: {
    marginVertical: 20,
  },
  toggleLabel: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  editButton: {
    backgroundColor: "#36BCC0",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 0,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  logoutButton: {
    backgroundColor: "#737373",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  modalLabel: {
    fontSize: 16,
    marginTop: 10,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  modalButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
});
