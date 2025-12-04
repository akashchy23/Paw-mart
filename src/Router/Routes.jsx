import { createBrowserRouter } from "react-router";
import React from "react";
import RootLayout from "../Root/RootLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../Pages/ServiceDetails";
import ForgetPass from "../Pages/ForgetPass";
import Error from "../Pages/Error";
import AddService from "../Pages/AddService";


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
          path: "/details/:myId",
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
        },
        {
          path:"/forget/:email",
          element: <ForgetPass></ForgetPass>
        },
        {
          path:"/addservices",
          element:<AddService></AddService>
        }
    ]
  },
]);

export default router;