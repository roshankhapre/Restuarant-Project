import React from "react";
import { aboutUsImage } from "../../assets/assets";

const aboutFood = [
  {
    id: 1,
    img: aboutUsImage.aboutus1,
    title: "Quality Food",
    description: "We provide Quality Food made with the freshest ingredients.",
  },
  {
    id: 2,
    img: aboutUsImage.aboutus2,
    title: "Healthy Meals",
    description: "Our meals are both healthy and delicious.",
  },
  {
    id: 3,
    img: aboutUsImage.meal,
  },
];

const AboutUsFood = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Section Title */}
      <div className="text-center w-full px-4 mb-16">
        <h1 className="inline-block text-white bg-red-700 text-4xl md:text-3xl font-bold rounded-lg shadow-lg px-6 py-4">
          About <br /> K's DARSHAN
        </h1>
      </div>
      <h1 className="text-4xl font-extrabold mb-12">
        DELICIOUS FOOD FOR HEALTHY LIFE
      </h1>

      {/* Layout with content on the left and large image on the right */}
      <div className="flex flex-col md:flex-row w-full md:w-3/4 items-start justify-between">
        {/* Left side with first two images and text */}
        <div className="flex flex-col md:w-1/2 items-start space-y-8 p-4">
          {aboutFood.slice(0, 2).map((food) => (
            <div key={food.id} className="flex items-start space-x-4">
              <img
                src={food.img}
                alt={food.title}
                className="w-24 h-24 object-cover rounded-lg shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {food.title}
                </h3>
                <p className="text-lg text-gray-600">{food.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right side with the third, larger image */}
        <div className="md:w-1/2 flex justify-center p-4">
          <img
            src={aboutFood[2].img}
            alt="Meal"
            className="w-full md: h-auto object-cover rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsFood;
