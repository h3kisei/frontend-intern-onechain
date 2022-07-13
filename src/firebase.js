import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAtSP4JttiDP3-lySVi9z1AQAho6TRVpEM",
  authDomain: "ochain-d79c3.firebaseapp.com",
  projectId: "ochain-d79c3",
  storageBucket: "ochain-d79c3.appspot.com",
  messagingSenderId: "822036460593",
  appId: "1:822036460593:web:6d788c155415b58ab51110",
  measurementId: "G-FBMY3SL638"
};

export const auth = getAuth(app)
const app = initializeApp(firebaseConfig);