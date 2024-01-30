import React from 'react';
import JsonCardData from "../fullStackDev.json";

const NocostComponent = () => {
  const nocostInfo = JsonCardData.NoCost;

  return (
    <div className="container mx-auto mt-8 max-w-screen-xl p-5">
      <div className="flex flex-wrap items-center justify-center mb-8 text-dark">
     

        <div className="w-full md:w-1/2 lg:w-1/2 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-4 mx-auto text-dark">
            {nocostInfo.left.content_1}
          </h1>
          <div className="flex mb-4">
            <p className="text-md text-gray-700 mt-4 mb-4">{nocostInfo.left.content_2}</p>
          </div>
          <div className="flex bg-gray-200">
            {nocostInfo.left.cards.map((card, index) => (
              <div key={index} className="w-full md:w-1/3 lg:w-1/3 p-4">
                <img src={card.image_src} alt={`Card ${index + 1}`} className="w-1/4" />
                <p className="text-lg">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full  md:w-1/2 lg:w-1/2 mt-4 md:mt-0">
          <img src={nocostInfo.right.image_src} alt="Train Image" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default NocostComponent;
