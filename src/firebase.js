import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAB6oV9xyiH_pO4TldI5tZJ0zncShlh-KU",
  authDomain: "journey-jotter.firebaseapp.com",
  projectId: "journey-jotter",
  storageBucket: "journey-jotter.appspot.com",
  messagingSenderId: "218314577295",
  appId: "1:218314577295:web:7f072a3cc8e7ff1fc9e7fa",
  measurementId: "G-1RV76GE46W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
