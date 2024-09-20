import React from "react";
import { cafeImages } from "../../assets/assets";

const cafeServices = [
  {
    id: 1,
    serviceName: "Birthday Party",
    serviceDescription:
      "Celebrate your special moments with us. We offer the best environment for an unforgettable birthday party.",
    serviceIcon: cafeImages.cafeService1,
  },
  {
    id: 2,
    serviceName: "Meetings",
    serviceDescription:
      "Organize your business meetings in a cozy and quiet place, away from the hustle and bustle.",
    serviceIcon: cafeImages.cafeService2,
  },
  {
    id: 3,
    serviceName: "Kitty Party",
    serviceDescription:
      "Host your kitty parties with friends and family with our comfortable seating and vibrant ambiance.",
    serviceIcon: cafeImages.cafeService3,
  },
];

const CafeServices = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-20">
      <div className="text-center w-full max-w-6xl px-4">
        <h1 className="inline-block text-white bg-red-700 text-3xl md:text-4xl font-bold rounded-lg shadow-lg px-8 py-4 mb-16">
          OUR CAFE SERVICES
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {cafeServices.map((cafeService) => (
            <div
              key={cafeService.id}
              className="bg-white rounded-xl shadow-xl p-8 flex flex-col justify-between h-full transform transition-all duration-500 "
            >
              <div className="flex flex-col items-center">
                <img
                  src={cafeService.serviceIcon}
                  alt={cafeService.serviceName}
                  className="w-24 h-24 mb-6 rounded-full border-4 border-red-200 shadow-md"
                />
                <h2 className=" text-4xl font-semibold text-gray-800 mb-4 text-center">
                  {cafeService.serviceName}
                </h2>
                <p className="text-gray-600 text-center mb-8 leading-relaxed">
                  {cafeService.serviceDescription}
                </p>
              </div>
              <div className="flex justify-center w-full mt-auto">
                <button className="bg-red-700 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-800 transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CafeServices;
