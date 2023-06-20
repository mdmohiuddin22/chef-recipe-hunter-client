// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhEQKoWbEq6Xfvhn9MOL24OaepW2PceA4",
  authDomain: "khabar-ghor-recipes.firebaseapp.com",
  projectId: "khabar-ghor-recipes",
  storageBucket: "khabar-ghor-recipes.appspot.com",
  messagingSenderId: "214081938193",
  appId: "1:214081938193:web:fff591e3471c46ef2022b0"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;