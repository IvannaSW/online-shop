import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAkol4qqQFcoSttciIJhaDV8tP5Bf8CYxw",
  authDomain: "onlineshop-5b1e6.firebaseapp.com",
  projectId: "onlineshop-5b1e6",
  storageBucket: "onlineshop-5b1e6.appspot.com",
  messagingSenderId: "785053717951",
  appId: "1:785053717951:web:73b165ca5b7aa344dc3d0a",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
