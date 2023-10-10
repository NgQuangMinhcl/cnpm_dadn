// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXFnp03DLrVP0NgtwuadAdZGninZf1I58",
  authDomain: "smart-home-bf3e4.firebaseapp.com",
  projectId: "smart-home-bf3e4",
  storageBucket: "smart-home-bf3e4.appspot.com",
  messagingSenderId: "1009265431255",
  appId: "1:1009265431255:web:ae52671da0b6f5d7f25692",
  measurementId: "G-2Z2DFL01SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app)