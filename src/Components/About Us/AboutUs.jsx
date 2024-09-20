import React from "react";
import { aboutUsImage } from "../../assets/assets";

const cafeAbout = [
  {
    id: 1,
    img: aboutUsImage.aboutus,
    title: "Welcome to K's Darshan Cafe/ Restaurant",
    description: "Where culinary artistry meets a cozy ambiance.",
  },
];

const AboutUs = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div className="relative w-full h-full">
        {cafeAbout.map((about) => (
          <div key={about.id} className="relative w-full h-full">
            {/* Background Image */}
            <div className="relative">
              <img
                src={about.img}
                alt={about.title}
                className="w-full h-[50vh] md:h-[70vh] lg:h-screen object-cover filter brightness-50"
              />
            </div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 px-4 md:px-10 lg:px-0">
              {/* Title "About Us" */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white bg-red-700 bg-opacity-80 px-6 py-3 md:px-10 md:py-4 rounded-xl shadow-2xl mb-8 md:mb-20">
                About Us
              </h1>

              {/* Cafe Title */}
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white tracking-wide drop-shadow-lg text-center">
                {about.title}
              </h2>

              {/* Short Description */}
              <p className="text-base sm:text-lg md:text-xl max-w-3xl text-white leading-relaxed text-center">
                {about.description}
              </p>

              {/* Additional Descriptions */}
              <div className="space-y-4 md:space-y-6 max-w-4xl">
                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed text-center">
                  "At K's Darshan, we are passionate about bringing people
                  together through extraordinary flavors and unforgettable
                  experiences. Whether you're here for a quick coffee or a
                  full-course meal, we offer a diverse menu, a warm atmosphere,
                  and the perfect blend of tradition and innovation in every
                  dish."
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed text-center">
                  "Founded on a love for food and community, we strive to create
                  an environment where everyone feels at home. Come in, relax,
                  and let us take you on a culinary journey like no other."
                </p>
              </div>

              {/* Call to Action */}
              <a
                href="#menu"
                className="mt-4 sm:mt-6 inline-block px-6 sm:px-8 py-3 sm:py-4 bg-red-600 text-white text-sm sm:text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
              >
                Explore Our Menu
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
