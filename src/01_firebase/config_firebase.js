// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPVnkwTQSpwtpcfha7-WpruIaOPHuHbkY",
  authDomain: "se3290-1.firebaseapp.com",
  projectId: "se3290-1",
  storageBucket: "se3290-1.firebasestorage.app",
  messagingSenderId: "427996632757",
  appId: "1:427996632757:web:a91c46db904ad5b89a90fc",
  measurementId: "G-HNLLHRV1JB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
