// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9ztU_WRshPqI0B4NK1-cDYUjKxh1kQ4k",
  authDomain: "winter-cloth-donation-a946e.firebaseapp.com",
  projectId: "winter-cloth-donation-a946e",
  storageBucket: "winter-cloth-donation-a946e.firebasestorage.app",
  messagingSenderId: "121538008537",
  appId: "1:121538008537:web:db4fd421f3a2792c5475c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;