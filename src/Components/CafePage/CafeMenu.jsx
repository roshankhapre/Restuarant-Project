import React from "react";
import { foodCategoryImages } from "../../assets/assets";

const FoodMenu = {
  HotTea: [
    {
      id: 1,
      image: foodCategoryImages.foodCategory1,
      mealName: "VEG SANDWICH",
      mealPrice: 50,
    },
    {
      id: 2,
      image: foodCategoryImages.foodCategory2,
      mealName: "FRENCH FRIES",
      mealPrice: 70,
    },
    {
      id: 3,
      image: foodCategoryImages.foodCategory3,
      mealName: "VEG BURGER",
      mealPrice: 80,
    },
  ],
  ICEDTEA: [
    {
      id: 1,
      image: foodCategoryImages.foodCategory3,
      mealName: "BURGER",
      mealPrice: 80,
    },
    {
      id: 2,
      image: foodCategoryImages.foodCategory4,
      mealName: "GRILLED CHEESE",
      mealPrice: 60,
    },
  ],
  HOTBLACKCOFFEE: [
    {
      id: 1,
      image: foodCategoryImages.foodCategory3,
      mealName: "BURGER",
      mealPrice: 80,
    },
    {
      id: 2,
      image: foodCategoryImages.foodCategory4,
      mealName: "GRILLED CHEESE",
      mealPrice: 60,
    },
  ],
  HOTMILKCOFFE: [
    {
      id: 1,
      image: foodCategoryImages.foodCategory3,
      mealName: "BURGER",
      mealPrice: 80,
    },
    {
      id: 2,
      image: foodCategoryImages.foodCategory4,
      mealName: "GRILLED CHEESE",
      mealPrice: 60,
    },
  ],
  ICEDCOFFEE: [
    {
      id: 1,
      image: foodCategoryImages.foodCategory3,
      mealName: "BURGER",
      mealPrice: 80,
    },
    {
      id: 2,
      image: foodCategoryImages.foodCategory4,
      mealName: "GRILLED CHEESE",
      mealPrice: 60,
    },
  ],
};

const CafeMenu = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-white py-10 px-4 lg:px-20">
      <div className="w-full max-w-6xl bg-gradient-to-br from-pink-950 to-pink-500 rounded-lg shadow-xl p-6 sm:p-8 md:p-10">
        <div className="flex justify-center">
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-white bg-red-700 my-6 py-2 px-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            OUR FOOD MENUS
          </h1>
        </div>

        {/* Two-column layout for the menu items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column: Hot Tea, Iced Tea, Hot Black Coffee */}
          <div className="space-y-8">
            <MenuCard title="HOT TEA" items={FoodMenu.HotTea} />
            <MenuCard title="ICED TEA" items={FoodMenu.ICEDTEA} />
            <MenuCard
              title="HOT BLACK COFFEE"
              items={FoodMenu.HOTBLACKCOFFEE}
            />
          </div>

          {/* Right column: Hot Milk Coffee, Iced Coffee */}
          <div className="space-y-8">
            <MenuCard title="HOT MILK COFFEE" items={FoodMenu.HOTMILKCOFFE} />
            <MenuCard title="ICED COFFEE" items={FoodMenu.ICEDCOFFEE} />
          </div>
        </div>
      </div>
    </div>
  );
};

// MenuCard component to represent each category's menu items
const MenuCard = ({ title, items }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 shadow-lg border border-gray-300">
      <h2 className="text-xl sm:text-2xl font-semibold text-center text-pink-300 mb-4">
        {title}
      </h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center">
            <img
              src={item.image}
              alt={item.mealName}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-pink-500 mr-4"
            />
            <div>
              <h3 className="text-lg sm:text-xl text-white">{item.mealName}</h3>
              <p className="text-sm sm:text-md text-white">₹{item.mealPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CafeMenu;
