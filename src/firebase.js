// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCmwda0s8nZXYU3fTT47EMOpDxItsVcOdg",
    authDomain: "smart-home-1d1d0.firebaseapp.com",
    databaseURL: "https://smart-home-1d1d0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smart-home-1d1d0",
    storageBucket: "smart-home-1d1d0.appspot.com",
    messagingSenderId: "466822860670",
    appId: "1:466822860670:web:65da3a86af16d6c4eaad2f",
    measurementId: "G-THQ8VKBGG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
