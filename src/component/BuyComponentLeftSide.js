import React from "react";
import product1 from "../images/product1.webp";
import product2 from "../images/product2.webp";

const BuyComponentLeftSide = () => {
  return (
    <div className="w-full border">
      <div>left side</div>
      <img src={product1} />
      <img src={product2} />
    </div>
  );
};

export default BuyComponentLeftSide;
