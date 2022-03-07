import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBleXpCXGI4pD-bUfBe3mzPc4hNsGUUu6U",
  authDomain: "ecommerce-db-8dcd7.firebaseapp.com",
  projectId: "ecommerce-db-8dcd7",
  storageBucket: "ecommerce-db-8dcd7.appspot.com",
  messagingSenderId: "199463665014",
  appId: "1:199463665014:web:1b74e59f2237f51bd50e57",
  measurementId: "G-LD3YT8EJK8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
