import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";


var firebaseConfig = {
  apiKey: "AIzaSyDi9hgklE_JExQyn5rT076rVet7L9T0gj0",
  authDomain: "kimaye-website-db.firebaseapp.com",
  databaseURL: "https://kimaye-website-db-default-rtdb.firebaseio.com",
  projectId: "kimaye-website-db",
  storageBucket: "kimaye-website-db.appspot.com",
  messagingSenderId: "357708539994",
  appId: "1:357708539994:web:1de045545ab5a3dcbf5063"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();


export {db, provider, auth};
