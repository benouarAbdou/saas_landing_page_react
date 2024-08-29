import React from "react";
import styles from "../styles";
import Slider from "react-slick";
import TestimonialsCard from "./TestimonialsCard";
import { feedbacks } from "../constants";
// Import CSS for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000
  };

  return (
    <section className={`${styles.paddingX}  ${styles.paddingY} `}>
      <div className={` md:px-32 px-8 py-10 bg-primary rounded-[20px]`}>
        <Slider {...settings} className="bg-transparent">
          {feedbacks.map((feedback) => (
            <TestimonialsCard feedback={feedback} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
