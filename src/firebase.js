// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3hIlE14Q_IG61EKz4cWKB6aS0rC0sLtQ",
  authDomain: "chat-9e7c1.firebaseapp.com",
  projectId: "chat-9e7c1",
  storageBucket: "chat-9e7c1.appspot.com",
  messagingSenderId: "795120623192",
  appId: "1:795120623192:web:6b24ac3af2d097bfa1342d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// Create a root reference for store
export const storage = getStorage();
//get database reference
export const db = getFirestore();
