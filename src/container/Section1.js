import React from "react";
import SectionCard from "./SectionCard";
import First from "../images/2.jpg";
import Second from "../images/5.jpg";
import Third from "../images/2.jpg";
import SectionCardWithLayer from "./SectionCardWithLayer";

const Section1 = () => {
  return (
    <div className="w-full m-0 p-0">
      {/* <SectionCardWithLayer marginbottom="true" bgimage={Second} /> */}

      <SectionCard marginbottom="true" bgimage={First} />
      <SectionCard bgimage={Second} />
      <SectionCard bgimage={Third} />
    </div>
  );
};

export default Section1;
