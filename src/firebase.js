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
import { collection, doc, addDoc, getDocs, updateDoc, onSnapshot, deleteDoc  } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

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

//Firebase
export { getAuth };
export { createUserWithEmailAndPassword };
export { signInWithEmailAndPassword };
export { onAuthStateChanged };
export { signOut };
export { sendPasswordResetEmail };
export { app };

//Firestore
export { db };
export { collection };
export { addDoc };
export { getDocs };
export { updateDoc };
export { doc };
export { onSnapshot };
export { deleteDoc };

//FirebaseStorage
export { storage, ref, uploadBytes, getDownloadURL, deleteObject, getStorage };