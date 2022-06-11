import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, getFirestore, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARitDfg_vBjJF4IRUZ_BXl42dtFCU7PPE",
  authDomain: "eshop-db-a67df.firebaseapp.com",
  projectId: "eshop-db-a67df",
  storageBucket: "eshop-db-a67df.appspot.com",
  messagingSenderId: "1003453308877",
  appId: "1:1003453308877:web:f168f6b3f4b1c350b62e84",
};

const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userauth) => {
  const userDocRef = doc(db, "users", userauth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userauth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userDocRef;
};
