import React, { useState } from "react";
import { foodCategoryImages } from "../../assets/assets";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const categoriesData = {
  Breakfast: [
    {
      id: 1,
      image: foodCategoryImages.foodCategory1,
      mealName: "VEG SANDWICH",
      mealPrice: 50,
      ratings: 5,
    },
    {
      id: 2,
      image: foodCategoryImages.foodCategory2,
      mealName: "FRENCH FRIES",
      mealPrice: 70,
      ratings: 5,
    },
    {
      id: 3,
      image: foodCategoryImages.foodCategory3,
      mealName: "VEG BURGER",
      mealPrice: 80,
      ratings: 5,
    },
    {
      id: 4,
      image: foodCategoryImages.foodCategory4,
      mealName: "NACHOS",
      mealPrice: 60,
      ratings: 5,
    },
    {
      id: 5,
      image: foodCategoryImages.foodCategory5,
      mealName: "CHEESE BURST PIZZA",
      mealPrice: 250,
      ratings: 5,
    },
    {
      id: 6,
      image: foodCategoryImages.foodCategory6,
      mealName: "PASTA",
      mealPrice: 150,
      ratings: 5,
    },
    {
      id: 7,
      image: foodCategoryImages.foodCategory7,
      mealName: "VEG SUPREME ROLL",
      mealPrice: 120,
      ratings: 5,
    },
    {
      id: 8,
      image: foodCategoryImages.foodCategory8,
      mealName: "MAGGIE",
      mealPrice: 60,
      ratings: 5,
    },
  ],
  Lunch: [
    {
      id: 3,
      image: foodCategoryImages.foodCategory3,
      mealName: "Burger",
      mealPrice: 80,
      ratings: 5,
    },
    {
      id: 4,
      image: foodCategoryImages.foodCategory4,
      mealName: "Grilled Cheese",
      mealPrice: 60,
      ratings: 4,
    },
  ],
  Dinner: [
    {
      id: 5,
      image: foodCategoryImages.foodCategory1,
      mealName: "Salad",
      mealPrice: 40,
      ratings: 4.7,
    },
    {
      id: 6,
      image: foodCategoryImages.foodCategory2,
      mealName: "Steak",
      mealPrice: 150,
      ratings: 4.9,
    },
  ],
};

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex justify-center">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-${index}`} className="text-yellow-400" />
      ))}
      {halfStar && <FaStarHalfAlt className="text-yellow-400" />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={`empty-${index}`} className="text-yellow-400" />
      ))}
    </div>
  );
};

const HomeFoodCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("Breakfast");

  return (
    <div className="bg-gradient-to-b from-pink-100 via-white to-gray-100 min-h-screen py-16 px-4 sm:px-8 lg:px-16">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-red-500 mb-10 py-10">
        Explore Our Meals
      </h1>

      <div className="flex justify-center space-x-4 md:space-x-6 my-8">
        {["Breakfast", "Lunch", "Dinner"].map((category) => (
          <button
            key={category}
            className={`px-6 md:px-8 py-2 md:py-3 text-sm md:text-lg font-semibold rounded-full transition-all duration-300 shadow-lg ${
              selectedCategory === category
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white transform scale-105"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300 hover:scale-105"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 p-2 sm:p-4 md:p-6">
        {categoriesData[selectedCategory].map((item) => (
          <div
            key={item.id}
            className="border p-4 sm:p-6 rounded-xl shadow-xl bg-white bg-opacity-90 backdrop-filter transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={item.image}
                alt={item.mealName}
                className="w-full h-60 md:h-80 object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-60 transition-opacity duration-300 ease-in-out rounded-lg"></div>
            </div>
            <div className="p-2 sm:p-4 text-center">
              <h2 className="font-bold text-gray-900 mb-2 text-lg sm:text-2xl md:text-3xl">
                {item.mealName}
              </h2>
              <p className="text-gray-600 mb-4 text-sm sm:text-lg font-semibold">
                Price: ₹{item.mealPrice}
              </p>
              <div className="flex justify-center items-center mb-4 text-xl">
                {renderStars(item.ratings)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFoodCategory;
