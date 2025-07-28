import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../firebase';

const auth = getAuth(app);

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = ()=>{
        createUserWithEmailAndPassword(auth,email,password).then(()=>alert('Succes..!!'))
    }
  return (
    <div>
        <h1>Sign Up</h1>
        <label htmlFor="email">Enter Email</label>
        <input type="email" placeholder='example@gmail.com'
        onChange={e=> setEmail(e.target.value)}
        value={email}
        />
        <label htmlFor="pasword">Enter Password</label>
        <input type="password" placeholder='passowrd'
        onChange={e=>setPassword(e.target.value)}
        value={password}
        />
        <button onClick={createUser}>Sign Up</button>
    </div>
  )
}

export default SignUp