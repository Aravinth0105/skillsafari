import React from "react";
import JsonCardData from "../fullStackDev.json";

const Hero = () => {
  // Extracting data from the JSON file
  const heroData = JsonCardData.HomeScreenComponent;

  return (
    <div className="container mx-auto mt-8 max-w-screen-xxl p-5 ">
      <div className="flex flex-wrap items-center justify-center mb-8 text-dark">
        {/* Left Section */}
        <div className="w-full md:w-1/2 lg:w-1/2 mt-4 md:mt-0">
          <img
            src={heroData.left.image_src}
            alt="Internship Image"
            className="w-full"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 lg:w-1/2 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold  mx-auto text-dark mb-12">
            {heroData.right.content_1} <br />
            <span style={{ fontWeight: 'bold', fontSize: '38px' }}>{heroData.right.content_7}</span>

          </h1>
          <div className="flex ml-5 mb-16">
            <p className="text-lg">
              {/* Content with line breaks */}
              <span style={{ fontWeight: 'bold' }}>{heroData.right.content_2}</span> &nbsp;
              {heroData.right.content_3}&nbsp;
              <span style={{ fontWeight: 'bold' }}>{heroData.right.content_4}</span> &nbsp;
              <span style={{ fontWeight: 'bold' }}>{heroData.right.content_5}</span>&nbsp;
              {heroData.right.content_6} <br />
            </p>
          </div>
          <div className="flex justify-start space-x-4 mt-6">
            <button className="button bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              {heroData.right.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
