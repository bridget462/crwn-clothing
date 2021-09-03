// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDCpn9vkKm6dFiz1fFOs4Ejp8GhuA-ScCA",
  authDomain: "crwn-db-7b02e.firebaseapp.com",
  projectId: "crwn-db-7b02e",
  storageBucket: "crwn-db-7b02e.appspot.com",
  messagingSenderId: "618732156069",
  appId: "1:618732156069:web:3896e4c5042e57ca68494c",
  measurementId: "G-Q2SMWQ1GL0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google auth setting
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;