import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const PopularSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./Data.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-16 px-4 md:px-[80px] lg:px-[140px]">

      {/* Section Title */}
      <h3 className="font-extrabold text-3xl md:text-4xl text-center mb-8 bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
        Popular Winter Care Services
      </h3>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-8">
        {services.slice(0, 6).map((service) => (
          <div
            key={service.serviceId}
            className="card bg-[#0f1b33]/50 backdrop-blur-lg border border-blue-500/30 shadow-lg hover:shadow-blue-500/40 hover:-translate-y-2 transition-all duration-300 rounded-xl"
          >
            <figure>
              <img
                className="w-full h-[260px] md:h-[300px] object-cover rounded-t-xl"
                src={service?.image}
                alt={service?.serviceName}
              />
            </figure>

            <div className="card-body text-white">
              <h2 className="card-title text-xl font-bold text-blue-200">
                {service?.serviceName}
              </h2>

              <div className="flex items-center justify-between text-sm md:text-base mt-2">
                <p className="font-medium text-blue-100">
                  💲 Price:{" "}
                  <span className="font-semibold text-blue-300">
                    {service?.price}
                  </span>
                </p>

                <p className="font-medium text-blue-100">
                  ⭐ Rating:{" "}
                  <span className="text-blue-300">{service?.rating}</span>
                </p>
              </div>

              <div className="card-actions justify-end mt-4">
                <Link to={`/details/${service?.serviceId}`}>
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white font-semibold text-sm md:text-base shadow-md hover:shadow-blue-400/40 hover:scale-105 transition-all duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
