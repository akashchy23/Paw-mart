import { FcGoogle } from "react-icons/fc";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase.config";

const Login = () => {
  const { setUser, handleGoogleSignIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  // 🔹 STATE FOR AUTO-FILL
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔹 DEMO USER CREDENTIAL
  const demoUser = {
    email: "user@demo.com",
    password: "User@123",
  };

  // 🔹 AUTO-FILL HANDLER
  const fillDemoUser = () => {
    setEmail(demoUser.email);
    setPassword(demoUser.password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        toast.success("Logged in successfully!");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then((result) => {
        setUser(result.user);
        toast.success("Logged in successfully!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleForget = () => {
    navigate(`/forget/${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-900 transition-all">
      <div className="rounded-2xl shadow-2xl p-8 w-[380px] border bg-white dark:bg-gray-800 dark:border-gray-700 transition-all">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6">
          Login to PAW MART
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="font-medium text-gray-800 dark:text-gray-200">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 mt-1 rounded-lg border dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring focus:ring-blue-300 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="font-medium text-gray-800 dark:text-gray-200">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 mt-1 rounded-lg border dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring focus:ring-blue-300 outline-none"
              required
            />
          </div>

          {/* Forgot Password */}
          <button
            onClick={handleForget}
            type="button"
            className="text-sm text-gray-600 dark:text-gray-300 hover:underline"
          >
            Forgot Password?
          </button>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 hover:from-purple-500 hover:to-blue-600 transition-all"
          >
            Login
          </button>

          {/* 🔹 DEMO USER BUTTON */}
          <button
            type="button"
            onClick={fillDemoUser}
            className="w-full py-2 text-sm font-semibold rounded-lg bg-green-500 text-white hover:bg-green-600"
          >
            Login as Demo User
          </button>

          {/* Google Login */}
          <button
            type="button"
            onClick={googleSignIn}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 font-semibold text-gray-800 dark:text-gray-200 rounded-lg border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <FcGoogle size={22} />
            Continue with Google
          </button>

          {/* Register */}
          <div className="text-center mt-3 text-gray-700 dark:text-gray-300">
            Don&apos;t have an account?{" "}
            <Link
              to="/Signup"
              className="text-blue-600 dark:text-blue-300 font-semibold hover:underline"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
