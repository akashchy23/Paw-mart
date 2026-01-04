import React, { useContext, useState } from "react";
import { Link } from "react-router";
import Logo from "../assets/pawmartlogo.jpg";
import { AuthContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  const logout = () => {
    signOut(auth);
    setDropdown(false);
    setMobileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              ☰
            </button>

            <Link to="/" className="flex items-center gap-3">
              <img src={Logo} className="w-10 rounded-xl" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PAW-MART
              </span>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex gap-4">
            <Nav to="/" label="Home" />
            <Nav to="/services" label="Services" />
            {user && (
              <>
                <Nav to="/addservices" label="Add Service" />
                <Nav to="/myservices" label="My Services" />
                <Nav to="/my-orders" label="My Orders" />
              </>
            )}
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* THEME */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
            >
              {dark ? "☀️" : "🌙"}
            </button>

            {/* DESKTOP PROFILE ONLY */}
            {user ? (
              <div className="relative hidden lg:block">
                <button onClick={() => setDropdown(!dropdown)}>
                  <img
                    src={user.photoURL || "https://i.ibb.co/2kR9ZQy/user.png"}
                    className="w-10 h-10 rounded-full border"
                  />
                </button>

                {dropdown && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow border">
                    <div className="p-4 border-b">
                      <p className="font-semibold">{user.displayName}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>

                    <MenuLink to="/dashboard" label="Dashboard" close={setDropdown} />
                    <MenuLink to="/profile" label="My Profile" close={setDropdown} />
                    

                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="px-5 py-2 bg-blue-600 text-white rounded-lg"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/* MOBILE MENU (NO PROFILE IMAGE) */}
        {mobileOpen && (
          <div className="lg:hidden py-3 space-y-2">
            <Mobile to="/" label="Home" close={setMobileOpen} />
            <Mobile to="/services" label="Services" close={setMobileOpen} />

            {user ? (
              <>
                <Mobile to="/profile" label="My Profile" close={setMobileOpen} />
                <Mobile to="/dashboard" label="Dashboard" close={setMobileOpen} />
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-3 text-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Mobile to="/login" label="Login" close={setMobileOpen} />
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

/* REUSABLES */
const Nav = ({ to, label }) => (
  <Link to={to} className="px-3 py-2 hover:text-blue-600 font-medium">
    {label}
  </Link>
);

const Mobile = ({ to, label, close }) => (
  <Link
    to={to}
    onClick={() => close(false)}
    className="block px-4 py-2 hover:bg-gray-100 rounded"
  >
    {label}
  </Link>
);

const MenuLink = ({ to, label, close }) => (
  <Link
    to={to}
    onClick={() => close(false)}
    className="block px-4 py-3 hover:bg-blue-50"
  >
    {label}
  </Link>
);

export default Navbar;
