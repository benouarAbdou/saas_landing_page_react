import React from "react";
import styles from "../styles";
import MainButton from "./MainButton";
import { hero } from "../assets";
const Hero = () => {
  return (
    <section
      className={`flex md:flex-row flex-col justify-between items-center gap-4  ${styles.paddingX}  ${styles.paddingY} `}
    >
      <div className="flex flex-1 flex-col justify-start md:items-start items-center">
        <h1 className="text-white font-poppins font-bold md:text-start text-6xl">
          SaaS Landing Page Template
        </h1>
        <p className="text-gray-400 font-light font-poppins md:text-start pt-6 pb-10 text-xl">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com
        </p>
        <MainButton
          text={"Get started"}
          color={"bg-secondary"}
          textColor={"text-black"}
        />
      </div>
      <div className="flex flex-1  ">
        <img src={hero} alt="" className="w-full h-full" />
      </div>
    </section>
  );
};

export default Hero;
