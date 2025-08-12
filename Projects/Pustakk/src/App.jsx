import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import SignUp from './pages/Signup/SignUp';
import SignIn from './pages/Signin/SignIn';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />
      <Route path='/login' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
    </Routes>
    </>
  )
}

export default App
