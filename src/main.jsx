import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import ForgotPass from './components/ForgotPass.jsx'
import Home from './components/Home.jsx'
import Dashbord from './components/Dashbord.jsx'


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
          path:"/login",
          element: <Login/>, 
        },
        {
          path:"/forgotPass",
          element: <ForgotPass/>, 
        }, 
        {
          path:"/register",
          element: <Register/>, 
        },
        {
          path:"/dash",
          element: <Dashbord/>, 
        }        
    ],
       
    },
  ]);  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
