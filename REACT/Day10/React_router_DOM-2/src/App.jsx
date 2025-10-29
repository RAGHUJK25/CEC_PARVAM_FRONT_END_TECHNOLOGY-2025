import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Careers from './pages/Careers'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Layout from './Componentes/Layout'
import NotFound from './pages/NotFound'


const router =createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    errorElement:<NotFound />,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/About",
        element:<About/>
      },
      {
        path:"/Careers",
        element:<Careers/>
      },
      {
        path:"/Projects",
        element:<Projects/>
      },
      {
        path:"/Services",
        element:<Services/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      }
    ]
  }
]);
function App() {
  return <RouterProvider router={router} />
}

export default App