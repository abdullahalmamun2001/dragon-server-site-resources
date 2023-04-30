// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjVfPnik4aIvUEqy12iKs4oZWLTf52oUw",
  authDomain: "best-news-country.firebaseapp.com",
  projectId: "best-news-country",
  storageBucket: "best-news-country.appspot.com",
  messagingSenderId: "804186741934",
  appId: "1:804186741934:web:7d5cb0a084aa32d549213f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;