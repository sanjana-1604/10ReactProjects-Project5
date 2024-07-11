// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0oe18zPTbKkfqWkjsc8hScgCtnESzWwQ",
  authDomain: "contactapp-vite-tailwind.firebaseapp.com",
  projectId: "contactapp-vite-tailwind",
  storageBucket: "contactapp-vite-tailwind.appspot.com",
  messagingSenderId: "143795609653",
  appId: "1:143795609653:web:0f9d99c5911d160b5f917c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)