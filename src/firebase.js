
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: ,
    authDomain: "todo-app-33ebf.firebaseapp.com",
    databaseURL: "https://todo-app-33ebf.firebaseio.com",
    projectId: "todo-app-33ebf",
    storageBucket: "todo-app-33ebf.appspot.com",
    messagingSenderId: 
    appId: ,
    measurementId: ,
});

const db = firebaseApp.firestore();

export default db;