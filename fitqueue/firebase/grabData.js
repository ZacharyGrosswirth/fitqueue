import { auth, db } from "./firebaseConfig.js";
import { doc, getDoc } from "firebase/firestore";

export let userName = null;
export let email = null;
export let birthday = null;
export let gender = null;
export let gym = null;

export const initUserInfo = async () => {
  try {
    if (!auth.currentUser) {
      console.log("No authenticated user found.");
      return;
    }
    const userDocRef = doc(db, "Users", auth.currentUser.uid);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const data = userDocSnap.data();
      userName = data.name;
      email = data.email;
      birthday = data.birthday;
      gender = data.gender;
      gym = data.gym;
      console.log("User data loaded:", data);
      return data;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user document:", error);
    return null;
  }
};
