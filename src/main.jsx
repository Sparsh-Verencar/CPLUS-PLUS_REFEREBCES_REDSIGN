import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './Pages/Landing.jsx'
import References from './Pages/References.jsx'
import Articles from './Pages/Articles.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import Loading from './Components/Loading'
import Layout from './Components/Layout'
import Tutorial from './Pages/Tutorial.jsx'
import Forum from './Pages/Forum'
import Program_Structure from './Pages/Program_Structure'
import Variables_and_types from './Pages/Variables_and_types'

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
        },
          {
          path:'tutorial/variables_and_types',
          element:<Variables_and_types/>
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
