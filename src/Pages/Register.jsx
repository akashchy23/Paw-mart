import { FcGoogle } from "react-icons/fc";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";


const Register = () => {
  const navigate =  useNavigate();
  const { registerWithEmailPassword, setUser, user, handleGoogleSignIn } =
    useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const fullName = e.target.fullName.value;
    const photoURL = e.target.photoURL.value;

    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

    if (password.length < 6) {
      return alert("less than 6 characters");
    }
    if (!uppercase.test(password)) {
      return alert("Need a Uppercase");
    }
    if (!lowercase.test(password)) {
      return alert("Need a Lowercase");
    }

    registerWithEmailPassword(email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: fullName,
          photoURL: photoURL,
        })
          .then(() => {
            setUser(userCredential.user);
             navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(user);

  // for google sign in
  const googleSignIn = () => {
    handleGoogleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="rounded-2xl shadow-2xl p-8 w-[420px] border bg-white">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent mb-6">
          Create Your Warm Paw Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="font-medium">Full Name</label>
            <input
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 mt-1 rounded-lg border focus:ring focus:ring-amber-300 outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-medium">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 mt-1 rounded-lg border focus:ring focus:ring-amber-300 outline-none"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="font-medium">Photo URL</label>
            <input
              name="photoURL"
              type="text"
              placeholder="Enter your photo URL"
              className="w-full p-3 mt-1 rounded-lg border focus:ring focus:ring-amber-300 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="font-medium">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 mt-1 rounded-lg border focus:ring focus:ring-amber-300 outline-none"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full text-center px-6 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-400 hover:from-yellow-400 hover:via-orange-500 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Register
          </button>

          {/* Google Login */}
          <button
            type="button"
            onClick={googleSignIn}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 mt-2 font-semibold text-gray-700 rounded-lg border shadow-sm bg-white hover:shadow-md transition-all duration-300"
          >
            <FcGoogle />
            Continue with Google
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-amber-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
