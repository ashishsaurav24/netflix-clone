import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDN_Rh-QHSVlO6PNLnwiHQkeppZyGEsknI",
    authDomain: "netflix-clone-bed6b.firebaseapp.com",
    projectId: "netflix-clone-bed6b",
    storageBucket: "netflix-clone-bed6b.appspot.com",
    messagingSenderId: "758233233593",
    appId: "1:758233233593:web:30a4d6843d59c74f624368"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;