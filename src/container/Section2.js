import React, { useState } from "react";
import SectionCard from "./SectionCard";
import iphoneFirst from "../images/iphone-16-first.webp";
import iphoneSecond from "../images/iphone-16-second.jpg";
import iphoneThird from "../images/iphone-16-third.jpg";

const Section2 = () => {
  const[productData,setProductData] = useState(null);
  return (
    <div className="w-full p-2 border grid gap-2 md:grid-cols-2">
      <SectionCard
        marginbottom={true}
        bgimage={iphoneFirst}
        productData={productData}
      />
      <SectionCard bgimage={iphoneSecond} productData={productData} />
      <SectionCard bgimage={iphoneThird} productData={productData} />
      <SectionCard bgimage={iphoneSecond} productData={productData} />
      <SectionCard bgimage={iphoneThird} productData={productData} />
      <SectionCard bgimage={iphoneSecond} productData={productData} />
      <SectionCard bgimage={iphoneThird} productData={productData} />
    </div>
  );
};

export default Section2;
