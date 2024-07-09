// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vehicle-rental-77760.firebaseapp.com",
  projectId: "vehicle-rental-77760",
  storageBucket: "vehicle-rental-77760.appspot.com",
  messagingSenderId: "643330162203",
  appId: "1:643330162203:web:2b6ba7bf54a428486e82be"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
// export default app;