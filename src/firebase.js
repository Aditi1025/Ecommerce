import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCJJ9KDXW-TA__uo9IKz6CPtZjfR7mSZpg",
  authDomain: "fashgram-6b4d3.firebaseapp.com",
  databaseURL: "https://fashgram-6b4d3.firebaseio.com",
  projectId: "fashgram-6b4d3",
  storageBucket: "fashgram-6b4d3.appspot.com",
  messagingSenderId: "709180725654",
  appId: "1:709180725654:web:3aaccd4d8a2d1b0fcbe5b7",
  measurementId: "G-WV9H37QKX5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };