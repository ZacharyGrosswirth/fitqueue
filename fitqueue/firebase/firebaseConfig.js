import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
const auth = getAuth(app);

export { auth };
export default app;
