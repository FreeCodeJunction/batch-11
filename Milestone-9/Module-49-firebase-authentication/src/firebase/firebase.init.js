//Don't share firebase config online

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzFJssN6_m6yMijZqL0LWi2dLEBXunV4E",
  authDomain: "learning-firebase-29868.firebaseapp.com",
  projectId: "learning-firebase-29868",
  storageBucket: "learning-firebase-29868.firebasestorage.app",
  messagingSenderId: "88808106492",
  appId: "1:88808106492:web:57c7825fcb8fd006bb2a79",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
