// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAzWGSSNj-f6NCxk1wlBcF_HK-lMLHDF1M",
  authDomain: "asadullohs-126b7.firebaseapp.com",
  projectId: "asadullohs-126b7",
  storageBucket: "asadullohs-126b7.appspot.com",
  messagingSenderId: "185665060244",
  appId: "1:185665060244:web:e5626e79c76b1397bea381",
  measurementId: "G-B4GS708YZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const firestore = getFirestore(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider)

