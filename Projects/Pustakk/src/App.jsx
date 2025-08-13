import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import SignUp from './pages/Signup/SignUp';
import SignIn from './pages/Signin/SignIn';
import NavbarItem from './components/NavbarItem';
import ListBook from './pages/ListBook/ListBook';

function App() {

  return (
    <>
    <NavbarItem/>
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />
      <Route path='/list/book' element={<ListBook/>} />
      <Route path='/login' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
    </Routes>
    </>
  )
}

export default App
