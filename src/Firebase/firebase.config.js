// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAqMnK2JtX23krEILOZsvyVzTnIj2x048",
  authDomain: "fir-contex-tailwind.firebaseapp.com",
  projectId: "fir-contex-tailwind",
  storageBucket: "fir-contex-tailwind.appspot.com",
  messagingSenderId: "63548800444",
  appId: "1:63548800444:web:4f5f357ba28c9edc2bffb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;