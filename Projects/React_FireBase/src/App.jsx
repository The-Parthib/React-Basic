// import { getDatabase,ref,set } from "firebase/database";

import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import FireBaseApp from "./components/FireBaseApp";

// const db = getDatabase(app);
// const auth = getAuth(app);

function App() {
  // const sendData = () => {
  //   set(ref(db,'users/rupsa'),{
  //     id: 2,
  //     name: "rupsa chatterjee",
  //     age: 21,
  //   })
  //  }

  // const signupUser = () => {
  //   createUserWithEmailAndPassword(auth, "parthib@gmail.com", "password")
  //   .then((res) => console.log(res));
  // };

  return (
    <>
      <h3>React + fireBase</h3>
      {/* <button onClick={signupUser}>Sign Up</button> */}
      <SignUp/>
      <SignIn />
      <FireBaseApp/>
    </>
  );
}

export default App;
