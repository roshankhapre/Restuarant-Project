import React from "react";
import { cafeImages } from "../../assets/assets";

const cafeGallery = [
  {
    id: 1,
    img: cafeImages.cafe1,
    title: "Cozy Atmosphere",
    description: "A perfect place to relax and enjoy your coffee.",
  },
  {
    id: 2,
    img: cafeImages.cafe2,
    title: "Our Delicious Menu",
    description: "Serving the best drinks and snacks in town.",
  },
  {
    id: 3,
    img: cafeImages.cafe3,
    title: "Friendly Staff",
    description: "Welcoming you with warm smiles and excellent service.",
  },
  {
    id: 4,
    img: cafeImages.cafe4,
    title: "Modern Interior",
    description: "A comfortable and stylish setting for any occasion.",
  },
  {
    id: 5,
    img: cafeImages.cafe5,
    title: "Relaxing Vibes",
    description: "Unwind with soothing music and great company.",
  },
  {
    id: 6,
    img: cafeImages.cafe1,
    title: "Cozy Atmosphere",
    description: "A perfect place to relax and enjoy your coffee.",
  },
];

const CafeGallery = () => {
  return (
    <div className="relative w-full h-auto py-16 bg-gradient-to-b from-black via-gray-800 to-black">
      <div className="text-center mb-10">
        <h1 className="inline-block mt-10 text-white bg-red-700 text-3xl md:text-4xl font-bold rounded-lg shadow-lg px-6 py-3">
          OUR CAFE GALLERY
        </h1>
        <p className="mt-4 py-10 text-2xl text-pink-400">
          Discover the charm of our cozy and modern cafe
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {cafeGallery.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-72 object-cover transition-transform duration-700 transform group-hover:scale-105 filter brightness-90 saturate-120"
              loading="lazy"
              onError={(e) => {
                console.error(`Failed to load image: ${item.img}`);
                e.target.src = "fallback-image-url"; // Update to a valid fallback URL
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6">
              <h2 className="text-white text-2xl font-bold mb-2 drop-shadow-lg">
                {item.title}
              </h2>
              <p className="text-white text-sm drop-shadow-md">
                {item.description}
              </p>
            </div>
            <div className="absolute inset-0 bg-pink-500 bg-opacity-10 group-hover:bg-opacity-30 transition duration-700"></div>
            {/* Add a glowing border effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-400 rounded-lg transition-all duration-700"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CafeGallery;
