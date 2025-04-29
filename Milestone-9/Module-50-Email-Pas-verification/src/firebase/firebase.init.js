import { getAuth } from "firebase/auth";
// Do not push config to public

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7C8bnWaeftDDTTA8vR6ZpZyxvILSiAcw",
  authDomain: "explore-email-path-auth.firebaseapp.com",
  projectId: "explore-email-path-auth",
  storageBucket: "explore-email-path-auth.firebasestorage.app",
  messagingSenderId: "622791795846",
  appId: "1:622791795846:web:b8d8999e07d64035c81d07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
