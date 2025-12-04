import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);

  const { myId } = useParams();
  console.log(myId);

  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  const findResult = services.find((service) => service.serviceId == myId);
  console.log(findResult);

  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-2xl p-10 flex flex-col lg:flex-row gap-10">
        {/* Left — Image */}
        <div className="lg:w-1/2">
          <img
            src={findResult?.image}
            alt={findResult?.serviceName}
            className="w-full rounded-xl shadow-md"
          />
        </div>

        {/* Right — Details + Form */}
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold mb-4">{findResult?.serviceName}</h1>

          <p>
            <span className="font-semibold">Category:</span>{" "}
            {findResult?.category}
          </p>
          <p>
            <span className="font-semibold">Provider:</span>{" "}
            {findResult?.provider}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {findResult?.email}
          </p>

          <p className="flex items-center gap-2">
            <span className="font-semibold">Rating:</span> ⭐{" "}
            {findResult?.rating}
          </p>

          <p>
            <span className="font-semibold">Slots Available:</span>{" "}
            {findResult?.slots}
          </p>

          <p className="text-gray-700">{findResult?.description}</p>

          <p className="text-lg font-bold">Price: ${findResult?.price}</p>

          {/* Booking Form */}
          <div className="mt-6 pt-6 border-t">
            <h2 className="text-3xl font-bold text-center mb-5">
              Book Session
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Booked successfully!", {
                  autoClose: 2000,
                  pauseOnHover: false,
                });
                e.target.reset();
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              />

              <button
                type="submit"
                className="w-full py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
