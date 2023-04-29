
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjBmMg9eW09CMK4s_EZpOuTo8a6skjYog",
  authDomain: "nahuelvaliente-d6182.firebaseapp.com",
  projectId: "nahuelvaliente-d6182",
  storageBucket: "nahuelvaliente-d6182.appspot.com",
  messagingSenderId: "583569111118",
  appId: "1:583569111118:web:9ceeca1585d906db3f6b1f",
  measurementId: "G-TYDW92NEZD"
};

const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default firebaseApp;