import React, { useState } from "react";
import { useFirebase } from "../contexts/FireBase";

const FireBaseApp = () => {
  const fbase = useFirebase(); // context

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [city, setCity] = useState("");
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [pincode, setPincode] = useState();

  const handleSignIn = () => {
    fbase.signUpEmail(email, pass);
  };
  const handleUpload = () => {
    fbase.uploadData("users/" + "riju", { email, pass });
  };

  const handleWrite = () => {
    fbase.writeData(city, pincode, lat, long);
    setCity("");
    setLat("")
    setLong("")
    setPincode("")
  };

  const handleFetchData = () => { 
    fbase.getDocument()
   }

  return (
    <div>
      <h3>FireBaseApp</h3>
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="password">password: </label>
      <input
        type="password"
        name="pass"
        id="pass"
        onChange={(e) => setPass(e.target.value)}
        value={pass}
      />

      <button onClick={handleSignIn}>Sign Up</button>
      <button onClick={handleUpload}>data store</button>

      <div>
        <label htmlFor="pass"> address: </label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="number"
          name="lat"
          id="lat"
          placeholder="lat"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
        <input
          type="number"
          name="long"
          id="long"
          placeholder="long"
          value={long}
          onChange={(e) => setLong(e.target.value)}
        />
        <input
          type="number"
          name="pin"
          id="pin"
          placeholder="pin"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />

        <button onClick={handleWrite}>FIreStore Upload</button>
      </div>

      <div>
        <button onClick={handleFetchData}>fetch data</button>
      </div>
    </div>
  );
};

export default FireBaseApp;
