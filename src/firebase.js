import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqIdNOicCVOUqNGuougL03wbSHozPafH0",
  authDomain: "distro-community.firebaseapp.com",
  projectId: "distro-community",
  storageBucket: "distro-community.appspot.com",
  messagingSenderId: "28427551426",
  appId: "1:28427551426:web:81c620678f4e4f0556315b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
