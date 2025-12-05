import { createBrowserRouter } from "react-router";
import React from "react";
import RootLayout from "../Root/RootLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import PrivateRoute from "./PrivateRoute";

import ForgetPass from "../Pages/ForgetPass";
import Error from "../Pages/Error";
import AddService from "../Pages/AddService";
import Mpdetails from "../Pages/Mpdetails";
import Myservices from "../Pages/Myservices";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/services",
            element: <Services></Services>
        },
        {
          path: "/Login",
          element: <Login></Login>
        },
        {
          path: "/Signup",
          element: <Register></Register>
        },
        {
          path: "/Profile",
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
       
        {
          path:"/forget/:email",
          element: <ForgetPass></ForgetPass>
        },
        {
          path:"/addservices",
          element:<AddService></AddService>
        },
        {
          path:"/mpdetails/:id",
         element:<Mpdetails></Mpdetails>
        },
        {
          path:"/myservices",
          element:<Myservices></Myservices>
        }
    ]
  },
]);

export default router;