import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    comment:
      "Warm Paw treated my puppy so warmly during winter grooming! Their service is absolutely !",
    image: "https://i.ibb.co.com/d48LWRtx/business-woman-working-home.jpg",
  },
  {
    id: 2,
    name: "Michael Brown",
    comment:
      "My cat had a dry skin problem every winter — but after their nutrition package, she is doing great!",
    image: "https://i.ibb.co.com/0y3SLTb0/confident-african-american-businessman-brown-classic-jacket-isolated-dark-background.jpg",
  },
  {
    id: 3,
    name: "Emily Davis",
    comment:
      "Their vets are so caring and friendly! I highly recommend all winter services for pets.",
    image: "https://i.ibb.co.com/PzGCnYYB/woman-with-face-full-paint.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="mt-20 px-5 sm:px-10 lg:px-[140px]">
      <h3 className="font-bold text-3xl text-center mb-10">
        What Pet Owners Say
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((person) => (
          <div
            key={person.id}
            className="p-6 border rounded-xl shadow-md bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <img
                src={person.image}
                alt={person.name}
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <div className="text-amber-600 flex justify-center mb-3">
              <FaQuoteLeft size={24} />
            </div>
            <p className="text-gray-600 text-center mb-4 leading-relaxed">
              "{person.comment}"
            </p>
            <h4 className="font-semibold text-lg text-center">{person.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
