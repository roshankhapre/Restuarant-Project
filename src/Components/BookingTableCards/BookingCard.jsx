import React from "react";
import { selectedAssets } from "../../assets/assets";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const servicesBooking = [
  {
    id: 1,
    title: "Cafe Services",
    description:
      "Relax and enjoy premium coffees, freshly baked pastries, and light meals in a cozy atmosphere.",
    img: selectedAssets.cafeinterior,
  },
  {
    id: 2,
    title: "Restaurant Services",
    description:
      "Savor meticulously crafted dishes in an elegant setting, perfect for every occasion.",
    img: selectedAssets.restauranthall,
  },
  {
    id: 3,
    title: "Rooftop Services",
    description:
      "Dine under the stars with breathtaking city views and a gourmet menu tailored for you.",
    img: selectedAssets.roofdining,
  },
  {
    id: 4,
    title: "Hotel Services",
    description:
      "Experience ultimate comfort in our plush rooms, designed for relaxation and rejuvenation.",
    img: selectedAssets.hotelroom,
  },
];

const BookingCard = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen py-12 px-6 sm:px-10 lg:px-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="inline-block text-3xl sm:text-4xl lg:text-5xl font-semibold text-white bg-gradient-to-r from-red-500 to-pink-500 py-2 px-6 rounded-full shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
          Our Services
        </h2>
        <div className="mt-10">
          <h4 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8">
            Explore Our Services
          </h4>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesBooking.map((service) => (
          <div
            key={service.id}
            className="border p-4 sm:p-6 rounded-xl shadow-xl bg-white bg-opacity-80 backdrop-filter transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-40 sm:h-48 lg:h-64 object-cover rounded-lg mb-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300 ease-in-out rounded-lg"></div>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-2">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-center text-base sm:text-lg lg:text-xl font-semibold mb-4 py-4">
              {service.description}
            </p>

            {/* Button */}
            <div className="flex justify-center py-4">
              <button className="flex items-center justify-center gap-2 text-white text-sm sm:text-lg bg-gradient-to-r from-red-500 to-pink-500 px-4 py-2 sm:px-6 sm:py-3 rounded-md shadow-md hover:from-purple-600 hover:to-pink-600 transform transition-transform duration-300 ease-in-out hover:scale-105">
                Read More
                <ArrowForwardIcon className="ml-2 transform transition-transform duration-300 hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingCard;
