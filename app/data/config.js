import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0npkUOcvSDt9EdFWfSz8rkknJwhH5m_U",
  authDomain: "dadn-iot.firebaseapp.com",
  databaseURL: "https://dadn-iot-default-rtdb.firebaseio.com",
  projectId: "dadn-iot",
  storageBucket: "dadn-iot.appspot.com",
  messagingSenderId: "218497433797",
  appId: "1:218497433797:web:820921af8644b5ff28b0ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init firestore
export const db = getFirestore(app);
