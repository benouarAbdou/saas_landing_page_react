import React from "react";

const FeatureCard = ({ feature }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <img src={feature.icon} alt="" className="w-[70px] h-[70px] " />
      <h1 className="text-white font-poppins font-medium text-xl pt-6">
        {feature.title}
      </h1>
      <p className=" font-poppins font-light text-sm text-gray-400 pt-4 w-[300px]">
        {feature.content}
      </p>
    </div>
  );
};

export default FeatureCard;
