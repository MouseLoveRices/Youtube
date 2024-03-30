// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7RXwyFGxCklEmI-MivpCixXHsAnp1yA8",
  authDomain: "video-5ab9d.firebaseapp.com",
  projectId: "video-5ab9d",
  storageBucket: "video-5ab9d.appspot.com",
  messagingSenderId: "346509970207",
  appId: "1:346509970207:web:8cfb7722f88bb90c553e2a",
  measurementId: "G-XMFC0TP5E4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export default app;
export const provider = new GoogleAuthProvider();