import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  getAdditionalUserInfo,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig ={
  apiKey: "AIzaSyDxY0OgqzT_66a6OYSebhsuJW2fKRZP9lM",
  authDomain: "onechain-fd700.firebaseapp.com",
  projectId: "onechain-fd700",
  storageBucket: "onechain-fd700.appspot.com",
  messagingSenderId: "507262206742",
  appId: "1:507262206742:web:8d9d5a7f16a0017d840637",
  measurementId: "G-3CTT2VN5V5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      email,
    });
    localStorage.setItem('user', user);
  } catch (err) {
    console.error(err);
  }
};

const profile = async (name, sex, age, level) => {
  try {
    const res = await getAdditionalUserInfo(auth, name, age, sex, level);
    const sv = res.sv;
    await addDoc(collection(db, "sinhvien"), {
      uid: sv.uid,
      authProvider: "local",
      name,
      sex,
      age,
      level,
    });
    localStorage.setItem('sv', sv);
  } catch (err) {
    console.error(err);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
  profile,


