import React, { useState } from "react";
import { foodCategoryImages } from "../../assets/assets";

// FoodMenu object as you provided
const FoodMenu = {
  Tea: {
    HotTea: [
      { id: 1, mealName: "Clasic Tea", mealPrice: 20 },
      { id: 2, mealName: "Adrak", mealPrice: 25 },
      { id: 3, mealName: "Masala", mealPrice: 30 },
      { id: 4, mealName: "Elachi", mealPrice: 30 },
      { id: 5, mealName: "Lemon Tea", mealPrice: 35 },
      { id: 6, mealName: "Green Tea", mealPrice: 35 },
      { id: 7, mealName: "Black Tea", mealPrice: 15 },
    ],
    IcedTea: [
      { id: 1, mealName: "Lemon Iced Tea", mealPrice: 70 },
      { id: 2, mealName: " Peach Iced Tea", mealPrice: 70 },
      { id: 3, mealName: "Strawberry Iced Tea", mealPrice: 70 },
      { id: 4, mealName: " Watermelon Iced Tea", mealPrice: 80 },
      { id: 5, mealName: "Cranberry Iced Tea", mealPrice: 85 },
      ,
    ],
    HotBlackCoffee: [
      { id: 1, mealName: "Espresso(Coffee Shot 60ml)", mealPrice: 35 },
      { id: 2, mealName: "Americano(Black Coffee)", mealPrice: 40 },
      { id: 3, mealName: "Macchiato with Milk Foam ", mealPrice: 65 },
      { id: 4, mealName: "IRISH Coffee", mealPrice: 50 },
      { id: 5, mealName: "Affogate", mealPrice: 65 },
    ],
    HotMilkCoffee: [
      { id: 2, mealName: "Cappuccino", mealPrice: 60 },
      { id: 1, mealName: "Latte", mealPrice: 60 },
      { id: 3, mealName: "Mocha", mealPrice: 70 },
      { id: 4, mealName: "Camel (Cappuccino/latte)", mealPrice: 70 },
      { id: 5, mealName: "Vanilla  (Cappuccino/latte) ", mealPrice: 70 },
      { id: 6, mealName: "Irish (Cappuccino/latte) ", mealPrice: 70 },
      { id: 9, mealName: "Hazelnut (Cappuccino/latte) ", mealPrice: 70 },
      { id: 7, mealName: "Tiranisu (Cappuccino/latte) ", mealPrice: 80 },
      { id: 8, mealName: "Lotus Biscoff (Cappuccino/latte) ", mealPrice: 80 },
    ],
    IcedCoffee: [
      { id: 1, mealName: "Iced Coffee", mealPrice: 70 },
      { id: 2, mealName: "Iced Amaricano", mealPrice: 70 },
      { id: 3, mealName: "Iced Mocha", mealPrice: 70 },
      { id: 4, mealName: "Iced  Vanilla", mealPrice: 70 },
      { id: 5, mealName: "Iced Caremel", mealPrice: 80 },
    ],
  },
  Sandwich: {
    ColdCoffeeFrappe: [
      { id: 1, mealName: "Classic Cold Coffee", mealPrice: 100 },
      { id: 2, mealName: "Chocolate Cold Coffee", mealPrice: 110 },
      { id: 3, mealName: "Vanilla Cold Coffee", mealPrice: 110 },
      { id: 4, mealName: "Caramel Cold Coffee", mealPrice: 120 },
      { id: 5, mealName: "Choco Cold Coffee", mealPrice: 120 },
      { id: 6, mealName: "Hazelnut Cold Coffee", mealPrice: 120 },
      { id: 7, mealName: "Irish Cold Coffee", mealPrice: 130 },
      { id: 8, mealName: "Tiramisu Cold Coffee", mealPrice: 130 },
      { id: 9, mealName: "Lotus Cold Coffee", mealPrice: 130 },
      { id: 10, mealName: "Brownie Cold Coffee", mealPrice: 150 },
    ],
    Shakes: [
      { id: 1, mealName: "Vanilla Shake", mealPrice: 100 },
      { id: 2, mealName: "Chocolate Shake", mealPrice: 100 },
      { id: 3, mealName: "Butterscotch Shake", mealPrice: 100 },
      { id: 4, mealName: "Strawberry Shake", mealPrice: 100 },
      { id: 5, mealName: "Mango Shake", mealPrice: 100 },
      { id: 6, mealName: "Oreo Shake", mealPrice: 100 },
      { id: 7, mealName: "Kitkat Shake", mealPrice: 100 },
      { id: 8, mealName: "Salted Caramel Choco Chip Shake", mealPrice: 120 },
      { id: 9, mealName: "Lotus Biscoff Shake", mealPrice: 120 },
      { id: 10, mealName: "Tiramisu Shake", mealPrice: 120 },
      { id: 11, mealName: "Brownie Shake", mealPrice: 150 },
    ],
    Slushy: [
      { id: 1, mealName: "Orange Slush", mealPrice: 100 },
      { id: 2, mealName: "Lemon Mint Slush", mealPrice: 100 },
      { id: 3, mealName: "Watermelon Slush", mealPrice: 100 },
      { id: 4, mealName: "Kala Khatta Slush", mealPrice: 100 },
      { id: 5, mealName: "Ice Blue Slush", mealPrice: 100 },
      { id: 6, mealName: "Blue Berry Slush", mealPrice: 100 },
    ],
    Mocktails: [
      { id: 1, mealName: "Mint Mojito", mealPrice: 100 },
      { id: 2, mealName: "Watermelon Mojito", mealPrice: 100 },
      { id: 3, mealName: "Blue Curacao (Orange)", mealPrice: 100 },
      { id: 4, mealName: "Cranberry", mealPrice: 100 },
      { id: 5, mealName: "Blueberry", mealPrice: 100 },
      { id: 6, mealName: "BlackCurrant", mealPrice: 100 },
      { id: 7, mealName: "Green Apple", mealPrice: 100 },
    ],
    SoftDrinks: [
      { id: 1, mealName: "Coco Cola", mealPrice: 50 },
      { id: 2, mealName: "Spirit", mealPrice: 50 },
      { id: 3, mealName: "Fanta ", mealPrice: 50 },
      { id: 4, mealName: "Maaza", mealPrice: 50 },
    ],
  },
  Coffe: {
    SandiwichKaccha: [
      { id: 1, mealName: "VEG SANDWICH", mealPrice: 50 },
      { id: 2, mealName: "Bombay SANDWICH", mealPrice: 60 },
      { id: 3, mealName: "Mixed Fruits Jam SANDWICH", mealPrice: 60 },
      { id: 4, mealName: "Nutella SANDWICH", mealPrice: 70 },
      { id: 5, mealName: "Bread Butter ", mealPrice: 30 },
      { id: 6, mealName: "Maida Bread", mealPrice: 15 },
      { id: 7, mealName: "Brown Bread", mealPrice: 15 },
      { id: 8, mealName: "Multi Grain Bread", mealPrice: 20 },
    ],
    ClubSandwich: [
      { id: 1, mealName: "Pizza Club SANDWICH", mealPrice: 200 },
      { id: 2, mealName: "Tandoori SANDWICH", mealPrice: 200 },
      { id: 3, mealName: "Veg Club SANDWICH ", mealPrice: 150 },
      { id: 4, mealName: "Maxican Club SANDWICH", mealPrice: 200 },
      { id: 5, mealName: "Cheese Burst SANDWICH ", mealPrice: 200 },
      { id: 6, mealName: "Chef Specials SANDWICH", mealPrice: 250 },
    ],
    Shakes: [
      { id: 1, mealName: "Toasted Bread Butter", mealPrice: 30 },
      { id: 2, mealName: "Veg SANDWICH", mealPrice: 50 },
      { id: 3, mealName: "Veg Cheese SANDWICH ", mealPrice: 60 },
      { id: 4, mealName: "Cheese Chutney SANDWICH", mealPrice: 65 },
      { id: 5, mealName: "Grilled Cheese SANDWICH ", mealPrice: 60 },
      { id: 6, mealName: "Masala SANDWICH", mealPrice: 60 },
      { id: 7, mealName: "Corn Cheese SANDWICH", mealPrice: 60 },
      { id: 8, mealName: "Corn Paneer SANDWICH", mealPrice: 70 },
      { id: 9, mealName: "Masala Cheese SANDWICH ", mealPrice: 70 },
      { id: 10, mealName: "Veg Paneer SANDWICH", mealPrice: 70 },
      { id: 11, mealName: "Cheese Paneer SANDWICH ", mealPrice: 80 },
      { id: 12, mealName: "Spanch Mushroom SANDWICH", mealPrice: 80 },
    ],
    Maggie: [
      { id: 1, mealName: "Plain Maggie", mealPrice: 60 },
      { id: 2, mealName: "Masala Maggie", mealPrice: 70 },
      { id: 3, mealName: "Butter Maggie ", mealPrice: 70 },
      { id: 4, mealName: "Vegetable Maggie", mealPrice: 80 },
      { id: 5, mealName: "Burnt Garlic Maggie ", mealPrice: 80 },
      { id: 6, mealName: "Itallian Maggie", mealPrice: 90 },
      { id: 7, mealName: "Cheese Maggie", mealPrice: 100 },
      { id: 8, mealName: "Veg Cheese Maggie", mealPrice: 110 },
      { id: 9, mealName: "Panner Maggie ", mealPrice: 90 },
    ],
    Fries: [
      { id: 1, mealName: "Salted Fries", mealPrice: 70 },
      { id: 2, mealName: "Peri Peri Fries", mealPrice: 80 },
      { id: 3, mealName: "Loaded Cheese Fries ", mealPrice: 100 },
      { id: 4, mealName: "Loaded Cheese Peri Peri Fries", mealPrice: 120 },
      { id: 5, mealName: "Tandoori Cheese Fries  ", mealPrice: 110 },
      { id: 6, mealName: "Pizza Fries", mealPrice: 120 },
      { id: 7, mealName: "Black Salt Fries", mealPrice: 80 },
      { id: 8, mealName: "Honey Chilli Potato ", mealPrice: 150 },
    ],
  },
  Burger: {
    Burger: [
      { id: 1, mealName: "Veg Burger ", mealPrice: 80 },
      { id: 2, mealName: "Veg Cheese Burger", mealPrice: 95 },
      { id: 3, mealName: "Tandoori Burger", mealPrice: 85 },
      { id: 4, mealName: "Double Tikki Burger", mealPrice: 100 },
      { id: 5, mealName: "Cheese Burst Burger", mealPrice: 150 },
    ],
    SmallBiteMeals: [
      { id: 1, mealName: "Butter Pav Bhaji", mealPrice: 100 },
      { id: 2, mealName: "Cheese Pav Bhaji", mealPrice: 150 },
      { id: 3, mealName: "Cholle Bhatture", mealPrice: 110 },
      { id: 4, mealName: "Poori Bhaji", mealPrice: 100 },

      ,
    ],
    Pasta: [
      { id: 1, mealName: "Alfredo (White Sauce)", mealPrice: 150 },
      { id: 2, mealName: "Arabiatta (Red Sauce)", mealPrice: 130 },
      { id: 3, mealName: "Aglio E. Olio (Garlic & OliveOil) ", mealPrice: 130 },
      { id: 4, mealName: "Salsa Rosa (Pink Sauce)", mealPrice: 180 },
      {
        id: 5,
        mealName: "Cacio E Pepe (Clack Pepper & Cheese)",
        mealPrice: 130,
      },
      {
        id: 6,
        mealName: "Pesto (Spanich, Garlic Walnut , Cheese)",
        mealPrice: 180,
      },
    ],
    Nachos: [
      { id: 2, mealName: "Veg Loaded Nachos", mealPrice: 150 },
      { id: 1, mealName: "Cheese Nachos", mealPrice: 150 },
      { id: 3, mealName: "Tandoori Nachos", mealPrice: 150 },
      { id: 4, mealName: "Maxican Nachos ", mealPrice: 150 },
      { id: 5, mealName: "Baked Cheese Nachos ", mealPrice: 180 },
    ],
    IndoChinese: [
      { id: 1, mealName: "Veg Noodles ", mealPrice: 130 },
      { id: 2, mealName: "Hakka Noodles", mealPrice: 120 },
      { id: 3, mealName: "Schwan Noodles  ", mealPrice: 150 },
      { id: 4, mealName: "Burnt Garlic Noodles ", mealPrice: 150 },
      { id: 5, mealName: "Manchurian(dry/gravy)  ", mealPrice: 150 },
      { id: 6, mealName: "Chilli Panner (dry/gravy )", mealPrice: 170 },
      { id: 7, mealName: "Fried Rice ", mealPrice: 130 },
      { id: 8, mealName: "Schwann Fried Rice ", mealPrice: 150 },
      { id: 9, mealName: "Chilli Garlic Fried Rice  ", mealPrice: 150 },
      { id: 10, mealName: "Mushroom Fried Rice ", mealPrice: 170 },
      { id: 11, mealName: "Lemon Rice  ", mealPrice: 150 },
      { id: 12, mealName: "Mushroom Chilli (dry/gravy ) ", mealPrice: 170 },
    ],
  },

  Pizza: {
    Pizza: [
      { id: 1, mealName: "Margarita", mealPrice: 110 },
      { id: 2, mealName: "Plain Cheese", mealPrice: 110 },
      { id: 3, mealName: "Corn Cheese", mealPrice: 150 },
      { id: 4, mealName: "Corn Capsicum", mealPrice: 160 },
      { id: 5, mealName: "Onion Capsicum  ", mealPrice: 160 },
      { id: 6, mealName: "Mushroom Special ", mealPrice: 160 },
      { id: 7, mealName: "Panner Special", mealPrice: 180 },
      { id: 8, mealName: "Veg Tandoori ", mealPrice: 180 },
      { id: 9, mealName: "Veg Burst ", mealPrice: 220 },
      { id: 10, mealName: "Cheese Burst ", mealPrice: 250 },
      { id: 11, mealName: "Chef Special", mealPrice: 300 },
    ],
    SouthIndian: [
      { id: 1, mealName: "Idli Sambhar", mealPrice: 100 },
      { id: 2, mealName: "Wada Sambhar", mealPrice: 100 },
      { id: 3, mealName: "Idli Roast ", mealPrice: 100 },
      { id: 4, mealName: "Plain Dosa", mealPrice: 100 },
      { id: 5, mealName: "Masala Dosa ", mealPrice: 120 },
      { id: 6, mealName: "Paneer Dosa", mealPrice: 150 },
      { id: 7, mealName: "Onion Dosa", mealPrice: 130 },
      { id: 8, mealName: "Mysore Dosa", mealPrice: 150 },
      { id: 9, mealName: "Schwann Masala Dosa ", mealPrice: 150 },
      { id: 10, mealName: "Cheese Dosa", mealPrice: 170 },
      { id: 11, mealName: "Cheese Masala Dosa ", mealPrice: 180 },
      { id: 12, mealName: "Uttpam", mealPrice: 100 },
      { id: 13, mealName: "Onion Uttapam", mealPrice: 120 },
      ,
    ],
    GarlicBread: [
      { id: 1, mealName: "Cheese Garlic Bread", mealPrice: 100 },
      { id: 2, mealName: "Veg Cheese Garlic Bread", mealPrice: 120 },
      { id: 3, mealName: "Chilli Cheese Garlic  Bread ", mealPrice: 120 },
      { id: 4, mealName: "Mushroom Cheese Garlic Bread", mealPrice: 130 },
      { id: 5, mealName: "Schezwan Cheese Garlic Bread", mealPrice: 130 },
      { id: 6, mealName: "Tandoori Cheese Garlic Bread", mealPrice: 130 },
    ],
    Rolls: [
      { id: 2, mealName: " Veg Supreme Roll", mealPrice: 120 },
      { id: 1, mealName: "Cheese Corn Roll", mealPrice: 140 },
      { id: 3, mealName: "Aloo Tikkki Roll", mealPrice: 130 },
      { id: 4, mealName: "Tandoori Roll", mealPrice: 150 },
      { id: 5, mealName: "Hara Bhara Kebab Roll ", mealPrice: 150 },
      { id: 6, mealName: "Paneer Tikka Roll", mealPrice: 160 },
      { id: 9, mealName: "Chinese Roll ", mealPrice: 160 },
      { id: 7, mealName: "Maxican Roll ", mealPrice: 160 },
      { id: 8, mealName: "Pizza Roll  ", mealPrice: 180 },
    ],
  },
};

const CafeMenuCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tea");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const formatTitle = (title) => {
    return title.replace(/([A-Z])/g, " $1").trim();
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-50 py-10 px-4 lg:px-20">
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white bg-red-700 py-2 px-6 rounded-lg shadow-lg">
            OUR FOOD MENUS
          </h1>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              selectedCategory === "Tea"
                ? "bg-red-600 text-white"
                : "bg-gray-300 text-gray-800 hover:bg-red-700 hover:text-white"
            }`}
            onClick={() => handleCategoryChange("Tea")}
          >
            Tea / Iced Tea / Hot Milk Coffee / Iced Coffee
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              selectedCategory === "Sandwich"
                ? "bg-red-600 text-white"
                : "bg-gray-300 text-gray-800 hover:bg-red-700 hover:text-white"
            }`}
            onClick={() => handleCategoryChange("Sandwich")}
          >
            Cold Coffee / Soft Drinks / Shakes / Mocktails
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              selectedCategory === "Coffe"
                ? "bg-red-600 text-white"
                : "bg-gray-300 text-gray-800 hover:bg-red-700 hover:text-white"
            }`}
            onClick={() => handleCategoryChange("Coffe")}
          >
            Sandwich / Grilled Sandwich / Maggie / Fries
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              selectedCategory === "Burger"
                ? "bg-red-600 text-white"
                : "bg-gray-300 text-gray-800 hover:bg-red-700 hover:text-white"
            }`}
            onClick={() => handleCategoryChange("Burger")}
          >
            Burger / Pasta / Chinese / Nachos
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              selectedCategory === "Pizza"
                ? "bg-red-600 text-white"
                : "bg-gray-300 text-gray-800 hover:bg-red-700 hover:text-white"
            }`}
            onClick={() => handleCategoryChange("Pizza")}
          >
            Pizza / Garlic Bread / South Indian / Rolls
          </button>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.keys(FoodMenu[selectedCategory]).map((subcategory) => (
            <MenuCard
              key={subcategory}
              title={formatTitle(subcategory)}
              items={FoodMenu[selectedCategory][subcategory]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const MenuCard = ({ title, items }) => {
  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 border border-gray-200 p-6 rounded-xl shadow-lg flex flex-col justify-between transition-transform transform  hover:shadow-2xl h-full overflow-hidden">
      {/* Title */}
      <h2 className="text-xl font-bold text-red-500 mb-4 text-center uppercase tracking-wider">
        {title}
      </h2>

      {/* Menu Items */}
      <div className="space-y-4 flex-grow">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-2 border-b border-gray-200"
            >
              <span className="text-lg font-semibold text-gray-900 flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                </svg>
                {item.mealName}
              </span>
              <span className="text-md text-gray-600 flex items-center">
                ₹{item.mealPrice}
              </span>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center h-full text-gray-400 italic">
            More items coming soon!
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-4 flex justify-center items-center text-gray-400">
        <span className="text-sm">
          {items.length > 0
            ? "Deliciously prepared for you!"
            : "Stay tuned for new flavors!"}
        </span>
      </div>

      {/* Decorative Background for Empty Cards */}
      {items.length < 3 && (
        <div className="absolute inset-0 opacity-10 bg-pattern-dots-md bg-red-100"></div>
      )}
    </div>
  );
};

export default CafeMenuCard;
