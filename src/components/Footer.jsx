import React from "react";
import styles from "../styles";
import MainButton from "./MainButton";
import { footerlinks } from "../constants";

const Footer = () => {
  return (
    <section
      className={`flex md:flex-row flex-col justify-between items-center gap-4 ${styles.paddingX} ${styles.paddingY} border-t border-white border-opacity-20`}
    >
      <div className="flex flex-1 flex-col gap-4 justify-start items-start">
        <h1 className="font-poppins font-bold text-white">Wallet</h1>
        <div className="flex gap-4">
          {footerlinks.map((link) => (
            <h1
              key={link.id}
              className="font-poppins font-medium hover:text-primary cursor-pointer text-white"
            >
              {link.content}
            </h1>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-4 flex-1">
        <p className="font-poppins font-light text-white">
          Updates right to your Inbox
        </p>
        <div className="flex gap-4 items-center">
          <input
            type="email"
            placeholder="Your email"
            className="py-2 px-6 rounded-[10px] border-none focus:outline-none bg-[#333333]"
          />
          <MainButton
            text={"Send"}
            color={"bg-primary"}
            textColor={"text-black"}
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
