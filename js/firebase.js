import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBHzhw4z0b31g11TwxOGFsL6Iv3x6rAuuw",
  authDomain: "jobfinder-4edc6.firebaseapp.com",
  projectId: "jobfinder-4edc6",
  storageBucket: "jobfinder-4edc6.firebasestorage.app",
  messagingSenderId: "341478102388",
  appId: "1:341478102388:web:c9a06663bf4ea607f50821"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
