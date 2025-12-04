import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";


const Profile = () => {
  const { setUser,user } = useContext(AuthContext);
  console.log(user);

  // for update form button
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const photoURL = e.target.photoURL.value;

    updateProfile(auth.currentUser, {
      displayName: fullName,
      photoURL: photoURL,
    })
      .then(() => {
        setUser({...user, photoURL:photoURL, displayName:fullName});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center  p-6">
      <div className="max-w-xl w-full bg-white shadow-xl rounded-2xl p-8 text-center">
        {/* Profile Image */}
        <img
          src={user?.photoURL}
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full border-4 border-amber-500 shadow-md"
        />

        {/* Name */}
        <h2 className="mt-4 text-3xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
          {user?.displayName}
        </h2>

        {/* Email */}
        <p className="text-gray-600 mt-1">{user?.email}</p>

        {/* Update Button */}
        <button
          //   onClick={() => setShowForm(!showForm)}
          onClick={handleOpenForm}
          className="mt-6 px-6 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-400 hover:from-yellow-400 hover:via-orange-500 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Update Profile
        </button>

        {isOpen && (
          <div className="items-center  ">
            <form onSubmit={handleUpdate} className="mt-10 space-y-4 text-left ">
              <div>
                <label className="font-semibold">Name</label>
                <input
                  type="text"
                    name="fullName"
                  className="w-full p-3 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="font-semibold">Photo URL</label>
                <input
                  type="text"
                   name="photoURL"
                  className="w-full p-3 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Your PhotoURL"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-400 hover:from-yellow-400 hover:via-orange-500 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                Save Changes
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
