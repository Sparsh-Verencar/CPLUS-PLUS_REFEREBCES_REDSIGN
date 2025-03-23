import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './Pages/Landing.jsx'
import References from './Pages/References.jsx'
import Articles from './Pages/Articles.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import Layout from './Components/Layout'
import Tutorial from './Pages/Tutorial.jsx'
import Forum from './Pages/Forum'
import Program_Structure from './Pages/Program_Structure'
import CLibrary from './Pages/CLibrary'
import Containers from './Pages/Containers'
import Input_Output from './Pages/Input_Output'
import Others from './Pages/Others'
import Multithreading from './Pages/Multithreading'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Landing />,
      },
      {
        path: 'references',
        element: <References />,
        children:[
        {
          path:'references/clibrary',
          element:<CLibrary/>
        },
        {
          path:'references/stl',
          element:<Containers/>
        },
        {
          path:'references/iolibrary',
          element:<Input_Output/>
        },
        {
          path:'references/multithreading',
          element:<Multithreading/>
        },
        {
          path:'references/std',
          element:<Others/>
        },
      ]
      },
      {
        path: 'articles',
        element: <Articles />,
      },
      {
        path: 'tutorial',
        element: <Tutorial />,
        children:[
          {
          path:'tutorial/program_structure',
          element:<Program_Structure/>
        }
      ]

      },
      {
        path: 'forum',
        element: <Forum />,
      },
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
