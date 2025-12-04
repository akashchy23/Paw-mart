import React from "react";

const MeetOurVet = () => {
  const vets = [
    {
      id: 1,
      name: "Dr. Olivia Matthews",
      specialty: "Winter Pet Health Specialist",
      exp: "10 years of experience",
      image: "https://i.ibb.co.com/0pcxtLDm/Doctor-1.jpg",
    },
    {
      id: 2,
      name: "Dr. Ethan Collins",
      specialty: "Skin & Coat Care Expert",
      exp: "8 years of experience",
      image: "https://i.ibb.co.com/RGxjnyfT/Doctor-2.jpg",
    },
    {
      id: 3,
      name: "Dr. Sophia Reyes",
      specialty: "Pet Nutrition Consultant",
      exp: "7 years of experience",
      image: "https://i.ibb.co.com/LXRtkhSG/Doctor-3.jpg",
    },
  ];

  return (
    <div>
      <div className="mt-20 px-5 sm:px-10 lg:px-[140px]">
        <h3 className="font-bold text-3xl text-center mb-10">
          Meet Our Expert Vets
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vets.map((vet) => (
            <div
              key={vet.id}
              className="card w-full sm:w-72 lg:w-80 bg-base-100 shadow mx-auto"
            >
              <figure>
                <img
                  className="h-[260px] w-full object-cover"
                  src={vet.image}
                  alt={vet.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{vet.name}</h2>
                <p>{vet.specialty}</p>
                <p className="text-gray-600">{vet.exp}</p>
                <div className="card-actions justify-left">
                  <button className="btn btn-primary">Book Appointment</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurVet;
