
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChyBkRTJdplmdM2GYzwOauEavO9ogn0Nk",
  authDomain: "saikiashop-c9a7a.firebaseapp.com",
  projectId: "saikiashop-c9a7a",
  storageBucket: "saikiashop-c9a7a.appspot.com",
  messagingSenderId: "158735522444",
  appId: "1:158735522444:web:544a849eb5d901f3a0b9a9"
};

 export const app = initializeApp(firebaseConfig);

 export const auth = getAuth();
 export const db = getFirestore(app);