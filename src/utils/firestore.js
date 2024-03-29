import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCjzHqUzg_OUjSoHu4W7MnF4O0yoMgB7GU",
    authDomain: "react-crud-app-684c2.firebaseapp.com",
    projectId: "react-crud-app-684c2",
    storageBucket: "react-crud-app-684c2.appspot.com",
    messagingSenderId: "465613851240",
    appId: "1:465613851240:web:3053829b6ee4e76c00c9dd",
    measurementId: "G-283RP3QT1J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db };