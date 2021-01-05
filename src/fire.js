import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDWhgZ3H7ETF3fhJom6eHEy0rZyNj_E0Ww",
  authDomain: "interesno-760a3.firebaseapp.com",
  projectId: "interesno-760a3",
  storageBucket: "interesno-760a3.appspot.com",
  messagingSenderId: "605896546963",
  appId: "1:605896546963:web:15c982509a5f3566028b66",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
