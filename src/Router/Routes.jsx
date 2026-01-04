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
import UpdateServices from "../Pages/UpdateServices";
import MyOrders from "../Pages/MyOrders";
import DashboardLayout from "../DashBoardLayout/DashboardLayout";
import AllUsers from "../Pages/AllUsers";
import Chart from "../Component/Chart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Register /> },
      { path: "/profile", element: <PrivateRoute><Profile /></PrivateRoute> },
      { path: "/forget/:email", element: <ForgetPass /> },
      { path: "/addservices", element: <PrivateRoute><AddService /></PrivateRoute> },
      { path: "/mpdetails/:id", element: <PrivateRoute><Mpdetails /></PrivateRoute> },
      { path: "/myservices", element: <PrivateRoute><Myservices /></PrivateRoute> },
      { path: "/update-services/:id", element: <PrivateRoute><UpdateServices /></PrivateRoute> },
      { path: "/my-orders", element: <PrivateRoute><MyOrders /></PrivateRoute> },
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      { path: "allusers", element: <AllUsers/> },
      { path: "myorders", element: <MyOrders /> },
      { path: "mygraph", element:  <Chart></Chart>},
      { path: "profile", element: <Profile /> },
      { path: "addservices", element: <AddService /> },
      { path: "settings", element: <div>Settings Page</div> }
    ]
  }
]);

export default router;
