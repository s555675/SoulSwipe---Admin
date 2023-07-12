import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:  process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "soulswipe-afd60.firebaseapp.com",
  projectId: "soulswipe-afd60",
  storageBucket: "soulswipe-afd60.appspot.com",
  messagingSenderId: "744182248019",
  appId: "1:744182248019:web:862d81666ffb1ad5720ca6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);