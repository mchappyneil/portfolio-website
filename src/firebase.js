import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite'


const firebaseConfig = {
  apiKey: "hidden",
  authDomain: "hidden",
  projectId: "hidden",
  storageBucket: "hidden",
  messagingSenderId: "hidden",
  appId: "hidden"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
