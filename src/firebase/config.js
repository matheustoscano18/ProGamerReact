// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZF2LP5s9cJ97jn9szwJnv9ijQySQysho",
  authDomain: "progamer-63d96.firebaseapp.com",
  projectId: "progamer-63d96",
  storageBucket: "progamer-63d96.firebasestorage.app",
  messagingSenderId: "98551288847",
  appId: "1:98551288847:web:4e01fb411bf6ced3f4ff7a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
