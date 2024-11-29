import React, { useState } from "react";
import SectionCard from "./SectionCard";
import First from "../images/1.jpg";
import Second from "../images/2.jpg";
import Third from "../images/3.jpg";
import Forth from "../images/4.jpg";
import Fifth from "../images/5.jpg";
import Six from "../images/6.jpg";

const Section2 = () => {
  const [productData, setProductData] = useState(null);
  return (
    <div className="w-full p-2 grid gap-2 md:grid-cols-2">
      <SectionCard
        marginbottom={true}
        bgimage={First}
        productData={productData}
      />
      <SectionCard bgimage={Second} productData={productData} />
      <SectionCard bgimage={Third} productData={productData} />
      <SectionCard bgimage={Forth} productData={productData} />
      <SectionCard bgimage={Fifth} productData={productData} />
      <SectionCard bgimage={Six} productData={productData} />
    </div>
  );
};

export default Section2;
