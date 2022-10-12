import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  getFirestore, 
    Query, 
    getDocs, 
    collection,
    where,
    addDoc,
    doc,
    getDoc,
    setDoc,
    deleteDoc,} from "@firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyD4YfdR-Xwo9m4zLykaANAbI72_seN7JcM",

  authDomain: "eventos-acueducto.firebaseapp.com",

  projectId: "eventos-acueducto",

  storageBucket: "eventos-acueducto.appspot.com",

  messagingSenderId: "976067515596",

  appId: "1:976067515596:web:8c13f606560bc7e1855e69",

  measurementId: "G-2K42MP7EBB"

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