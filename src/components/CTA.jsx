import React from "react";
import styles from "../styles";
import MainButton from "./MainButton";
import { contact, contactgif } from "../assets";
const CTA = () => {
  return (
    <section
      className={`flex md:flex-row flex-col justify-between items-center gap-4  ${styles.paddingX}  ${styles.paddingY} `}
    >
      <div className="flex flex-1 flex-col justify-start md:items-start items-center">
        <h1 className="text-white font-poppins font-bold md:text-start text-6xl">
          Questions? Let’s talk
        </h1>
        <p className="text-gray-400 font-light font-poppins md:text-start pt-6 pb-10 text-xl">
          Contact us through our 24/7 live chat. We’re always happy to help!
        </p>
        <MainButton
          text={"Get started"}
          color={"bg-secondary"}
          textColor={"text-black"}
        />
      </div>
      <div className="flex flex-1  ">
        <img src={contactgif} alt="" className="w-full h-full rounded-[20px]" />
      </div>
    </section>
  );
};

export default CTA;
