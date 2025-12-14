// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh9Ugi7ekOS9TvLlWlnt-d9YL7lBc_Vbc",
  authDomain: "netflixgpt-9c272.firebaseapp.com",
  projectId: "netflixgpt-9c272",
  storageBucket: "netflixgpt-9c272.firebasestorage.app",
  messagingSenderId: "450720891198",
  appId: "1:450720891198:web:9afac23cc0c3090a4fec6f",
  measurementId: "G-7FECCDGH21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
