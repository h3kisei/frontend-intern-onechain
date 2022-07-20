import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  getDoc,
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
  await setDoc(doc(db, "sinhvien"), {
    name,
    sex,
    age,
    level,
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

const removeDataFromFirebase = async (collectionName) => {
  await deleteDoc(doc(db, collectionName));
};

const updateData = async (name, sex, age, level, id) => {
  await getDoc(doc(db, "sinhvien", id), {
    name,
    sex,
    age,
    level,
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
}