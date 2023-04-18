// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwU076qzqfy6KZOxxxhjrXFMyHWNaMM3o",
  authDomain: "coding-pathshala-b8f8f.firebaseapp.com",
  projectId: "coding-pathshala-b8f8f",
  storageBucket: "coding-pathshala-b8f8f.appspot.com",
  messagingSenderId: "563779247679",
  appId: "1:563779247679:web:318dd3eee102c00e47228a",
  measurementId: "G-PBVS4XVLFC",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
