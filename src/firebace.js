import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC7RCveCYDcKQEZ-Nv_2ieRcpZwQr9eKc",
  authDomain: "user-project-4010c.firebaseapp.com",
  projectId: "user-project-4010c",
  storageBucket: "user-project-4010c.appspot.com",
  messagingSenderId: "441451960274",
  appId: "1:441451960274:web:c7f9333e2d8a2830c09a0b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
