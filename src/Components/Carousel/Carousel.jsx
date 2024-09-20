import React, { useState, useEffect } from "react";
import { selectedAssets } from "../../assets/assets"; // Import only the selectedAssets object
import WOW from "wowjs";
import "animate.css";

// Texts array for each image
const texts = [
  {
    title: "Welcome to K's Darshan Cafe And Restaurant",
    description:
      "Enjoy our selection of the finest meals and beverages in a relaxing atmosphere.",
    button1: "Book a Table",
    button2: "Explore More",
  },
  {
    title: "Welcome to our Cozy Cafe",
    description:
      "A perfect spot for coffee lovers, offering a wide range of delicious brews.",
    button1: "Reserve Now",
    button2: "Explore",
  },
  {
    title: "Experience Fine Dining",
    description:
      "Indulge in our exquisite menu and top-notch service in a stylish setting.",
    button1: "Reserve a Table",
    button2: "Discover More",
  },
  {
    title: "Relax in Our Beautiful Rooms",
    description:
      "Stay in one of our luxurious rooms with a beautiful view of the city.",
    button1: "Book a Room",
    button2: "View Rooms",
  },
  {
    title: "Enjoy the Rooftop Cafe",
    description:
      "Take in the fresh air and stunning views while sipping your favorite drink.",
    button1: "Reserve a Spot",
    button2: "Discover Now",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numVisibleIndicators = 3;
  const imagesArray = Object.values(selectedAssets);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, [imagesArray.length]);

  const visibleIndicatorsStart = Math.max(0, currentIndex - 1);
  const visibleIndicatorsEnd = Math.min(
    visibleIndicatorsStart + numVisibleIndicators,
    imagesArray.length
  );

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {imagesArray.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-[2000ms] ease-in-out ${
              index === currentIndex
                ? "opacity-100 scale-105 z-20"
                : "opacity-0 scale-100"
            }`}
          >
            {/* Carousel Image */}
            <img
              src={image}
              alt={texts[index]?.title || `Carousel slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {index === currentIndex && texts[index] && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-60 z-30 p-4 ">
                <h1 className="wow animate__animated animate__fadeInDown text-3xl sm:text-4xl lg:text-7xl font-bold mb-4 py-10">
                  {texts[index].title}
                </h1>
                <p className="wow animate__animated animate__fadeInUp text-lg sm:text-xl lg:text-2xl mb-4 py-20">
                  {texts[index].description}
                </p>
                <div className="flex space-x-4 z-40 mt-4">
                  <button className="wow animate__animated animate__bounceInLeft px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-xl lg:text-2xl rounded-lg bg-red-500 hover:bg-red-600 transition duration-300 shadow-lg hover:shadow-xl">
                    {texts[index].button1}
                  </button>
                  <button
                    className="wow animate__animated animate__bounceInRight px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-xl lg:text-2xl rounded-lg bg-red-500 hover:bg-red-600 transition duration-300 shadow-lg hover:shadow-xl"
                    onClick={() => alert(`${texts[index].button2} clicked!`)}
                  >
                    {texts[index].button2}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Indicator images */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50 mb-20">
        {imagesArray
          .slice(visibleIndicatorsStart, visibleIndicatorsEnd)
          .map((image, index) => (
            <button
              key={index + visibleIndicatorsStart}
              onClick={() => setCurrentIndex(index + visibleIndicatorsStart)}
              className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden ${
                currentIndex === index + visibleIndicatorsStart
                  ? "border-4 border-blue-500"
                  : "border-2 border-gray-400"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + visibleIndicatorsStart + 1} indicator`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
      </div>
    </div>
  );
};

export default Carousel;
