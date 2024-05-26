// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdTi_2DPsNCE7DcrYsM6OQ9lcAT7w9e8A",
  authDomain: "medossier-280a1.firebaseapp.com",
  projectId: "medossier-280a1",
  storageBucket: "medossier-280a1.appspot.com",
  messagingSenderId: "964420945904",
  appId: "1:964420945904:web:6a56dae6035cb3c8f2ff35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);