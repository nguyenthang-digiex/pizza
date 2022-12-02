// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBL2YZgtbEqKl9osLO9heM3j9CrFMjwPw4",
    authDomain: "pizzathang-74b0f.firebaseapp.com",
    projectId: "pizzathang-74b0f",
    storageBucket: "pizzathang-74b0f.appspot.com",
    messagingSenderId: "103059507608",
    appId: "1:103059507608:web:5e8529c694d71acf0e43ed",
    measurementId: "G-E1RFRBHQR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);