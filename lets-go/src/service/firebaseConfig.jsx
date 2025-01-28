// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "trip-generator-b5650.firebaseapp.com",
  projectId: "trip-generator-b5650",
  storageBucket: "trip-generator-b5650.firebasestorage.app",
  messagingSenderId: "820622184508",
  appId: "1:820622184508:web:07293be026f49f8eac7339",
  measurementId: "G-G66RR93140"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);