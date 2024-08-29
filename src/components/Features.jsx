import React from "react";
import { features } from "../constants";
import FeatureCard from "./FeatureCard";
import styles from "../styles";

const Features = () => {
  return (
    <section
      className={`flex md:flex-row flex-col items-center justify-center gap-8  ${styles.paddingX}  ${styles.paddingY}`}
    >
      {features.map((feature) => (
        <FeatureCard feature={feature} />
      ))}
    </section>
  );
};

export default Features;
