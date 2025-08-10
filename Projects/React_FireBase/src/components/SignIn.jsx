import  { useState } from "react";
import {  signInWithEmailAndPassword } from "firebase/auth";
import {  auth } from "../firebase";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [passowrd, setPassowrd] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, passowrd)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <h2>Sign In</h2>

      <label htmlFor="text">Enter Email</label>
      <input
        type="email"
        placeholder="email@example.com"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="password">Enter Password</label>
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassowrd(e.target.value)}
        value={passowrd}
      />
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
};

export default SignIn;
