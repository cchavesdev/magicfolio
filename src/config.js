// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAmuc37lfo6u7yTb2KfNo9PZCJSbH6IB74",
  authDomain: "magicfolio-69acd.firebaseapp.com",
  projectId: "magicfolio-69acd",
  storageBucket: "magicfolio-69acd.appspot.com",
  messagingSenderId: "845910243446",
  appId: "1:845910243446:web:388b04cbd721861bf98757",
  measurementId: "G-4X1XJWHQE4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
export {auth, provider};