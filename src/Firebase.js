import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth'

const firebaseConfig = {
    apiKey: "AIzaSyBjUUJqGL9kMNEo1eTeBMgao9H39WsM6s8",
    authDomain: "projetoead-1100e.firebaseapp.com",
    projectId: "projetoead-1100e",
    storageBucket: "projetoead-1100e.appspot.com",
    messagingSenderId: "374597969409",
    appId: "1:374597969409:web:c77c3eb79270b74c11c200"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;