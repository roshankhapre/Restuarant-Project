import React from "react";
import { selectedAssets } from "../../assets/assets";
import CoffeeIcon from "@mui/icons-material/Coffee";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HotelIcon from "@mui/icons-material/Hotel";
import TableBarIcon from "@mui/icons-material/TableBar";

const artImages = [
  {
    id: 1,
    title:
      "The ambiance of this café is truly relaxing. Their signature lattes and freshly baked croissants are absolutely delightful! I always feel refreshed after visiting this place. Highly recommend it for a casual meet-up or work from café.",
    themeImage: selectedAssets.cafe5,
    themeName: "Our Cafe Interior",
  },
  {
    id: 2,
    title:
      "A hidden gem for coffee lovers! The cappuccino was rich and smooth, and the pastries were heavenly. I also loved the quiet atmosphere, making it a perfect spot for reading or working.",
    themeImage: selectedAssets.restaurantimage,
    themeName: "Our Restaurant Interior",
  },
  {
    id: 3,
    title:
      "This café is my go-to spot for weekend brunch. The food is delicious, and the staff are always so welcoming. I’m always impressed with the freshness of the ingredients and the seasonal dishes they offer.",
    themeImage: selectedAssets.rooftop,
    themeName: "Our RoofTop Interior",
  },
  {
    id: 4,
    title:
      "This café is my go-to spot for weekend brunch. The food is delicious, and the staff are always so welcoming. I’m always impressed with the freshness of the ingredients and the seasonal dishes they offer.",
    themeImage: selectedAssets.hotelroom1,
    themeName: "Our Room Interior",
  },
];

const ArtGallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-black via-gray-950 to-black py-12">
      <div className="text-center mb-12 px-4">
        <h1 className="inline-block mt-10 text-white bg-red-700 text-3xl md:text-4xl font-bold rounded-lg shadow-lg px-6 py-3">
          ART GALLERY
        </h1>
      </div>

      {/* Icons Section */}
      <div className="flex flex-wrap justify-center space-x-6 lg:space-x-10 space-y-6 lg:space-y-0 mb-12 px-4">
        <div className="flex flex-col items-center">
          <CoffeeIcon className="text-yellow-500 text-5xl lg:text-6xl" />
          <p className="text-white mt-2 text-sm md:text-base">Cafe</p>
        </div>
        <div className="flex flex-col items-center">
          <RestaurantIcon className="text-yellow-500 text-5xl lg:text-6xl" />
          <p className="text-white mt-2 text-sm md:text-base">Restaurant</p>
        </div>
        <div className="flex flex-col items-center">
          <HotelIcon className="text-yellow-500 text-5xl lg:text-6xl" />
          <p className="text-white mt-2 text-sm md:text-base">Hotel</p>
        </div>
        <div className="flex flex-col items-center">
          <TableBarIcon className="text-yellow-500 text-5xl lg:text-6xl" />
          <p className="text-white mt-2 text-sm md:text-base">RoofTop</p>
        </div>
      </div>

      {/* Art Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8 lg:px-12">
        {artImages.map((artGallery) => (
          <div
            key={artGallery.id}
            className="relative border border-gray-300 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 group"
          >
            <img
              src={artGallery.themeImage}
              alt={artGallery.themeName}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:opacity-90"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="text-center p-4 md:p-6">
                <h2 className="text-white text-lg md:text-xl font-bold mb-2 md:mb-3">
                  {artGallery.themeName}
                </h2>
                <p className="text-white text-xs md:text-sm leading-relaxed">
                  {artGallery.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtGallery;
