import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3CnK1kAIvaOm2v0CkHjK2bUPHSuNg0ko",
  authDomain: "react-crud-project-afe73.firebaseapp.com",
  projectId: "react-crud-project-afe73",
  storageBucket: "react-crud-project-afe73.appspot.com",
  messagingSenderId: "271325223109",
  appId: "1:271325223109:web:8e36d383ce31e238eb38ac"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

