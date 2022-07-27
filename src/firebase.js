import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword, getAuth,
  signInWithEmailAndPassword, signOut
} from "firebase/auth";
import {
  addDoc, collection, deleteDoc, doc, getDocs, getFirestore, setDoc
} from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

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
  return await signInWithEmailAndPassword(auth, email, password);
    };

const registerWithEmailAndPassword = async (email, password, firstName, lastName) => {
    const res = await createUserWithEmailAndPassword(auth, email, password, firstName, lastName);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      email,
      password,
      firstName,
      lastName,
    });
    localStorage.setItem('user', user);
  };

const profile = async (name, studentID, sex, age, birth, hometown, level, describe, avatar) => {
  await setDoc(doc(db, "sinhvien", uuidv4()), {
    name,
    studentID,
    sex,
    age,
    birth,
    hometown,
    level,
    describe,
    avatar,
  });
};

const getDataFromFirebase = async (collectionName) => {
  const res = await getDocs(collection(db, collectionName));
  const data = []
  res.forEach(r => {
    data.push(
      {
        id: r.id,
        ...r.data(),
      }
    ) 
  })
  return data;
};

const removeDataFromFirebase = async (id) => {
  await deleteDoc(doc(db, "sinhvien", id));
};

const updateData = async (name, sex, age, birth, hometown, level, describe, avatar, id) => {
  await setDoc(doc(db, "sinhvien", id), {
    name,
    sex,
    age,
    birth,
    hometown,
    level,
    describe,
    avatar,
  });
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
  getDataFromFirebase,
  removeDataFromFirebase,
  updateData,
};
