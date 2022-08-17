import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  setDoc,
  query,
  startAfter,
  endBefore,
  limit,
  orderBy,
  limitToLast,
  where,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyDxY0OgqzT_66a6OYSebhsuJW2fKRZP9lM",
  authDomain: "onechain-fd700.firebaseapp.com",
  projectId: "onechain-fd700",
  storageBucket: "onechain-fd700.appspot.com",
  messagingSenderId: "507262206742",
  appId: "1:507262206742:web:8d9d5a7f16a0017d840637",
  measurementId: "G-3CTT2VN5V5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const filterWhere = (sameName) => {
  const fullNameSearch = sinhvien.name.includes(sameName);
  return query(
    collection(db, "sinhvien"),
    where("name", "array-contains-any", fullNameSearch)
  );
};

export const getDataEachPage = async (queryProps) => {
  let firstQuery =
    queryProps || query(collection(db, "sinhvien"), orderBy("name"), limit(5));
  const docSnaps = await getDocs(firstQuery);
  const data = docSnaps.docs.map((snap) => snap.data());
  const previousDoc = docSnaps.docs[0];
  const lastDoc = docSnaps.docs[docSnaps.docs.length - 1];

  return {
    data,
    previousDoc,
    lastDoc,
  };
};

export const getQueryNextPage = (lastVisible) => {
  return query(
    collection(db, "sinhvien"),
    orderBy("name"),
    startAfter(lastVisible),
    limit(5)
  );
};

export const getQueryPrevPage = (previousDoc) => {
  return query(
    collection(db, "sinhvien"),
    orderBy("name"),
    endBefore(previousDoc),
    limitToLast(5)
  );
};

const logInWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

const registerWithEmailAndPassword = async (
  email,
  password,
  firstName,
  lastName
) => {
  const registeredUser = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  await setDoc(doc(db, "userDetails", registeredUser.user.uid), {
    firstName,
    lastName,
  });
  localStorage.setItem("user", registeredUser.user.getIdTokenResult());
};

const profile = async (
  name,
  studentID,
  sex,
  age,
  birth,
  hometown,
  level,
  describe,
  avatar
) => {
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
  const data = [];
  res.forEach((r) => {
    data.push({
      id: r.id,
      ...r.data(),
    });
  });
  return data;
};

const removeDataFromFirebase = async (id) => {
  await deleteDoc(doc(db, "sinhvien", id));
};

const updateData = async (
  name,
  studentID,
  sex,
  age,
  birth,
  hometown,
  level,
  describe,
  avatar,
  id
) => {
  await setDoc(doc(db, "sinhvien", id), {
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

const logout = async () => {
  const res = await signOut(auth);
  return res;
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
