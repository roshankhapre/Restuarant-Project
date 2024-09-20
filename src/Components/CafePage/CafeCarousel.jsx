import React, { useEffect, useState } from "react";
import { cafeImages } from "../../assets/assets";

const cafeImage = [
  {
    id: 1,
    title: "Welcome to Our K's Darshan",
    subtitle: "Where Every Sip Brings Joy",
    description:
      "Indulge in the finest handcrafted coffee and delightful treats in a cozy, pink-themed ambiance.",
    cafeImg: cafeImages.cafeImg,
    button1: "Book Your Table",
    button2: "Explore Our Menu",
  },
  {
    id: 2,
    title: "A Culinary Experience Like No Other",
    subtitle: "Delicious, Creative, and Satisfying",
    description:
      "Explore a variety of cuisines and beverages carefully curated to satisfy your cravings.",
    cafeImg: cafeImages.cafeImg1,
    button1: "Reserve Now",
    button2: "View Our Dishes",
  },
  {
    id: 3,
    title: "The Perfect Place to Unwind",
    subtitle: "Relax, Sip, and Savor",
    description:
      "Whether you're working or socializing, our cozy pink-hued interiors provide the perfect backdrop.",
    cafeImg: cafeImages.cafeImg2,
    button1: "Order Online",
    button2: "Visit Us",
  },
];

const CafeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === cafeImage.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-pink-100">
      <div className="relative w-full h-full flex justify-center items-center">
        {cafeImage.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <img
              src={item.cafeImg}
              alt={item.title}
              className=" w-full h-full object-cover brightness-75"
              onError={(e) => {
                console.error(`Failed to load image: ${item.cafeImg}`);
                e.target.src = "fallback-image-url"; // Optional fallback
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
              <h2 className="font-caveat text-9xl font-bold text-white mb-2 drop-shadow-lg">
                {item.title}
              </h2>
              <p className="font-merienda text-2xl text-white mb-4 shadow-md shadow-pink-400">
                {item.subtitle}
              </p>
              <p className="text-lg text-gray-200 mb-8 px-8 shadow-md shadow-gray-700 max-w-2xl leading-relaxed">
                {item.description}
              </p>
              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-600 hover:to-pink-400 text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out shadow-xl shadow-pink-600/50 transform hover:scale-110">
                  {item.button1}
                </button>
                <button className="bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-600 hover:to-teal-400 text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out shadow-xl shadow-teal-600/50 transform hover:scale-110">
                  {item.button2}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {cafeImage.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500 ${
              index === currentIndex
                ? "bg-gradient-to-r from-pink-400 to-teal-400 transform scale-125"
                : "bg-gray-500 transform scale-100"
            }`}
          >
            <span
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CafeCarousel;
