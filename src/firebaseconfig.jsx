import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyD-SG6tgGLNs7-C46RMIvsfCriLGPyLiZg",
  authDomain: "airport-9aded.firebaseapp.com",
  projectId: "airport-9aded",
  storageBucket: "airport-9aded.firebasestorage.app",
  messagingSenderId: "240173079891",
  appId: "1:240173079891:web:71a9cbafd0b8d1a9fc55a6",
  measurementId: "G-NDDH2MJX1T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);
export const storage = getStorage(app)