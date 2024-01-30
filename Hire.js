import React from "react";
import JsonData from "../fullStackDev.json";

function Hire() {
  let hired1 = JsonData.hired_companies_one;
  let hired2 = JsonData.hired_companies_two;
  return (
    <div>
  <div className="bg-[#E8F3FA] w-[100%] p-10 grid place-items-center">
    <div className="text-center font-[600] text-[28px]">
      {hired1.title}
    </div>
    <marquee behavior="" direction="right" scrollamount="12">
      <div className="flex items-center justify-center gap-x-5 my-2">
        {hired1.images.map((target, index) => (
          <img
            key={index}
            src={target}
            alt={`Company_${index}`}
            width={"150px"}
          />
        ))}
      </div>
    </marquee>
    <marquee behavior="" direction="left" scrollamount="12">
      <div className="flex items-center justify-center gap-x-5 my-2">
        {hired2.images.map((target, index) => (
          <img
            key={index}
            src={target}
            alt={`Company_${index}`}
            width={"150px"}
          />
        ))}
      </div>
    </marquee>
  </div>
</div>

  );
}

export default Hire;
