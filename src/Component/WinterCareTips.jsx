import React from "react";
import { FaHome, FaPaw, FaDog, FaBath } from "react-icons/fa";

const WinterCareTips = () => {
  const tips = [
    {
      id: 1,
      title: "Keep Your Pet Warm Indoors",
      details:
        "Give your pets soft blankets and avoid keeping them on cold floors to protect them from freezing temperatures.",
      icon: <FaHome size={32} className="text-blue-600" />,
    },
    {
      id: 2,
      title: "Protect Their Paws in Winter",
      details:
        "Snow and ice can damage paws. Use paw wax or protective winter boots when going outdoors.",
      icon: <FaPaw size={32} className="text-blue-600" />,
    },
    {
      id: 3,
      title: "Provide High-Energy Winter Diet",
      details:
        "Pets burn more calories in cold months. Offer nutritious food to keep their metabolism strong and healthy.",
      icon: <FaDog size={32} className="text-blue-600" />,
    },
    {
      id: 4,
      title: "Avoid Frequent Winter Bathing",
      details:
        "Bathing too often removes natural oils and causes skin dryness. Reduce bath frequency during winter.",
      icon: <FaBath size={32} className="text-blue-600" />,
    },
  ];

  return (
    <div className="mb-10">
      <div className="mt-20 px-5 sm:px-10 lg:px-[140px]">
        <h3 className="font-bold text-3xl text-center mb-3">
          Winter Care Tips for Pets
        </h3>
        <p className="text-center text-gray-600 mb-10 w-full sm:w-[80%] lg:w-[70%] mx-auto">
          Keep your furry friends safe and comfortable during the cold season
          with these vet-approved winter care 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="flex gap-4 bg-gradient-to-br from-white to-blue-50 border rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mt-1">{tip.icon}</div>

              <div>
                <h4 className="text-xl font-semibold">{tip.title}</h4>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {tip.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinterCareTips;
