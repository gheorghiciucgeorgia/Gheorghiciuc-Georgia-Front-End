// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbvoUJmW0DiGnEpMx9DjA1kndAx1cqu8g",
  authDomain: "osfdigitalinternship.firebaseapp.com",
  projectId: "osfdigitalinternship",
  storageBucket: "osfdigitalinternship.appspot.com",
  messagingSenderId: "842459706496",
  appId: "1:842459706496:web:73d92e0fe5c3c1fc72a265",
  measurementId: "G-P5J2FJZ96J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);