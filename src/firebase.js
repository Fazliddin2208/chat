import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDnr0VbqA-xOot9ULAlF9esfH7qVm-Y7z0",
  authDomain: "chat-3b9e9.firebaseapp.com",
  projectId: "chat-3b9e9",
  storageBucket: "chat-3b9e9.appspot.com",
  messagingSenderId: "138246423130",
  appId: "1:138246423130:web:41a9c21298f05535ff4e63"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
