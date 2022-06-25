

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
  

} from "firebase/auth";
import { doc, getFirestore, getDoc, setDoc ,collection ,writeBatch ,query, getDocs } from "firebase/firestore";


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

export const addCollectons = async (collectionkey , objectToAdd) => {

  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionkey)

  objectToAdd.forEach((object) => { 
    const docRef = doc(collectionRef , object.title.toLowerCase());
    batch.set(docRef , object)
  })

  await batch.commit();
  console.log('dne')

}

export const getCategoriesAndDocuments = async () => {
   const collectionRef = collection(db,'categories');
   const q =query(collectionRef);

   const querySnapshots = await getDocs(q)

   
return querySnapshots.docs;
}

export const createUserDocumentFromAuth = async (userauth , additionalinfo = {}) => {
  const userDocRef = doc(db, "users", userauth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userauth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalinfo
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async(email ,password) => {
 if(!email || !password) return;
 return await createUserWithEmailAndPassword(auth , email ,password);

};

export const signOutUser = () => signOut(auth);

export const onAuthChangedListner = (callback) => onAuthStateChanged(auth,callback);