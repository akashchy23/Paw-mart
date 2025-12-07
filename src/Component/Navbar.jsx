import React, { useContext, useState } from "react";
import { Link } from "react-router";
import Logo from "../assets/pawmartlogo.jpg";
import { AuthContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isChecked,setIsChecked]=useState(true)
 const handleTheme=()=>{
    setIsChecked(!isChecked)
    if(isChecked){
      document.querySelector('html').setAttribute('data-theme','dark')
    }
    else{
      document.querySelector('html').setAttribute('data-theme','light')
    }
    // console.log(isChecked)
 }
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="navbar bg-gradient-to-r from-[#0b1f3a] via-[#102e4a] to-[#1a4a6e] text-white shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-[#10253f] text-white rounded-box z-[9999] mt-3 w-52 p-2 shadow"
          >
            <li className="font-medium text-lg hover:text-blue-300">
              <Link to="/">Home</Link>
            </li>
            <li className="font-medium text-lg hover:text-blue-300">
              <Link to="/services">Services</Link>
            </li>
            <li className="font-medium text-lg hover:text-blue-300">
              <Link to="/Profile">My Profile</Link>
            </li>
            <li className="font-medium text-lg hover:text-blue-300">
              <Link to="/addservices">Add to Services</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <img className="w-20 hidden lg:block rounded-full" src={Logo} alt="logo" />
          <h3 className="font-bold text-3xl ml-2 bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
            PAW-MART
          </h3>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-medium text-lg hover:text-blue-300">
            <Link to="/">Home</Link>
          </li>
          <li className="font-medium text-lg hover:text-blue-300">
            <Link to="/services">Services</Link>
          </li>
          <li className="font-medium text-lg hover:text-blue-300">
            <Link to="/Profile">My Profile</Link>
          </li>
          {
            user && <>
              <li className="font-medium text-lg hover:text-blue-300">
                <Link to="/addservices">Add to Services</Link>
              </li>
              <li className="font-medium text-lg hover:text-blue-300">
                <Link to="/myservices">My Services</Link>
              </li>
              <li className="font-medium text-lg hover:text-blue-300">
                <Link to="/my-orders">My Orders</Link>
              </li></>
          }
        </ul>
      </div>
      <div className="navbar-end">
        <label className="flex cursor-pointer gap-2 mx-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path
              d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input onClick={handleTheme} type="checkbox" value="synthwave" className="toggle theme-controller" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>

        {/* LOGOUT BUTTON */}
        {user && (
          <div>
            <button
              onClick={handleSignOut}
              className="px-6 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 hover:from-purple-600 hover:via-indigo-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Logout
            </button>
          </div>
        )}


        {/* LOGIN BUTTON */}
        {!user && (
          <div >
            <Link
              to={"/Login"}
              className="px-6 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 hover:from-purple-600 hover:via-indigo-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Login
            </Link>
          </div>
        )}

      </div>

    </div>
  );
};

export default Navbar;
