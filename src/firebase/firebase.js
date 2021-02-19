import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq0rrIV0RtoC39aNgMQ9IyrEStUG_Ja04",
  authDomain: "clone-36329.firebaseapp.com",
  projectId: "clone-36329",
  storageBucket: "clone-36329.appspot.com",
  messagingSenderId: "135520120001",
  appId: "1:135520120001:web:ed7eb85fc44cbcf3ea3840",
  measurementId: "G-1MX6L3JM8F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
