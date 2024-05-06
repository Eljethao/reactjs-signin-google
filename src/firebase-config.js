// src/firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBYXT6apkR8MEEGa0UmPSqYewGrF7V02KI",
    authDomain: "signinwith-a10f2.firebaseapp.com",
    projectId: "signinwith-a10f2",
    storageBucket: "signinwith-a10f2.appspot.com",
    messagingSenderId: "147020844856",
    appId: "1:147020844856:web:787ddc9865b31aeb127bcd",
    measurementId: "G-JB8L2PTXN9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
