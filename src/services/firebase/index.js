// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBlWZBM4jX8sjuwaK0Te2AvrNOIT0dnHE4",
  authDomain: "tamagotchi-681c7.firebaseapp.com",
  databaseURL: "https://tamagotchi-681c7.firebaseio.com",
  projectId: "tamagotchi-681c7",
  storageBucket: "tamagotchi-681c7.appspot.com",
  messagingSenderId: "29787676694",
  appId: "1:29787676694:web:68b140d5025c5aecca5537",
  measurementId: "G-HSBW9M65WH",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
