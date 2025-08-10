import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, database, db } from "../firebase";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";

export const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const signUpEmail = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed up successfully
        alert("User created successfully!");
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${(errorCode, errorMessage)}`);
        throw error;
      });
  };

  const uploadData = (key, data) => set(ref(database, key), data);

  const writeData = async (city, pincode, lat, lon) => {
    const result = await addDoc(collection(db, "address"), {
      city,
      pincode,
      lat,
      lon,
    });

    console.log("result", result);
  };

  const getDocument = async () => {
    const ref = doc(db,'users','QaiJZgUKCG9elq208dKQ');
    const snap = await getDoc(ref);

    if (snap.exists()) {
  console.log("Document data:", snap.data());
} else {
  // snap.data() will be undefined in this case
  console.log("No such document!");
}
  }

  return (
    <FirebaseContext.Provider value={{getDocument, writeData, signUpEmail, uploadData }}>
      {children}
    </FirebaseContext.Provider>
  );
};
