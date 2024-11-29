import React ,{useRef} from "react";
import product1 from "../images/product1.webp";
import product2 from "../images/product2.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BuyComponentLeftSide = () => {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  
  const settings = {
    // button:false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    variableWidth:true,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="hidden md:block py-2 px-4 absolute top-1/2 right-6 lg:-right-16 -translate-y-1/2 text-default-high bg-default-light hover:text-black hover:bg-stone-300 rounded-full z-10"
        onClick={onClick}
      >
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="hidden md:block py-2 px-4 absolute top-1/2 left-6 lg:-left-16 -translate-y-1/2 text-default-high bg-default-light hover:text-black hover:bg-stone-300 rounded-full z-10"
        onClick={onClick}
      >
        <i class="fa-solid fa-chevron-left"></i>
      </div>
    );
  }

  return (
    // <div className="w-full">
      <div className="slider-container">
        <Slider className="" ref={(slider) => (sliderRef = slider)} {...settings} >
        <div className="slider-boxes" style={{ width:800 }}>
          <img className="rounded-3xl" src={product1} alt="" />
        </div>
        <div className="slider-boxes" style={{ width:800 }}>
          <img className="rounded-3xl" src={product2} alt="" />
        </div>
      </Slider>
      </div>

  );
};

export default BuyComponentLeftSide;
