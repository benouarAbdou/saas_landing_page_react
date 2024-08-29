import React from "react";
import styles from "../styles";
import MainButton from "./MainButton";
const Navbar = () => {
  return (
    <nav className={`flex justify-between items-center   ${styles.paddingX} `}>
      <h1 className="font-poppins font-bold text-white ">Wallet</h1>
      <div className="flex gap-6 items-center">
        <a href="#" className="text-white font-poppins font-light text-sm">
          Sign up
        </a>
        <MainButton
          text={"Login"}
          color={"bg-primary"}
          textColor={"text-black"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
