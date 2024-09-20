import React from "react";
import { foodCategoryImages } from "../../assets/assets";

const FoodMenu = {
  StarterMenu: [
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
  MainDishes: [
    {
      id: 1,
      image: foodCategoryImages.foodCategory3,
      mealName: "BURGER",
      mealPrice: 80,
      ratings: 5,
    },
    {
      id: 2,
      image: foodCategoryImages.foodCategory4,
      mealName: "GRILLED CHEESE",
      mealPrice: 60,
      ratings: 4,
    },
  ],
};

const HomeFoodMenu = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-white py-10 px-4 lg:px-20">
      <div className="w-full max-w-6xl bg-black rounded-lg shadow-xl p-6 sm:p-8 md:p-10">
        <div className="flex justify-center">
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-white bg-gradient-to-r from-red-500 to-pink-500 my-6 py-2 px-6 rounded-full shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            OUR FOOD MENUS
          </h1>
        </div>

        {/* Menu Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Starter Menu */}
          <div>
            <h2 className="my-20 font-praise text-2xl sm:text-3xl md:text-4xl  text-center text-white mb-4 md:mb-6">
              Starter Menu
            </h2>
            <div className="my-20 space-y-6 sm:space-y-8">
              {FoodMenu.StarterMenu.map((item) => (
                <div
                  key={item.id}
                  className=" flex items-center p-4 sm:p-6 border border-gray-300 rounded-lg shadow-md bg-black"
                >
                  <img
                    src={item.image}
                    alt={item.mealName}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-red-500 mr-4 sm:mr-8 md:mr-16"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white font-caveat">
                      {item.mealName}
                    </h3>
                    <p className="text-sm sm:text-xl text-white font-caveat">
                      ₹{item.mealPrice}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Dishes */}
          <div>
            <h2 className="my-20 font-praise text-2xl sm:text-3xl md:text-4xl text-center text-white mb-4 md:mb-20 ">
              Main Dishes
            </h2>
            <div className="my-20 space-y-6 sm:space-y-8">
              {FoodMenu.MainDishes.map((item) => (
                <div
                  key={item.id}
                  className=" flex items-center p-4 sm:p-6 border border-gray-300 rounded-lg shadow-md bg-black"
                >
                  <img
                    src={item.image}
                    alt={item.mealName}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-red-500 mr-4 sm:mr-8 md:mr-16 "
                  />
                  <div className="flex-1">
                    <h3 className=" text-lg sm:text-3xl font-semibold text-white font-caveat">
                      {item.mealName}
                    </h3>
                    <p className="text-sm sm:text-xl text-white font-caveat">
                      ₹{item.mealPrice}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFoodMenu;
