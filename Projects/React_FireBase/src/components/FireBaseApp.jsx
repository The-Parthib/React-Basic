import React, { useState } from 'react'
import { useFirebase } from '../contexts/FireBase'

const FireBaseApp = () => {

    const fbase = useFirebase(); // context

    const [email, setEmail] = useState("");
    const [pass,setPass] = useState("");

    const handleSignIn = () => { 
        fbase.signUpEmail(email,pass)
    }
    const handleUpload= () => { 
        fbase.uploadData('users/'+'riju',{email,pass})
    }

  return (
    <div>
        <h3>FireBaseApp</h3>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" 
        onChange={e=>setEmail(e.target.value)}
        value={email}
        />
        <label htmlFor="password">password: </label>
        <input type="password" name="pass" id="pass" 
        onChange={e=>setPass(e.target.value)}
        value={pass}
        />

        <button onClick={handleSignIn}>Sign Up</button>
        <button onClick={handleUpload}>data store</button>
    </div>
  )
}

export default FireBaseApp  