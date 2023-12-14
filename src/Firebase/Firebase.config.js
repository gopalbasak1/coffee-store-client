import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB35vfzd-vB-JIvi5mnLD66dtoy-DH8hwo",
  authDomain: "coffee-store-61b54.firebaseapp.com",
  projectId: "coffee-store-61b54",
  storageBucket: "coffee-store-61b54.appspot.com",
  messagingSenderId: "821888747203",
  appId: "1:821888747203:web:c7a33a4681e86e6f924476"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;