import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import RouterProject from './components/RouterProject'
import Home from './components/Router/Home/Home'
import About from './components/Router/About/About'
import Contact from './components/Router/Contact/Contact'
import User from './components/Router/User/User'
import Github, { githubDatainfo } from './components/Router/Github/Github'

const router = createBrowserRouter(
  (
    createRoutesFromElements(
      <Route path='/' element={<RouterProject/>}>
        <Route path='' element={<Home/>} />
        <Route path='about' element={<About />}/>
        <Route path='contact-us' element={<Contact />} />
        <Route path='user/:id' element={<User />} />
        {/* used loader to optimize fetching */}
        <Route loader={githubDatainfo} path='github' element={<Github/>}/> 

      </Route>
    )
  )
)

/*
const router = createBrowserRouter([
  {
    path: '/',
    element: <RouterProject/>,
    children:[
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      }
    ]
  }
])
  */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,

*/