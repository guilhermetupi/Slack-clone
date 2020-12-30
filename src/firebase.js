import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd6fx7P8zQ9g8B2uQV-OBzf4l-uQLeS4M",
  authDomain: "slack-clone-3cea8.firebaseapp.com",
  projectId: "slack-clone-3cea8",
  storageBucket: "slack-clone-3cea8.appspot.com",
  messagingSenderId: "464229236834",
  appId: "1:464229236834:web:5a3e34221676fef003513b",
  measurementId: "G-MXV5RKDZ8D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;