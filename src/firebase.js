import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBTsTTwmCEKOP_Bx7hPyjO9ovkqlNBWAhQ",
  authDomain: "asadullohs-75646.firebaseapp.com",
  projectId: "asadullohs-75646",
  storageBucket: "asadullohs-75646.appspot.com",
  messagingSenderId: "879901928903",
  appId: "1:879901928903:web:f40b8fbc620b164ecc3de2",
  measurementId: "G-E0RN9MEENT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);