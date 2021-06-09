import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyDq5U0V-N5U7IPH0SwQa0nIW3aesvYgBt4",
  authDomain: "chai-par-charcha.firebaseapp.com",
  databaseURL: "https://chai-par-charcha.firebaseapp.com/",
  projectId: "chai-par-charcha",
  storageBucket: "chai-par-charcha.appspot.com",
  messagingSenderId: "178536119273",
  appId: "1:178536119273:web:e4de935aa3accd95eae978",
  measurementId: "G-KCRMJQWF85"
};
firebase.initializeApp(config);

export default firebase;






