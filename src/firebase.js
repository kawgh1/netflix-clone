// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyATBx9dHZuNSchWP8HMGqacX-XPJc2-CmM",
    authDomain: "netflix-clone-ec4be.firebaseapp.com",
    projectId: "netflix-clone-ec4be",
    storageBucket: "netflix-clone-ec4be.appspot.com",
    messagingSenderId: "339596534277",
    appId: "1:339596534277:web:b3c78ba67696e120b5726c",
};

//initialize app
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth}
export default db;