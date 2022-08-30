// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  getAuth
} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQJ-Zywi1pdZeny-_d7wzwd81ScbfV6JE",
  authDomain: "pruebatecnicageek-a330d.firebaseapp.com",
  projectId: "pruebatecnicageek-a330d",
  storageBucket: "pruebatecnicageek-a330d.appspot.com",
  messagingSenderId: "754879045828",
  appId: "1:754879045828:web:f49ad004c2e8a0e47aa991"
};

// // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);