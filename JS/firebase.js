import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDygSTKrxPqeb8rL47Z9W6RSjS0MYuvdAI",
  authDomain: "favy-crochet-studio.firebaseapp.com",
  projectId: "favy-crochet-studio",
  storageBucket: "favy-crochet-studio.firebasestorage.app",
  messagingSenderId: "587050230586",
  appId: "1:587050230586:web:f6c34c3846fdcde0506603",
  measurementId: "G-9PGRSNPH0Y"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Create authentication

const auth = getAuth(app);
const db = getFirestore(app);


// Export authentication

export { auth, db };