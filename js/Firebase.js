// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKVL-hydLl09UlRhofIjypWdZIVJxhWqE",
  authDomain: "otroproyecyo.firebaseapp.com",
  projectId: "otroproyecyo",
  storageBucket: "otroproyecyo.firebasestorage.app",
  messagingSenderId: "980080795276",
  appId: "1:980080795276:web:04c6c0dc424272b0cde5a9",
  measurementId: "G-M5EP5076F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);