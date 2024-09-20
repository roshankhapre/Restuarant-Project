import React from "react";
import { hotelRoomImages } from "../../assets/assets";

const hotelRoom = [
  {
    id: 1,
    img: hotelRoomImages.hotelroom1,
  },
  {
    id: 2,

    img: hotelRoomImages.restaurantimage,
  },
  {
    id: 3,
    img: hotelRoomImages.hotelroom2,
  },
];

const HotelRooms = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-t from-gray-100 via-gray-200 to-red-100 flex flex-col items-center justify-center px-8">
      {/* Rooms View Heading */}
      <div className="absolute top-10 w-full flex justify-center">
        <h1 className="inline-block text-white p-6 bg-red-700 rounded-lg text-4xl font-bold shadow-xl tracking-wide transform ">
          ROOMS VIEW
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 w-full justify-between items-center pt-20">
        {/* Left Side: Text Section */}
        <div className="flex-1 space-y-4 text-center md:text-left py-6">
          <h2 className="text-5xl font-bold text-gray-800 py-6">
            RELAX IN OUR ROOMS
          </h2>
          <h3 className="text-2xl text-gray-600 max-w-md mx-auto md:mx-0">
            Experience the comfort and breathtaking views in our luxurious rooms
            and restaurant.
          </h3>
          <button className="bg-red-500 hover:bg-red-600 text-white text-lg rounded-lg px-6 py-3 mt-4 shadow-lg hover:shadow-xl transition-shadow duration-300 ">
            About Us
          </button>
        </div>

        {/* Right Side: Image Section */}
        <div className="flex-1 relative flex items-center justify-center">
          {hotelRoom.map((room, index) => (
            <div
              key={room.id}
              className={`absolute w-80 h-80 transform transition-transform duration-500 ${
                index === 0
                  ? "top-0 left-12"
                  : index === 1
                  ? "top-16 left-72"
                  : "-bottom-12 left-36 "
              }`}
              style={{
                zIndex: 10 - index,
                transform: `translateY(${index * 20}px)`,
              }}
            >
              <img
                src={room.img}
                alt={`Room ${room.id}`}
                className="w-full h-full object-cover rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelRooms;
