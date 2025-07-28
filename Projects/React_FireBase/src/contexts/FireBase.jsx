import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";


export const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

const firebaseConfig = {
  apiKey: "AIzaSyC_Wj5vQaqDwqNiBWcDjbtVeA3ZxQFSzmk",
  authDomain: "learn-app-a6428.firebaseapp.com",
  projectId: "learn-app-a6428",
  storageBucket: "learn-app-a6428.firebasestorage.app",
  messagingSenderId: "211897645927",
  appId: "1:211897645927:web:4c3507ce99d159fc6b8dc2",
  databaseURL: "https://learn-app-a6428-default-rtdb.firebaseio.com",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

export const FirebaseProvider = ({children}) => { 

    const signUpEmail = async(email, password) => {
        return await createUserWithEmailAndPassword(firebaseAuth, email, password)
            .then(() => {
                // Signed up successfully
                alert("User created successfully!");
            })
            .catch((error) => {
                // Handle errors
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Error: ${errorCode,errorMessage}`);
                throw error;
            });
    };

    const uploadData = (key,data) => set (ref(database,key),data);

    return(
        <FirebaseContext.Provider value={{signUpEmail,uploadData}}>
            {children}
        </FirebaseContext.Provider> 
    )
 }