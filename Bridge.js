import React from 'react';
import JsonCardData from "../fullStackDev.json";

const BridgingComponent = () => {
 
  const bridgingInfo = JsonCardData.Bridging;


  return (
    <div className="container mx-auto mt-8 max-w-screen-xl p-5 ">
      <div className="flex flex-wrap items-center justify-center mb-8 text-dark">
        {/* Content */}
        <div className="w-full md:w-1/2 lg:w-1/2 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-4 mx-auto text-dark ">
            {bridgingInfo.left.content_1}
          </h1>
          <div className="flex mb-4">
            <p className="text-md text-gray-700 mt-4">{bridgingInfo.left.content_2}</p>
          </div>
        </div>
        {/* Image */}
        <div className="w-full md:w-1/2 lg:w-1/2 mt-4 md:mt-0">
          <img src={bridgingInfo.right.image_src} alt="Bridging Image" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default BridgingComponent;
