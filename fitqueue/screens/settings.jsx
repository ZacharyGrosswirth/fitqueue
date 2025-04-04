import React, { useState, useEffect } from "react";
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
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, getDoc } from "firebase/firestore";
// import * as ImagePicker from "expo-image-picker";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { userName, email, gender, gym, birthday } from "../firebase/grabData.js";

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  // const [email, setEmail] = useState("");
  // // const [picture, setPicture] = useState(null);
  // const [name, setName] = useState("");
  // const [birthday, setBirthday] = useState("");
  // const [gender, setGender] = useState("");
  // const [gym, setGym] = useState("");

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

  // const getUserInfo = async () => {
  //   try {
  //     const userDocRef = doc(db, "Users", auth.currentUser.uid);
  //     const userDocSnap = await getDoc(userDocRef);

  //     if (userDocSnap.exists()) {
  //       console.log("User data:", userDocSnap.data());
  //       setEmail(userDocSnap.data().email);
  //       setName(userDocSnap.data().name);
  //       setBirthday(userDocSnap.data().birthday);
  //       setGender(userDocSnap.data().gender);
  //       setGym(userDocSnap.data().gym);
  //       // setPicture(userDocSnap.data().picture);
  //     } else {
  //       console.log("No such document!");
  //       return null;
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user document:", error);
  //   }
  // };

  // const pickImage = async () => {
  //     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //     if (status !== "granted") {
  //       alert("Sorry, we need camera roll permissions to make this work!");
  //       return null;
  //     }
  
  //     let result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       allowsEditing: true,
  //       aspect: [4, 3],
  //       quality: 1,
  //     });
  
  //     if (result.cancelled) {
  //       return null;
  //     }
  
  //     return result.uri;
  //   };
  
  //   const uploadImageAsync = async (uri, userId) => {
  //     const response = await fetch(uri);
  //     const blob = await response.blob();
  
  //     const storage = getStorage();
  //     const storageRef = ref(storage, `userProfilePictures/${userId}`);
  
  //     await uploadBytes(storageRef, blob);
  
  //     const downloadURL = await getDownloadURL(storageRef);
  //     return downloadURL;
  //   };

  // useEffect(() => {
  //   getUserInfo();
  // }, []);

  return (
    <View style={styles.container}>
      <Header gym={gym} text="Settings" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.sectionHeader}>Name</Text>
        <Text style={styles.sectionText}>{userName}</Text>
        <Text style={styles.sectionHeader}>Email</Text>
        <Text style={styles.sectionText}>{email}</Text>
        <Text style={styles.sectionHeader}>Birthday</Text>
        <Text style={styles.sectionText}>{birthday}</Text>
        <Text style={styles.sectionHeader}>Gender</Text>
        <Text style={styles.sectionText}>{gender}</Text>
        <Text style={styles.sectionHeader}>Home Gym</Text>
        <Text style={styles.sectionText}>{gym}</Text>
        {/* <Text style={styles.sectionHeader}>Profile Picture</Text>
        {picture ? (
          <Image style={styles.profileImage} source={{ uri: picture }} />
        ) : (
          <View style={styles.profileImage}>{profilePicture}</View>
        )} */}
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleLabel}>Dark Mode</Text>
          <Switch
            onValueChange={toggleSwitch}
            value={isDarkMode}
            trackColor={{ false: "#767577", true: "#36BCC0" }}
            thumbColor={isDarkMode ? "#FFF" : "#36BCC0"}
          />
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={async () => {
            await handleLogout();
          }}
        >
          <Text style={styles.editButtonText}>Logout</Text>
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
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center"
  },
  logoutButton: {
    backgroundColor: "#737373",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
});
