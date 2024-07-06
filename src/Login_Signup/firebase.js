// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2fD02jr3-0AQf9HOEU4R4vXEMKpWDXfQ",
  authDomain: "mycp2-255b4.firebaseapp.com",
  projectId: "mycp2-255b4",
  storageBucket: "mycp2-255b4.appspot.com",
  messagingSenderId: "518102636023",
  appId: "1:518102636023:web:ecbd57b3021bafc8b80af2",
  measurementId: "G-K602VCG7GX"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export{auth,db,storage};