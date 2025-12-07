import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

const Services = () => {
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState('');
  useEffect(() => {
    fetch(`https://missionscic10-tau.vercel.app/services?category=${category}`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
      console.log("akash")
  }, [category]);
  console.log(category)

  return (
    <div className="px-4 sm:px-10 lg:px-[145px]">
      <select onChange={(e)=>setCategory(e.target.value)} defaultValue="Pick a Category" className="select mt-8">
        <option disabled={true}>Choose Category</option>
        <option value="Pets">Pets</option>
        <option value="Food">Food</option>
        <option value="Accessories">Accessories</option>
        <option value="Care Products">Care Products</option>
      </select>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-6">

        {services.map((service) => (
          <motion.div
            key={service?._id}
            initial={{ scale: 0.9 }}
            animate={{
              scale: 1,
              transition: { duration: 1 },
            }}
            className="card bg-base-100 w-full shadow-sm"
          >
            {/* IMAGE */}
            <figure>
              <img
                className="w-full h-[240px] sm:h-[260px] md:h-[300px] object-cover"
                src={service?.image}
                alt={service?.name}
              />
            </figure>

            {/* CARD BODY */}
            <div className="card-body">
              <h2 className="card-title text-lg md:text-xl font-bold">
                {service?.name}
              </h2>

              {/* CATEGORY */}
              <p className="text-sm text-gray-500 font-semibold">
                Category: <span className="text-gray-800">{service?.category}</span>
              </p>

              {/* PRICE + LOCATION */}
              <div className="flex justify-between text-sm md:text-base">
                <p className="text-gray-600 font-semibold">
                  💲 Price: <span className="font-bold text-gray-900">{service?.price}</span>
                </p>
                <p className="text-gray-600 font-semibold">
                  📍 {service?.location}
                </p>
              </div>

              {/* Date */}
              <p className="text-xs text-gray-500">
                Added on: {new Date(service?.date).toLocaleDateString()}
              </p>

              {/* DETAILS BUTTON */}
              <div className="card-actions justify-end">
                <Link to={`/mpdetails/${service?._id}`}>
                  <button className="btn btn-primary text-sm md:text-base">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Services;
