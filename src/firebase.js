import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite'


const firebaseConfig = {
  apiKey: "AIzaSyCh3BMS9wYLdEVuf3h-SrELGpDapIf9m2Q",
  authDomain: "react-portfolio-site-dashboard.firebaseapp.com",
  projectId: "react-portfolio-site-dashboard",
  storageBucket: "react-portfolio-site-dashboard.appspot.com",
  messagingSenderId: "744205106010",
  appId: "1:744205106010:web:434eda354e37fa2762d163"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);