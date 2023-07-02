// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "rd-portfolio-fa574.firebaseapp.com",
  projectId: "rd-portfolio-fa574",
  storageBucket: "rd-portfolio-fa574.appspot.com",
  messagingSenderId: "5097551002",
  appId: "1:5097551002:web:11ca482d69400c6f2a1b23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getDatabase(app);