import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAxNsIkIECE3p4QE587dhKJmCaz3tft1x0",
  authDomain: "todoapp-31664.firebaseapp.com",
  databaseURL: "https://todoapp-31664.firebaseio.com",
  projectId: "todoapp-31664",
  storageBucket: "todoapp-31664.appspot.com",
  messagingSenderId: "157296993197",
  appId: "1:157296993197:web:6946f32c820a7254217724",
  measurementId: "G-79P3GEN756",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
//   const auth = firebase.auth();

export default db;
