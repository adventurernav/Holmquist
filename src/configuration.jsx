// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";

// Your Firebase config here
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3auDa8SwRMUirXQLQTz6j_3tOm6qO4rA",
    authDomain: "holmquist-f2502.firebaseapp.com",
    databaseURL: "https://holmquist-f2502-default-rtdb.firebaseio.com",
    projectId: "holmquist-f2502",
    storageBucket: "holmquist-f2502.firebasestorage.app",
    messagingSenderId: "998862256905",
    appId: "1:998862256905:web:95a994a235d15c680b31d8",
    measurementId: "G-7QBD9X5JME"
  };

// Initialize Firebase
 const cong = initializeApp(firebaseConfig);

  export default cong;
// Now you can use Firebase services in your React app!