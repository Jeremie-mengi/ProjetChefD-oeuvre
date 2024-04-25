import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import ForgotPass from './components/ForgotPass.jsx'
import Home from './components/Home.jsx'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element:<Home/>,
        },
        {
          path:"/Login",
          element: <Login/>, 
        },
        {
          path:"/ForgotPass",
          element: <ForgotPass/>, 
        }, 
        {
          path:"/Register",
          element: <Register/>, 
        }
        
        
    ],
       
    },
  ]);  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
