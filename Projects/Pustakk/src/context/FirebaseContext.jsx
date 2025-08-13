import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

import { fireStore } from "../firebase";

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

// functional things
export const FirebaseContextProvider = ({ children }) => {

    const[user,setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) setUser(user)
        else setUser(null);
    });
  }, []);

  const createUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const LoginUser = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const googleAuth = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const isLoggedIn = user ? true : false;


  //files

  const dataUpload = (title,isbn,price,file) => { 

   }

  return (
    <FirebaseContext.Provider value={{ dataUpload, createUser, LoginUser, googleAuth, isLoggedIn }}>
      {children}
    </FirebaseContext.Provider>
  );
};
