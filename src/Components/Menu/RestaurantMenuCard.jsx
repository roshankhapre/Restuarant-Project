import React, { useState } from "react";

const FoodMenu = {
  Tea: {
    Soups: [
      { id: 1, mealName: "Tomato Soup", mealPrice: 100 },
      { id: 2, mealName: "Hot and Sour Soup", mealPrice: 100 },
      { id: 3, mealName: "Manchow Soup", mealPrice: 110 },
      { id: 4, mealName: "Sweet Corn Soup", mealPrice: 110 },
      { id: 5, mealName: "Lemon Coriander Soup", mealPrice: 110 },
      { id: 6, mealName: "Tomato Shorba", mealPrice: 110 },
      { id: 7, mealName: "Cream Of Mushroom ", mealPrice: 120 },
    ],
    SizzlerPlatters: [
      {
        id: 1,
        mealName:
          "Chinese Sizzler ( Paneer , Peri-Peri ,  Noodles , Manchurian)",
        mealPrice: 300,
      },
      {
        id: 2,
        mealName:
          "Indo Chinese Sizzler (Crsipy veg , Paneer Chilli , Fried Rice)",
        mealPrice: 300,
      },
      { id: 3, mealName: "Chef Choice Sizzler", mealPrice: 350 },
      {
        id: 4,
        mealName: "Italian Plater (Pasta , Cheese Ball , Peri-Peri , Fries)",
        mealPrice: 350,
      },
      { id: 5, mealName: "Paneer Sizzler", mealPrice: 350 },
      {
        id: 6,
        mealName: "Tandoori Plater (Dahi Kabab , Tikka , Corn Cheese Kabab)",
        mealPrice: 350,
      },
      ,
    ],
    SaladPapad: [
      { id: 1, mealName: "Onion Salad", mealPrice: 40 },
      { id: 2, mealName: "Green Salad", mealPrice: 50 },
      { id: 3, mealName: "Kachumar Salad", mealPrice: 60 },
      { id: 4, mealName: "Kachumber Salad with Curd", mealPrice: 80 },
      { id: 5, mealName: "Papad (Roast/ Fried )", mealPrice: 30 },
      { id: 5, mealName: "Papad Masala", mealPrice: 40 },
      { id: 5, mealName: "Fried Chillies (Green)", mealPrice: 30 },
    ],
  },
  Sandwich: {
    Starters: [
      { id: 1, mealName: "Cheese Ball", mealPrice: 120 },
      { id: 2, mealName: "Paneer Tikka", mealPrice: 170 },
      { id: 3, mealName: "Paneer Angara Tikka", mealPrice: 180 },
      { id: 4, mealName: "Paneer Pahadi Tikka", mealPrice: 180 },
      { id: 5, mealName: "Paneer Peshwari Tikka", mealPrice: 180 },
      { id: 6, mealName: "Paneer Afghani Tikka", mealPrice: 180 },
      { id: 7, mealName: "Paneer Malai Tikka", mealPrice: 190 },
      { id: 8, mealName: "Paneer Makhmali Tikka", mealPrice: 200 },
      { id: 9, mealName: "Dahi Kabab", mealPrice: 170 },
      { id: 10, mealName: "Tandoori Alo", mealPrice: 150 },
      { id: 11, mealName: "Veg Seekh Kebab", mealPrice: 170 },
      { id: 12, mealName: "Corn Seekh Kebab", mealPrice: 180 },
      { id: 13, mealName: "Makai Malai Seekh Kebab", mealPrice: 190 },
      { id: 14, mealName: "Hara Bhara Kebab", mealPrice: 150 },
      { id: 15, mealName: "Peanut Chat", mealPrice: 100 },
      { id: 16, mealName: "Mix Pakoda", mealPrice: 100 },
      { id: 17, mealName: "Paneer Pakoda", mealPrice: 150 },
      { id: 18, mealName: "Mushroom Tikka", mealPrice: 180 },
      { id: 19, mealName: "Veg Lollipop", mealPrice: 150 },
    ],
    ChineseStarter: [
      { id: 1, mealName: "Americann Chop Suey", mealPrice: 150 },
      { id: 2, mealName: "Crispy Corn", mealPrice: 150 },
      { id: 3, mealName: "Schewan Crispy Corn", mealPrice: 160 },
      { id: 4, mealName: "Chilli Panner", mealPrice: 170 },
      { id: 5, mealName: "Hakka Noodles", mealPrice: 120 },
      { id: 6, mealName: "Veg Noodles", mealPrice: 140 },
      { id: 7, mealName: "Schezwan Noodles", mealPrice: 150 },
      { id: 8, mealName: "Singapore Noodles", mealPrice: 180 },
      { id: 9, mealName: "Exotic Veg Noodles", mealPrice: 190 },
      { id: 10, mealName: "Manchurian (Dry/Gravy)", mealPrice: 170 },
      { id: 11, mealName: "Veg Crispy", mealPrice: 140 },
      { id: 12, mealName: "Veg Fried Rice ", mealPrice: 140 },
      { id: 13, mealName: "Mushroom Fried Rice ", mealPrice: 160 },
      { id: 14, mealName: "Schewan Rice ", mealPrice: 150 },
      { id: 15, mealName: "Lemon Rice ", mealPrice: 150 },
      { id: 16, mealName: "Veg Kofthey", mealPrice: 160 },
      { id: 17, mealName: "Honey Chilli Potato", mealPrice: 150 },
      { id: 18, mealName: "Mushroom Chilli", mealPrice: 170 },
      { id: 19, mealName: "Mushroom Baby Corn Chilli", mealPrice: 190 },
      { id: 20, mealName: "Veg Spring Roll", mealPrice: 190 },
      { id: 21, mealName: "Cheese Cigar Roll", mealPrice: 210 },
      { id: 22, mealName: "Cheese Panner Roll", mealPrice: 220 },
      { id: 23, mealName: "Mexican Roll", mealPrice: 220 },
      { id: 24, mealName: "Corn Paneer Roll", mealPrice: 220 },
      { id: 25, mealName: "Veg Paneer Roll", mealPrice: 200 },
    ],
  },
  Coffe: {
    PaneerSpecial: [
      { id: 1, mealName: "Matar Paneer ", mealPrice: 200 },
      { id: 2, mealName: "Palak Paneer ", mealPrice: 200 },
      { id: 3, mealName: "Paneer Do Pyaza  ", mealPrice: 200 },
      { id: 4, mealName: "Paneer Chole  ", mealPrice: 200 },
      { id: 5, mealName: "Paneer Masala ", mealPrice: 220 },
      { id: 6, mealName: "Paneer Chatpata ", mealPrice: 220 },
      { id: 7, mealName: "Paneer Bhurji ", mealPrice: 240 },
      { id: 8, mealName: "Paneer Corn ", mealPrice: 200 },
      { id: 9, mealName: "Shahi Paneer (Sweet)", mealPrice: 220 },
      { id: 10, mealName: "Butter Paneer Masala ", mealPrice: 220 },
      { id: 11, mealName: "Kadai Paneer  ", mealPrice: 220 },
      { id: 12, mealName: "Paneer Takatak  ", mealPrice: 220 },
      { id: 13, mealName: "Hyderabadi Paneer  ", mealPrice: 230 },
      { id: 14, mealName: "Butter Paneer Cheese Masala  ", mealPrice: 250 },
      { id: 15, mealName: "Paneer Handi", mealPrice: 220 },
      { id: 16, mealName: "Paneer Kolhapuri", mealPrice: 220 },
      { id: 17, mealName: "Paneer Lababdaar", mealPrice: 220 },
      { id: 18, mealName: "Paneer Tikka Masala", mealPrice: 220 },
      { id: 19, mealName: "Paneer Punjabi", mealPrice: 230 },
      { id: 20, mealName: "Panner Angara Masala", mealPrice: 250 },
      { id: 21, mealName: "Tawa Panner ", mealPrice: 230 },
      { id: 22, mealName: "Panner Maharaja", mealPrice: 210 },
      { id: 23, mealName: "Panner Rajasthani", mealPrice: 220 },
      { id: 24, mealName: "Panner Pataiyala", mealPrice: 200 },
      { id: 25, mealName: "Today's Special", mealPrice: 300 },
    ],
    SeasonalVeg: [
      { id: 1, mealName: "Aloo Gobhi / Aloo Matar ", mealPrice: 180 },
      { id: 2, mealName: "Aloo Chole / Aloo Jira ", mealPrice: 180 },
      { id: 3, mealName: " Aloo Methi ", mealPrice: 180 },
      { id: 4, mealName: "Dum Aloo  ", mealPrice: 190 },
      { id: 5, mealName: "Sev Masala ", mealPrice: 180 },
      { id: 6, mealName: "Sev Tamatar ", mealPrice: 170 },
      { id: 7, mealName: "Sev Doodh ", mealPrice: 180 },
      { id: 8, mealName: "Bhindi Masala ", mealPrice: 170 },
      { id: 9, mealName: " Bhindi Kurkuri ", mealPrice: 180 },
      { id: 10, mealName: "Chana Masala", mealPrice: 190 },
      { id: 11, mealName: "Punjabi Chole  ", mealPrice: 180 },
      { id: 12, mealName: "Matar Masala  ", mealPrice: 180 },
      { id: 13, mealName: "Baingan Masala ", mealPrice: 180 },
      { id: 14, mealName: " Mix Veg  ", mealPrice: 190 },
      { id: 15, mealName: "Veg Kolhapuri", mealPrice: 190 },
      { id: 16, mealName: "Veg Handi", mealPrice: 190 },
      { id: 17, mealName: "Veg Kadai", mealPrice: 190 },
      { id: 18, mealName: " Veg Jaipuri", mealPrice: 190 },
      { id: 19, mealName: "Tawa Veg", mealPrice: 230 },
      { id: 20, mealName: " Veg Jalfrezi", mealPrice: 200 },
      { id: 21, mealName: "Stuffed Capsicum / Tomato ", mealPrice: 200 },
      { id: 22, mealName: "Corn Palak", mealPrice: 180 },
      { id: 23, mealName: "Lasun Methi / Palak", mealPrice: 190 },
      { id: 24, mealName: "Sarso Ka Saag", mealPrice: 120 },
      { id: 25, mealName: " Methi Matar Malai", mealPrice: 230 },
    ],
  },
  Burger: {
    Dal: [
      { id: 1, mealName: "Dal Jerra / Fry", mealPrice: 160 },
      { id: 2, mealName: "Dal Green Chilli", mealPrice: 170 },
      { id: 3, mealName: "Dal Garlic Fry", mealPrice: 170 },
      { id: 4, mealName: "Dal Tadka", mealPrice: 170 },
      { id: 5, mealName: "Dal Tadka Butter", mealPrice: 180 },
      { id: 6, mealName: "Dal Palak / Methi", mealPrice: 180 },
      { id: 7, mealName: "Dal Makhani", mealPrice: 200 },
      { id: 8, mealName: "Dal Rajasthani", mealPrice: 170 },
    ],
    IndianBread: [
      { id: 1, mealName: "Roti Tandoori / Tawa  ", mealPrice: 15 },
      { id: 2, mealName: "Butter Tandoori / Tawa  ", mealPrice: 19 },
      { id: 3, mealName: "Makka / Jawar / Bajra Roti ", mealPrice: 21 },
      { id: 4, mealName: "Missi Roti  ", mealPrice: 31 },
      { id: 5, mealName: "Plain Naan ", mealPrice: 40 },
      { id: 6, mealName: "Butter Naan ", mealPrice: 45 },
      { id: 7, mealName: "Garlic Naan ", mealPrice: 55 },
      { id: 8, mealName: "Stuffed Naan ", mealPrice: 75 },
      { id: 9, mealName: "Chilli Garlic Naan ", mealPrice: 65 },
      { id: 10, mealName: "Cheese Naan", mealPrice: 75 },
      { id: 11, mealName: "Chilli Cheese Garlic Naan  ", mealPrice: 85 },
      { id: 12, mealName: "Laccha Paratha  ", mealPrice: 35 },
      { id: 13, mealName: "Garlic Laccha Paratha ", mealPrice: 50 },
      { id: 14, mealName: "Butter Kulcha  ", mealPrice: 40 },
      { id: 15, mealName: "Stuffed Kulcha", mealPrice: 70 },
      { id: 16, mealName: "Roti Basket (Variety)", mealPrice: 220 },
      { id: 17, mealName: "Aloo Paratha", mealPrice: 50 },
      { id: 18, mealName: "Pyaz Paratha", mealPrice: 55 },
      { id: 19, mealName: "Gobhi Paratha ", mealPrice: 55 },
      { id: 20, mealName: "Methi Paratha (Seasonal)", mealPrice: 65 },
      { id: 21, mealName: "Matar Paratha  ", mealPrice: 55 },
      { id: 22, mealName: "Muooli Paratha (Seasonal)", mealPrice: 55 },
      { id: 23, mealName: "Sev Paratha  ", mealPrice: 60 },
    ],
    Kofta: [
      { id: 1, mealName: "Veg Kofta", mealPrice: 180 },
      { id: 2, mealName: "Methi Kofta", mealPrice: 180 },
      { id: 3, mealName: "Nargis Kofta", mealPrice: 180 },
      { id: 4, mealName: "Rajasthani Kofta", mealPrice: 180 },
      { id: 5, mealName: "Paneer Kofta", mealPrice: 220 },
      { id: 6, mealName: "Malai Kofta ", mealPrice: 220 },
    ],
    MushroomSpecial: [
      { id: 1, mealName: "Mushroom Masala", mealPrice: 200 },
      { id: 2, mealName: "Matar Mushroom", mealPrice: 210 },
      { id: 3, mealName: "Mushroom Do Pyaza", mealPrice: 210 },
      { id: 4, mealName: "Paneer Mushroom ", mealPrice: 230 },
      { id: 5, mealName: "Kaju Mushroom ", mealPrice: 290 },
      { id: 6, mealName: "Chef Mushroom ", mealPrice: 300 },
    ],
  },

  Pizza: {
    Rice: [
      { id: 1, mealName: "Half Steamed Rice", mealPrice: 70 },
      { id: 2, mealName: "Half Jeera Rice", mealPrice: 80 },
      { id: 3, mealName: "Steamed Rice", mealPrice: 100 },
      { id: 4, mealName: "Jeera Rice", mealPrice: 110 },
      { id: 5, mealName: "Jeera Rice Butter  ", mealPrice: 110 },
      { id: 6, mealName: "Onion Chilli Rice ", mealPrice: 110 },
      { id: 7, mealName: "Masala Rice", mealPrice: 130 },
      { id: 8, mealName: "Veg Pulao ", mealPrice: 180 },
      { id: 9, mealName: "Matar Pulao ", mealPrice: 170 },
      { id: 10, mealName: "Shahi Pulao ", mealPrice: 190 },
      { id: 11, mealName: "Butter Khichadi", mealPrice: 160 },
      { id: 12, mealName: "Special Khichadi  ", mealPrice: 180 },
      { id: 13, mealName: "Veg Biryani  ", mealPrice: 190 },
      { id: 14, mealName: "Hyderabadi Biryani  ", mealPrice: 200 },
      { id: 15, mealName: "Paneer Tikka Biryani", mealPrice: 250 },
    ],
    Sweets: [
      { id: 1, mealName: "Rasgulla (2 Piece)", mealPrice: 50 },
      { id: 2, mealName: "Gulab Jamun (2 Piece)", mealPrice: 60 },
      { id: 3, mealName: "Ras Malai (2 Piece) ", mealPrice: 70 },
      { id: 4, mealName: "Ice Cream (Choice Your Flavour)", mealPrice: 50 },
      { id: 5, mealName: "Gulab Jamun with Ice Cream ", mealPrice: 80 },
      {
        id: 6,
        mealName: "Sizzling Brownie with Ice Cream with Chocolate Sauase",
        mealPrice: 180,
      },

      ,
    ],
    Thali: [
      { id: 1, mealName: "Seasonal Veg Thali", mealPrice: 200 },
      { id: 2, mealName: "Paneer Thali", mealPrice: 220 },
      { id: 3, mealName: "Special Thali ", mealPrice: 250 },
    ],
    SundaySpecial: [
      {
        id: 1,
        mealName:
          "Dal Bati / Baafle Thali  (Dal Tadka , Baafle Kadi , Besan Gatte ki Sabzi, Aloo Jeera , Achar , Lahsun Chutney / Hari Chutney , Salad , Chaach , Jalebi / Malpua / Rabri / Gulab Jamun)",
        mealPrice: 350,
      },
    ],
  },
};

