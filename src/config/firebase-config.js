// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHhaWY3_j0Fu_Q4rfDeCtSYFzNY_Ba4Rg",
  authDomain: "enactus-taskmanagement.firebaseapp.com",
  projectId: "enactus-taskmanagement",
  storageBucket: "enactus-taskmanagement.appspot.com",
  messagingSenderId: "513106794812",
  appId: "1:513106794812:web:1092d4ae396d35f0b6e639",
  measurementId: "G-1WC52BVV99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);