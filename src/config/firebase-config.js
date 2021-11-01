// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBviJbpkKQf4vrOn0mBj7zAqEq0z-RQX0I",
  authDomain: "bigfor4-f0991.firebaseapp.com",
  projectId: "bigfor4-f0991",
  storageBucket: "bigfor4-f0991.appspot.com",
  messagingSenderId: "992854545240",
  appId: "1:992854545240:web:743f36278eb94aee6dcb2d",
  measurementId: "G-4VZBBR4VKQ"
};
firebase.initializeApp(firebaseConfig);
// firebase.getAnalytics();
export default firebase;