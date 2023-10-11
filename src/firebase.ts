import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBq_LhNkVR-wtSsOzRYCmpUcDblrDPCg8A",
  authDomain: "lanz-social.firebaseapp.com",
  projectId: "lanz-social",
  storageBucket: "lanz-social.appspot.com",
  messagingSenderId: "776914229207",
  appId: "1:776914229207:web:c6c117543c10387283dd92",
  measurementId: "G-ZJ69Z2TKWT"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

export { auth, database };