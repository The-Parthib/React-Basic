
// import Login from './components/Login'
// import Profile from './components/Profile'
// import UserContextProvider from './context/userContextProvider'

import Shopping from "./components/Cart/Shopping"
import ThemeRoot from "./components/ThemeToggler/ThemeRoot"
import TodoApp from "./components/TodoApp/TodoApp"
import { CartContextProvider } from "./context/CartContext"

function App() {

  return (
    // <UserContextProvider>
    //   <h1>Hello this is react Context provider</h1>
    //   <Login/>
    //   <Profile/>
    // </UserContextProvider>

    // <div className="max-w-md flex flex-wrap justify-center mx-72 dark:bg-gray-900">
    //   <h1 className="bg-pink-700 text-white font-extrabold rounded-4xl p-4 text-center">hello world</h1>
    //   <ThemeRoot />
    // </div>

    <>
    <CartContextProvider>
      <Shopping/>
    </CartContextProvider>
    </>

    // <>
    // {/* <TodoApp/> */}
    
    // </>
    )
}

export default App
