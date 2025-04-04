// UserContext.js
import React, { createContext, useState, useEffect } from "react";
import { auth, db } from "./firebaseConfig.js";
import { doc, onSnapshot } from "firebase/firestore";

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    userName: null,
    email: null,
    birthday: null,
    gender: null,
    gym: null,
  });
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [gender, setGender] = useState(null);
  const [gym, setGym] = useState(null);

  useEffect(() => {
    if (!auth.currentUser) {
      console.log("No authenticated user found.");
      setLoading(false);
      return;
    }
    const userRef = doc(db, "Users", auth.currentUser.uid);
    const unsubscribe = onSnapshot(userRef, (docSnap) => {
      if (docSnap.exists()) {
        setUserData(docSnap.data());
        setUserName(docSnap.data().userName);
        setEmail(docSnap.data().email);
        setBirthday(docSnap.data().birthday);
        setGender(docSnap.data().gender);
        setGym(docSnap.data().gym);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData, loading, userName, email, birthday, gender, gym }}>
      {children}
    </UserContext.Provider>
  );
};
