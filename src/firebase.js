import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC6-5ElG6dkjZzsdIt-j-aeqG6xuhO1DPY",
  authDomain: "fashgram-b49f6.firebaseapp.com",
  databaseURL: "https://fashgram-b49f6.firebaseio.com",
  projectId: "fashgram-b49f6",
  storageBucket: "fashgram-b49f6.appspot.com",
  messagingSenderId: "565261660781",
  appId: "1:565261660781:web:fb28881fc4e11135688564",
  measurementId:"G-4Q4XBXGW36",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };