import React from "react";

const MainButton = ({ text, color, textColor }) => {
  return (
    <div
      className={`${color} rounded-xl font-poppins font-light ${textColor} text-sm px-8 py-2 cursor-pointer`}
    >
      {text}
    </div>
  );
};

export default MainButton;
