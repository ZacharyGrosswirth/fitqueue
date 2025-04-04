import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  initializeAuth,
  getReactNativePersistence,
} from "@firebase/auth/dist/rn/index.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDukB4sHCi09P7T63gpipUNi17E0k-HWmA",
  authDomain: "fitqueue-596ef.firebaseapp.com",
  projectId: "fitqueue-596ef",
  storageBucket: "fitqueue-596ef.firebasestorage.app",
  messagingSenderId: "353677119140",
  appId: "1:353677119140:web:e8fe82017412a8f4b36031",
  measurementId: "G-ESEL35508X",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(app);

export { auth, db };
export default app;
