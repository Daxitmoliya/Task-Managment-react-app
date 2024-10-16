// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAupcLXJvHRKa8Snjg8o48BCMDvJs0P4xM",
  authDomain: "airnub.firebaseapp.com",
  projectId: "airnub",
  storageBucket: "airnub.appspot.com",
  messagingSenderId: "75565498827",
  appId: "1:75565498827:web:5fb8e7844d594e513cf64e",
  measurementId: "G-MK46GZYQXJ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(firebaseApp);

export { auth };
