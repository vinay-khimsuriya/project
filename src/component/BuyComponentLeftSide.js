import React from "react";
import product1 from "../images/product1.webp";
import product2 from "../images/product2.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BuyComponentLeftSide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
  };
  return (
    // <div className="w-full">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={product1} alt="" />
          </div>
          <div>
            <img src={product2} alt="" />
          </div>
        </Slider>
      </div>

  );
};

export default BuyComponentLeftSide;
