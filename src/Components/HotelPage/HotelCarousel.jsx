import React from "react";
import { hotelRoomImages } from "../../assets/assets";
const hotelRooms = [
  {
    id: 1,
    img: hotelRoomImages.hotelroom1,

    title: "Welcome to Our Deluxe Hotel Rooms",
    description: "Luxury comfort and style await you.",
    button1: "Book Now",
    button2: "Explore Rooms",
  },
];

const HotelCarousel = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-pink-50">
      <div className="relative w-full h-full">
        {hotelRooms.map((room) => (
          <div key={room.id} className="relative w-full h-full">
            {/* Background image */}
            <img
              src={room.img}
              alt={room.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />

            {/* Overlay container for text and buttons */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white text-center p-4">
              <h1 className="text-4xl font-extrabold mb-4 tracking-tight leading-snug drop-shadow-lg">
                {room.title}
              </h1>
              <p className="text-lg mb-8 drop-shadow-md">{room.description}</p>
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 rounded-full shadow-lg text-white font-semibold">
                  {room.button1}
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 transition-all duration-300 rounded-full shadow-lg text-white font-semibold">
                  {room.button2}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelCarousel;
