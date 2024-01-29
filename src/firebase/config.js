// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDj-BJsU1YhBiDwZ2T43tokifsNnOgbbQM",
    authDomain: "zentiva-store.firebaseapp.com",
    projectId: "zentiva-store",
    storageBucket: "zentiva-store.appspot.com",
    messagingSenderId: "859731468556",
    appId: "1:859731468556:web:059c99f4f6d061b6b4a929"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);