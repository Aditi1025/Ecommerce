import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCbsT4nSPdfAjWfm1fg4R0Rl0FTCkcGAkU",
  authDomain: "fashgram-57e41.firebaseapp.com",
  databaseURL: "https://fashgram-57e41.firebaseio.com",
  projectId: "fashgram-57e41",
  storageBucket: "fashgram-57e41.appspot.com",
  messagingSenderId: "951475849840",
  appId: "1:951475849840:web:d892efe71f0238c1b542b5",
  measurementId: "G-8WGTLGRZRK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };