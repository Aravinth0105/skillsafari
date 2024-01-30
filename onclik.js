import React, { useState } from "react";
import JsonCardData from "../fullStackDev.json";

const Onclk = () => {
  const onclkData = JsonCardData.Onclk;
  const [currentImage, setCurrentImage] = useState(1);

  // Function to handle click event on headings
  const handleHeadingClick = (imageId) => {
    setCurrentImage(imageId);
  };

  return (
    <div className="container mx-auto mt-8 max-w-screen-xl p-5">
      <div className="flex flex-wrap justify-center items-center">
        {/* First Column */}
        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8 lg:mb-0">
          <div
             className="mb-6 border-l-4 border-red-500 rounded-md cursor-pointer"
            onClick={() => handleHeadingClick(1)}
          >
            {/* Handle click event for heading 1 */}
            <h2
              className="text-xl font-bold mb-2  pl-2 pr-4 py-2 "
             
            >
              {onclkData.heading1.content_1}
            </h2>
            <p className="pl-2 pr-4 py-2">{onclkData.heading1.content_2}</p>
          </div>
          <div
          className="mb-6 border-l-4 border-red-500 rounded-md cursor-pointer"

            onClick={() => handleHeadingClick(2)}
          >
            {/* Handle click event for heading 2 */}
            <h2
              className="text-xl font-bold mb-2  pl-2 pr-4 py-2 "
             
            >
              {onclkData.heading2.content_1}
            </h2>
            <p className="pl-2 pr-4 py-2">{onclkData.heading2.content_2}</p>
          </div>
          <div
             className="mb-6 border-l-4 border-red-500 rounded-md cursor-pointer"
            onClick={() => handleHeadingClick(3)}
          >
            {/* Handle click event for heading 3 */}
            <h2
              className="text-xl font-bold mb-2  pl-2 pr-4 py-2"
             
            >
              {onclkData.heading3.content_1}
            </h2>
            <p className="pl-2 pr-4 py-2">{onclkData.heading3.content_2}</p>
          </div>
        </div>
        {/* Second Column */}
        <div className="w-full md:w-1/2 lg:w-1/2 px-4">
          <img
            src={onclkData.images[currentImage - 1].url}
            alt={onclkData.images[currentImage - 1].name}
            className="w-full"
          />
        </div>
      </div>
      {/* Button */}
      <div className="flex justify-center">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">
          Get in Touch with Us
        </button>
      </div>
    </div>
  );
};

export default Onclk;
