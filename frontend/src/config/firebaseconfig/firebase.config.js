// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFVyG1E6g45EgygQ4l7rF9RG2sSNohSZk",
  authDomain: "fir-img-4719c.firebaseapp.com",
  projectId: "fir-img-4719c",
  storageBucket: "fir-img-4719c.appspot.com",
  messagingSenderId: "530993453850",
  appId: "1:530993453850:web:868749a21dd0d43f6b2aa3",
  measurementId: "G-N62G6J3R8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app)