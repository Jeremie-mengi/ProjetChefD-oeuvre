import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import ForgotPass from './components/ForgotPass.jsx'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Register/>,
        },
        {
          path:"/Login",
          element: <Login/>, 
        },
        {
          path:"/ForgotPass",
          element: <ForgotPass/>, 
        }
        
    ],
       
    },
  ]);  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
