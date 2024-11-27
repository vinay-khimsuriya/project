import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
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
          <img src="container1.jpg" alt="" />
        </div>
        <div className="slider-boxes" style={{ width:800 }}>
          <img src="container2.jpg" alt="" />
        </div>
        <div className="slider-boxes" style={{ width:800 }}>
          <img src="container1.jpg" alt="" />
        </div>
        <div className="slider-boxes" style={{ width:800 }}>
          <img src="container2.jpg" alt="" />
        </div>
        <div className="slider-boxes" style={{ width:800 }}>
          <img src="container1.jpg" alt="" />
        </div>
        <div className="slider-boxes" style={{ width:800 }}>
          <img src="container2.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};
export default Carousel;
