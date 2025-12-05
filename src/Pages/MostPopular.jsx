import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const MostPopular = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-[1200px] mx-auto py-10">
      <h2  className="font-extrabold text-3xl md:text-4xl text-center mb-8 bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">Most Popular Service</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-lg rounded-xl overflow-hidden border"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold">{item.name}</h3>

              <p className="text-sm text-gray-600">
                Category: <span className="font-medium text-black">{item.category}</span>
              </p>

              <p className="text-sm text-gray-600">
                Location: <span className="font-medium text-black">{item.location}</span>
              </p>

              <p className="text-sm text-gray-600">
                Posted By: <span className="font-medium text-black">{item.email}</span>
              </p>

              <p className="text-sm text-gray-600">
                Date: <span className="font-medium text-black">{item.date}</span>
              </p>

              <p className="text-gray-700">{item.description}</p>

              <p className="text-lg font-bold text-blue-600">
                Price: {item.price === 0 ? "Free" : `${item.price} BDT`}
              </p>
               <Link to={`/mpdetails/${item?._id}`}>
                 <button className="mt-3 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                View Details
              </button>
               </Link>
             
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default MostPopular;
