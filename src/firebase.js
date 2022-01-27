import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
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
} from "firebase/firestore";

import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject 
} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7C9Kimzy4f2jyYBUPQ3wSdCPkbBf6xu0",
  authDomain: "istramusicshop.firebaseapp.com",
  projectId: "istramusicshop",
  storageBucket: "istramusicshop.appspot.com",
  messagingSenderId: "574533141940",
  appId: "1:574533141940:web:65335fdcfc74488f545ee1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(app);

//Firebase exports
export { 
  getAuth,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut, 
  sendPasswordResetEmail, 
  app 
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
  onSnapshot 
};
//FirebaseStorage exports
export { 
  storage, 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject, 
  getStorage 
};
