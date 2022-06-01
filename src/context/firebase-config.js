import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDjCU2JiZM0RvliIDPkWlh0_mxzE2hLOsY",
    authDomain: "auth-9c8ed.firebaseapp.com",
    projectId: "auth-9c8ed",
    storageBucket: "auth-9c8ed.appspot.com",
    messagingSenderId: "47381829652",
    appId: "1:47381829652:web:d35247022e7a9b0910af01",
    measurementId: "G-J8HHWST9RQ"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);