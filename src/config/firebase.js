import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  Query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
} from "@firebase/firestore";


const firebaseConfig = {

  apiKey: import.meta.env.VITE_API_KEY,

  authDomain: import.meta.env.VITE_AUTH_DOMAIN,

  projectId: import.meta.env.VITE_PROJECT_ID,

  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,

  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,

  appId: import.meta.env.VITE_APP_ID,

  measurementId: import.meta.env.VITE_MEASUREMENT_ID

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app);

const getEvents = async () => {
  const querySnapshot = await getDocs(collection(db, "Eventos"));
  const events = [];
  querySnapshot.forEach((doc) => {
    const newDoc = { ...{ id: doc.id }, ...doc.data() };
    events.push(newDoc);
  });
  console.log(events)
  return events;
};


export {
  getEvents
};