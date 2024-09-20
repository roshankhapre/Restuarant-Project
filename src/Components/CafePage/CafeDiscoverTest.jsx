import React from "react";
import { cafeImages } from "../../assets/assets";

const CafeDiscover = [
  {
    id: 1,
    img: cafeImages.cafeTest1,
    description: "Come And Taste Our Delicious Food",
  },
  {
    id: 2,
    img: cafeImages.cafeTest2,
    description: "Experience the Best Ambiance",
  },
  {
    id: 3,
    img: cafeImages.cafeTest3,
    description: "Savor the Flavor of Fresh Ingredients",
  },
  {
    id: 4,
    img: cafeImages.cafeTest4,
    description: "A Delight in Every Bite",
  },
];

const CafeDiscoverTest = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="mt-10 my-10">
        <h2 className="text-white bg-red-700 text-3xl px-10 py-5 rounded-lg text-center shadow-lg">
          Discover Your Taste In K's Darshan
        </h2>
      </div>
      <div className="">
        <h2 className="my-10 text-red-500 font-bold text-4xl  ">
          WE PROVIDE GOOD FOOD FOR YOUR FAMILY !
        </h2>
      </div>
      <div className="flex flex-row w-11/12 h-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side: Grid of Small Images */}
        <div className="flex-1 grid grid-cols-2 gap-6 p-8">
          {CafeDiscover.map((cafeDiscover) => (
            <div
              key={cafeDiscover.id}
              className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={cafeDiscover.img}
                alt={`Cafe ${cafeDiscover.id}`}
                className="w-40 h-40 rounded-full mb-4"
              />
              <p className="text-gray-700 font-semibold text-center">
                {cafeDiscover.description}
              </p>
            </div>
          ))}
        </div>
        {/* Right Side: Main Discovery Image */}
        <div className="flex-1 flex items-center justify-center relative p-8">
          <img
            src={cafeImages.cafeDiscover}
            alt="Cafe Discover"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CafeDiscoverTest;
