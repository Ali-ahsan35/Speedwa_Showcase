// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNieLCkQ55OT9EpA7mNrKCgpaR3WXer-s",
  authDomain: "speedway-showcase.firebaseapp.com",
  projectId: "speedway-showcase",
  storageBucket: "speedway-showcase.appspot.com",
  messagingSenderId: "415548238716",
  appId: "1:415548238716:web:60b8e01a702675e2a812f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;