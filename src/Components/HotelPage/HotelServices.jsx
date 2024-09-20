import React from "react";
import { hotelRoomImages } from "../../assets/assets";

const hotelServices = [
  {
    id: 1,
    img: hotelRoomImages.cafeImg,
    title: "Our Reception",
    description: `Welcome to K's Darshan Hotel, where luxury meets comfort. 
    Our reception area is designed to provide you with a warm and inviting atmosphere.
    Whether you're checking in or out, we are here to ensure your stay is smooth and relaxing.`,
  },
  {
    id: 2,
    img: hotelRoomImages.restaurantimage,
    title: "Our Restaurant For Lunch and Dinner",
    description: `Indulge in a gourmet experience at our restaurant. From traditional to contemporary dishes,
    we offer a wide range of cuisines crafted by our expert chefs. Pair your meal with the perfect drink from our curated menu.`,
  },
];

const HotelServices = () => {
  return (
    <div className="container mx-auto py-16">
      {/* Section Title */}
      <div className="text-center w-full px-4 mb-16">
        <h1 className="inline-block text-white bg-red-700 text-4xl md:text-3xl font-bold rounded-lg shadow-lg px-6 py-4">
          K's DARSHAN <br />
          HOTEL SERVICES
        </h1>
        <p className="text-lg mt-4 text-gray-600 max-w-3xl mx-auto py-10">
          Experience the best in hospitality and culinary delights at K's
          Darshan Hotel. From our welcoming reception to our exquisite
          restaurant, we ensure your comfort and satisfaction every step of the
          way.
        </p>
      </div>

      {/* Hotel Services Section */}
      <div className="space-y-24">
        {hotelServices.map((service, index) => (
          <div
            key={service.id}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-16"
          >
            {/* Conditional ordering for text and image */}
            <div
              className={`${
                index % 2 === 1 ? "md:order-2" : "md:order-1"
              } space-y-6 px-6`}
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {service.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <button className="mt-6 px-8 py-3 text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md transition-all duration-300 transform ">
                Explore More
              </button>
            </div>

            <div
              className={`${
                index % 2 === 1 ? "md:order-1" : "md:order-2"
              } overflow-hidden rounded-lg shadow-xl relative`}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-80 md:h-[350px] object-cover rounded-lg transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelServices;
