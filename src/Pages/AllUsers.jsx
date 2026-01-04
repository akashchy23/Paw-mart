import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://missionscic10-tau.vercel.app/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Users</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-5 text-left">Photo</th>
              <th className="py-3 px-5 text-left">Full Name</th>
              <th className="py-3 px-5 text-left">Email</th>
              <th className="py-3 px-5 text-left">Role</th>
              <th className="py-3 px-5 text-left">Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map(user => (
                <tr key={user._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-5">
                    <img
                      src={user.photo}
                      alt={user.fullName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </td>
                  <td className="py-3 px-5">{user.fullName}</td>
                  <td className="py-3 px-5">{user.email}</td>
                  <td className="py-3 px-5 capitalize">
                    <span
                      className={`px-2 py-1 rounded-full text-white text-sm ${
                        user.role === 'admin' ? 'bg-red-500' : 'bg-green-500'
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3 px-5">
                    {new Date(user.createAt).toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
