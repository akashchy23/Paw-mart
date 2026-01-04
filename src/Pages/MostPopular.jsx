import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const MostPopular = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://missionscic10-tau.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 md:py-10">
      <h2
        className="font-extrabold text-2xl sm:text-3xl md:text-4xl 
        text-center mb-6 md:mb-8 
        bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 
        bg-clip-text text-transparent drop-shadow-lg"
      >
        Most Popular Service
      </h2>

      <div
        className="grid grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6"
      >
        {data.slice(0, 8).map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-lg rounded-xl overflow-hidden border 
            hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full 
              h-[200px] sm:h-[220px] md:h-[200px] lg:h-[190px] 
              object-cover"
            />

            <div className="p-4 md:p-5 space-y-2">
              <h3 className="text-lg md:text-xl font-semibold line-clamp-1">
                {item.name}
              </h3>

              <p className="text-sm text-gray-600">
                Category:{" "}
                <span className="font-medium text-black">
                  {item.category}
                </span>
              </p>

              <p className="text-sm text-gray-600">
                Location:{" "}
                <span className="font-medium text-black">
                  {item.location}
                </span>
              </p>

              <p className="text-sm text-gray-600">
                Date:{" "}
                <span className="font-medium text-black">
                  {item.date}
                </span>
              </p>

              <p className="text-gray-700 text-sm line-clamp-2">
                {item.description}
              </p>

              <p className="text-lg font-bold text-blue-600">
                Price: {item.price === 0 ? "Free" : `${item.price} BDT`}
              </p>

              <Link to={`/mpdetails/${item?._id}`}>
                <button
                  className="mt-3 w-full py-2 
                  bg-blue-600 text-white rounded-md 
                  hover:bg-blue-700 transition-colors"
                >
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
