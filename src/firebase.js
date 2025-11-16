// Correct imports
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase config (replace with your actual values)
const firebaseConfig = {
  apiKey: "AIzaSyDCM4xhGofS9wgbRz7T4Z6g3ZGKw9iL60s",
  authDomain: "sweet-ef010.firebaseapp.com",
  projectId: "sweet-ef010",
  storageBucket: "sweet-ef010.firebasestorage.app",
  messagingSenderId: "101801680376",
  appId: "1:101801680376:web:dc832ec89b2a880e980a0d",
  measurementId: "G-B51JS19T71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Export auth and provider
export { auth, googleProvider, signInWithPopup };

// Helper function for Google sign-in
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    return user;
  } catch (error) {
    console.error("Google login error:", error);
    throw error;
  }
};
