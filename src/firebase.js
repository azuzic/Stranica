import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification, 
  updateEmail, 
  reauthenticateWithCredential,
  EmailAuthProvider, 
} from "firebase/auth";

import { 
  collection, 
  doc, 
  setDoc,
  addDoc, 
  getDocs, 
  updateDoc ,
  onSnapshot,
  query,
  where,
  orderBy,
  deleteDoc
} from "firebase/firestore";

import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject,
  listAll
} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCLMsaq8sP9fFRddGqc0qSVexytF65FweA",
    authDomain: "stranica-305220.firebaseapp.com",
    projectId: "stranica-305220",
    storageBucket: "stranica-305220.appspot.com",
    messagingSenderId: "925064733506",
    appId: "1:925064733506:web:6ad51826bfbe66e1099edb",
    measurementId: "G-TG6PQDLBSY"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(app);

//Firebase exports
export { 
  getAuth,
  createUserWithEmailAndPassword, 
  updateEmail, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut, 
  sendPasswordResetEmail, 
  sendEmailVerification, 
  app,
  reauthenticateWithCredential,
  EmailAuthProvider,
};

//Firestore exports
export { 
  db,
  doc,
  collection, 
  setDoc, 
  addDoc,
  getDocs, 
  updateDoc, 
  where, 
  query, 
  onSnapshot,
  orderBy, 
  deleteDoc
};

//FirebaseStorage exports
export { 
  storage, 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject, 
  getStorage,
  listAll
};