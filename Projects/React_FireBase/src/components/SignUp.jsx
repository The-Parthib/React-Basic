import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

const provider = new GoogleAuthProvider();



const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const signUpWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then(() =>
      alert("Succes..!!")
    );
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // sigend in
        console.log("Hello ", user);
        setUser(user);
      } else {
        alert("Logged Out");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div>
        <h1>Sign Up</h1>
        <label htmlFor="email">Enter Email</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="pasword">Enter Password</label>
        <input
          type="password"
          placeholder="passowrd"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={createUser}>Sign Up</button>
        <br />
        <button onClick={signUpWithGoogle}>google</button>
      </div>
    );
  }

  return (
    <>
      <h2>{user.email}</h2>
      <button onClick={() => signOut(auth)}>Log Out</button>
    </>
  );
};

export default SignUp;
