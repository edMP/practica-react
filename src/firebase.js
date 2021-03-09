 import firebase from "firebase/app"
 import 'firebase/firestore'
 import 'firebase/auth'
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBTpEW52lDjAdKJHv0DIem2knoCb17jkz8",
    authDomain: "practicariact.firebaseapp.com",
    projectId: "practicariact",
    storageBucket: "practicariact.appspot.com",
    messagingSenderId: "945134321841",
    appId: "1:945134321841:web:d976c79e7f42ebba20a290"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore()
  const auth=firebase.auth()

  export {db,auth}