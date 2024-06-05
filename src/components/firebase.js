// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgD2dUy-8COMO18n4q4n1-wLk6cYOYYbg",
  authDomain: "project-1111-8dfb1.firebaseapp.com",
  projectId: "project-1111-8dfb1",
  storageBucket: "project-1111-8dfb1.appspot.com",
  messagingSenderId: "232700531725",
  appId: "1:232700531725:web:8d7b0cbc3476709a04b144"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;
