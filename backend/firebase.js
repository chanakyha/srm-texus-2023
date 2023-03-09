// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: NEXT_PUBLIC_APIKEY,
  authDomain: NEXT_PUBLIC_AUTHDOMAIN,
  projectId: NEXT_PUBLIC_PROJECTID,
  storageBucket: NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: NEXT_PUBLIC_APPID,
};

const app = initializeApp(firebaseConfig);
