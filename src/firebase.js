import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA33uYd4rZY_bg7_QuwIkk1gX_QOyRmfJM",
    authDomain: "cart-app-bbb7d.firebaseapp.com",
    projectId: "cart-app-bbb7d",
    storageBucket: "cart-app-bbb7d.appspot.com",
    messagingSenderId: "779450632157",
    appId: "1:779450632157:web:4bdef026f8c0e1f8a59834"
};
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export default firebase;
  