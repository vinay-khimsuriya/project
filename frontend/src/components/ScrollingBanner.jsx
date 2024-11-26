import '../App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from 'react';

import React, { useRef } from 'react';
import Slider from 'react-slick';

const MySlider = () => {
  const sliderRef = useRef(null);

  const handleMouseOver = () => {
    if (sliderRef.current) {
      // Slow down the speed when mouse is over
      sliderRef.current.slickPlay(); // Keep autoplay playing
      sliderRef.current.slickSetOption('autoplaySpeed', 5000, true);  // Set speed to 5 seconds (5000ms)
    }
  };

  const handleMouseOut = () => {
    if (sliderRef.current) {
      // Reset to original speed when mouse leaves
      sliderRef.current.slickPlay(); // Continue autoplay
      sliderRef.current.slickSetOption('autoplaySpeed', 3000, true);  // Reset speed to 3 seconds (3000ms)
    }
  };

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,  // Initial speed (3 seconds)
    speed: 1000,  // Transition speed (1 second)
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Slider ref={sliderRef} {...settings}>
        <div><h3>Slide 1</h3></div>
        <div><h3>Slide 2</h3></div>
        <div><h3>Slide 3</h3></div>
      </Slider>
    </div>
  );
};

export default MySlider;


const ScrollingBanner = () => {

  
    const sliderRef = useRef(null);
  
    const handleMouseOver = () => {
      // Slow down the speed when mouse is over
      if (sliderRef.current) {
        sliderRef.current.slickPlay();
        sliderRef.current.slickSetOption('autoplaySpeed', 5000, true);  // Set speed to 5 seconds (5000ms)
      }
    };
  
    const handleMouseOut = () => {
      // Reset to original speed when mouse leaves
      if (sliderRef.current) {
        sliderRef.current.slickSetOption('autoplaySpeed', 3000, true);  // Set speed back to 3 seconds (3000ms)
      }
    };
  

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    // autoplaySpeed: 2000,
    cssEase: "linear"
  }; return (<>
    <div className="slider-container" onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      
      <Slider ref={sliderRef} {...settings}>
        <div className='img-box'>
          <div>
          <img src="img1.jpg" alt="" />
          <div className="scroll-content"><button>Play</button></div>
          </div>
        </div>
        <div className='img-box'>
          <div>
          <img src="img3.webp" alt="" />
          </div>
        </div>
        <div className='img-box'>
          <div>
          <img src="img4.webp" alt="" />
          </div>
        </div>
        <div className='img-box'>
        <div>
          <img src="img5.webp" alt="" />
          </div>
        </div>
        {/* <div className='img-box'>
        <img src="img6.webp" alt="" />
        </div> */}
      </Slider>
    </div>
  </>);
}
export default ScrollingBanner;