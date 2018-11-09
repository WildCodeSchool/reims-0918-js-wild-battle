import firebase from "firebase/app";
import "firebase/database";
const config = {
  // Initialize Firebase
  apiKey: "AIzaSyA5Tg0-5CMd9B1Lvtl2LULLeTzh_Li_lpQ",
  authDomain: "wild-battle.firebaseapp.com",
  databaseURL: "https://wild-battle.firebaseio.com",
  projectId: "wild-battle",
  storageBucket: "wild-battle.appspot.com",
  messagingSenderId: "794920044403"
};
firebase.initializeApp(config);
export default firebase;
