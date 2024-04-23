// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJLkIRhCDBM1080T5HxTgkw7MfVlk0oJ8",
  authDomain: "portafolios-40fdb.firebaseapp.com",
  databaseURL: "https://portafolios-40fdb-default-rtdb.firebaseio.com",
  projectId: "portafolios-40fdb",
  storageBucket: "portafolios-40fdb.appspot.com",
  messagingSenderId: "84114568662",
  appId: "1:84114568662:web:5ddb77e62afff46ca06077"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};