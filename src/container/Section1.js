import React from "react";
import SectionCard from "./SectionCard";
import iphoneFirst from "../images/iphone-16-first.webp";
import iphoneSecond from "../images/iphone-16-second.jpg";
import iphoneThird from "../images/iphone-16-third.jpg";

const Section1 = () => {
  return (
    <div className="w-full m-0 p-0">
      <SectionCard marginbottom="true" bgimage={iphoneFirst} />
      <SectionCard bgimage={iphoneSecond} />
      <SectionCard bgimage={iphoneThird} />
    </div>
  );
};

export default Section1;
