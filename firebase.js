// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyCGZJRgvvv4J-VUp8NTj7rfzhm5MpSHPHk",
  authDomain: "hotel-booking-bb1ce.firebaseapp.com",
  projectId: "hotel-booking-bb1ce",
  storageBucket: "hotel-booking-bb1ce.appspot.com",
  messagingSenderId: "642064984379",
  appId: "1:642064984379:web:a9ae124ece51bfcd3b2f1e",
  measurementId: "G-4M21KW83ZP"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCGZJRgvvv4J-VUp8NTj7rfzhm5MpSHPHk",
//   authDomain: "hotel-booking-bb1ce.firebaseapp.com",
//   projectId: "hotel-booking-bb1ce",
//   storageBucket: "hotel-booking-bb1ce.appspot.com",
//   messagingSenderId: "642064984379",
//   appId: "1:642064984379:web:a9ae124ece51bfcd3b2f1e",
//   measurementId: "G-4M21KW83ZP"
// };


// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const analytics = getAnalytics(app);
const storage =getStorage(app);
const firestore = getFirestore(app);

export {auth, storage, firestore}