const RestaurantMenuCard = () => {
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
        <div className=" flex justify-center mb-8 ">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white bg-green-700  py-2 px-6 rounded-lg shadow-lg ">
            Main Course
          </h1>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              selectedCategory === "Tea"
                ? "bg-red-600 text-white"
                : "bg-gray-300 text-gray-800 hover:bg-red-700 hover:text-white"
            }`}
            onClick={() => handleCategoryChange("Tea")}
          >
            Soups / Salad / Sizzler's & Platers
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              selectedCategory === "Sandwich"
                ? "bg-red-600 text-white"
                : "bg-gray-300 text-gray-800 hover:bg-red-700 hover:text-white"
            }`}
            onClick={() => handleCategoryChange("Sandwich")}
          >
            Starters / Chinese Starter
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              selectedCategory === "Coffe"
                ? "bg-red-600 text-white"
                : "bg-gray-300 text-gray-800 hover:bg-red-700 hover:text-white"
            }`}
            onClick={() => handleCategoryChange("Coffe")}
          >
            Paneer Special / Seasonal Veg
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              selectedCategory === "Burger"
                ? "bg-red-600 text-white"
                : "bg-gray-300 text-gray-800 hover:bg-red-700 hover:text-white"
            }`}
            onClick={() => handleCategoryChange("Burger")}
          >
            Dal / Kofta / Mushroom Special / Indian Bread
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              selectedCategory === "Pizza"
                ? "bg-red-600 text-white"
                : "bg-gray-300 text-gray-800 hover:bg-red-700 hover:text-white"
            }`}
            onClick={() => handleCategoryChange("Pizza")}
          >
            Rice / Sweets / Thali / Sunday Special
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

export default RestaurantMenuCard;
