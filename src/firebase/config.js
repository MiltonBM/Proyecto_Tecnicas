import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA4ocNM7a2HI8Iudplc7oX3-6qpYk7yDYU",
  authDomain: "proyectotecnicas-d5ad9.firebaseapp.com",
  databaseURL: "https://proyectotecnicas-d5ad9-default-rtdb.firebaseio.com/",
  projectId: "proyectotecnicas-d5ad9",
  storageBucket: "proyectotecnicas-d5ad9.firebasestorage.app",
  messagingSenderId: "681265187993",
  appId: "1:681265187993:web:7ee6af27f75b35d7f7bc08"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, onValue };