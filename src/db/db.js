import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP7Sbz3VyoqJMVWheS7iT08GWp72G4Jj0",
  authDomain: "ecommerce-zlo.firebaseapp.com",
  projectId: "ecommerce-zlo",
  storageBucket: "ecommerce-zlo.firebasestorage.app",
  messagingSenderId: "240524590833",
  appId: "1:240524590833:web:54a57b7d0f409b2de47350"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;