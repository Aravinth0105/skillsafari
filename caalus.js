import React from "react";
import JsonCardData from "../fullStackDev.json";

const Call = () => {
  const callData = JsonCardData.content;

  return (
    
    <div className="container mx-auto mt-8  max-w-screen-xxl p-5 text-center" style={{ backgroundColor: "#1C2042" }}>
      <h1 className="text-3xl font-bold mb-4 mx-auto text-white">
        {callData.title}
      </h1>

      <div className="flex flex-wrap items-center justify-center mb-8 text-white">
        <div className="w-full md:w-1/4 lg:w-2/3 mt-4 md:mt-0">
          <div className="flex mb-4">
            <p className="text-lg ">{callData.description}</p>
          </div>
          <div className="flex justify-around space-x-4">
            {callData.buttons.map((button, index) => (
              <button
                key={index}
                className={button.className}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
