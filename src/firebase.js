import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyABR7lhnimxvNdYQBjtYmwn8cp8bb0zWxw",
//     authDomain: "telegram-692fb.firebaseapp.com",
//     projectId: "telegram-692fb",
//     storageBucket: "telegram-692fb.appspot.com",
//     messagingSenderId: "855342454811",
//     appId: "1:855342454811:web:1968119aa0d4da066980be",
//     measurementId: "G-832CX7049M"
// };

// // Initialize Firebase

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyrZ9eLF2VLOYiBgvHcOOH8LDsWhrOwbI",
    authDomain: "telegramapp-b5a9e.firebaseapp.com",
    projectId: "telegramapp-b5a9e",
    storageBucket: "telegramapp-b5a9e.appspot.com",
    messagingSenderId: "261206645343",
    appId: "1:261206645343:web:822d2a6d297795bc7919ea",
    measurementId: "G-37CNNGEN47"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

