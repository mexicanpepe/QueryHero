/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { firebaseConfig } from "../config";
// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

 export const provider = new GoogleAuthProvider();
