import React, { useEffect, useState } from "react";
import { reviewImages } from "../../assets/assets";
import { FaStar } from "react-icons/fa";

const customerImages = [
  {
    id: 1,
    review:
      "The ambiance of this café is truly relaxing. Their signature lattes and freshly baked croissants are absolutely delightful! I always feel refreshed after visiting this place. Highly recommend it for a casual meet-up or work from café.",
    image: reviewImages.review1,
    name: "Rohit Sharma",
    ratings: 5,
  },
  {
    id: 2,
    review:
      "A hidden gem for coffee lovers! The cappuccino was rich and smooth, and the pastries were heavenly. I also loved the quiet atmosphere, making it a perfect spot for reading or working.",
    image: reviewImages.review2,
    name: "Rohan Singh",
    ratings: 4,
  },
  {
    id: 3,
    review:
      "This café is my go-to spot for weekend brunch. The food is delicious, and the staff are always so welcoming. I’m always impressed with the freshness of the ingredients and the seasonal dishes they offer.",
    image: reviewImages.review3,
    name: "Ananya Verma",
    ratings: 5,
  },
];

const HomeReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection("left");
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === customerImages.length - 1 ? 0 : prevIndex + 1
        );
        setSlideDirection("right");
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const generateStars = (ratings) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`text-yellow-500 ${index < ratings ? "fill-current" : ""}`}
      />
    ));
  };

  const currentReview = customerImages[currentIndex];

  return (
    <div
      className="py-20 px-4 md:px-8 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${reviewImages.reviewBack})`,
      }}
    >
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-md font-bold text-white text-2xl md:text-3xl lg:text-4xl shadow-xl">
          CUSTOMER FEEDBACK
        </h2>
      </div>

      {/* Subtitle */}
      <div className="my-6">
        <h4 className="text-center font-semibold text-2xl md:text-3xl lg:text-4xl mb-8 text-red-500">
          WHAT OUR CUSTOMERS ARE SAYING
        </h4>
      </div>

      {/* Review Section with Sliding Animation */}
      <div className="flex justify-center items-center overflow-hidden">
        <div
          className={`flex flex-col lg:flex-row items-center bg-white bg-opacity-90 rounded-lg shadow-lg transition-transform duration-500 transform ${
            slideDirection === "left"
              ? "animate-slideOutLeft"
              : "animate-slideInRight"
          } w-full md:w-4/5 lg:w-3/4`}
        >
          {/* Image Section */}
          <div className="flex flex-col items-center p-4 lg:p-8 w-full lg:w-1/3">
            <img
              src={currentReview.image}
              alt={currentReview.name}
              className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover rounded-full mb-4 lg:mb-6 border-4 border-red-500 shadow-lg"
            />
            <div className="flex justify-center mb-2">
              {generateStars(currentReview.ratings)}
            </div>
          </div>

          {/* Review Text Section */}
          <div className="p-4 lg:p-8 w-full lg:w-2/3">
            <p className="text-gray-800 text-lg md:text-xl lg:text-2xl mb-4 lg:mb-6 italic font-semibold leading-relaxed">
              "{currentReview.review}"
            </p>
            <p className="text-gray-600 text-right text-base md:text-lg lg:text-xl font-bold">
              - {currentReview.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeReview;
