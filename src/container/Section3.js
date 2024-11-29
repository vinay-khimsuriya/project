import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import iphoneFirst from "../images/iphone-16-first.webp";
import iphoneSecond from "../images/iphone-16-second.jpg";
import iphoneThird from "../images/iphone-16-third.jpg";

const Section3 = () => {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    arrows:false,
    button:false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth:true
  };
  return (
    <div className="slider-container ">
      <Slider className="" ref={(slider) => (sliderRef = slider)} {...settings} 
        centerMode={true} 
        centerPadding="0" 
        initialSlide={0}
        >
        <div className="slider-boxes" style={{ width:800 }}>
          <img src={iphoneFirst} alt="" />
        </div>
        <div className="slider-boxes" style={{ width:800 }}>
          <img src={iphoneSecond} alt="" />
        </div>
        <div className="slider-boxes" style={{ width:800 }}>
          <img src={iphoneThird} alt="" />
        </div>
        <div className="slider-boxes" style={{ width:800 }}>
          <img src={iphoneSecond} alt="" />
        </div>
        <div className="slider-boxes" style={{ width:800 }}>
          <img src={iphoneThird} alt="" />
        </div>
        <div className="slider-boxes" style={{ width:800 }}>
          <img src={iphoneSecond} alt="" />
        </div>
      </Slider>
    </div>
  );
};
export default Section3;
