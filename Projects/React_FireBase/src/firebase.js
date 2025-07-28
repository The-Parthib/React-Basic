// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_Wj5vQaqDwqNiBWcDjbtVeA3ZxQFSzmk",
  authDomain: "learn-app-a6428.firebaseapp.com",
  projectId: "learn-app-a6428",
  storageBucket: "learn-app-a6428.firebasestorage.app",
  messagingSenderId: "211897645927",
  appId: "1:211897645927:web:4c3507ce99d159fc6b8dc2",
  databaseURL: "https://learn-app-a6428-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);