// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ4x7l8o2wdfy2u981gNx4q4NqWdwqYl8",
  authDomain: "job-project-task.firebaseapp.com",
  projectId: "job-project-task",
  storageBucket: "job-project-task.appspot.com",
  messagingSenderId: "769378197374",
  appId: "1:769378197374:web:4a20e3652667de86585d2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;