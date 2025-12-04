import React, { useContext } from "react";
import { Link } from "react-router";
import Logo from "../assets/pawmartlogo.jpg";
import { AuthContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Navbar = () => {
  const { user } = useContext(AuthContext);

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
        </ul>
      </div>

      {/* LOGOUT BUTTON */}
      {user && (
        <div className="navbar-end">
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
        <div className="navbar-end">
          <Link
            to={"/Login"}
            className="px-6 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 hover:from-purple-600 hover:via-indigo-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
