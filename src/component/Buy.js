import React, { useState } from "react";
import BuyComponentLeftSide from "./BuyComponentLeftSide";
import BuyComponentRight from "./BuyComponentRight";
import { RxCrossCircled } from "react-icons/rx";

const Buy = () => {
  const [isPriceBandHovered, setIsPriceBandHovered] = useState(null);
  const [isEmiHovered, setIsEmiHovered] = useState(null);
  return (
    <div className="w-full flex items-center justify-center px-8">
      <div className="w-full md:w-[95%] custom:w-[90%] transition-all duration-1000">
        <div className="w-full flex flex-col xl:flex-row flex-nowrap justify-between my-3">
          <div className="w-full self-start">
            <p className="text-orange-500">New</p>
            <h1 className="text-4xl font-bold mt-1 mb-3">Buy iPhone 16 Pro</h1>
            <p className="text-nowrap truncate overflow-hidden">
              From ₹9575.00/mo. with instant cashback<sup>§§</sup> and No Cost
              EMI<sup>§</sup>Footnote or ₹119900.00Footnote<sup>‡</sup>
            </p>
          </div>
          <div className=" w-auto text-black text-nowrap text-sm mt-4 self-end">
            <span
              className="flex items-center justify-end bg-gray-100 rounded-full p-2 mb-2 hover:bg-gray-200 cursor-pointer"
              onMouseEnter={() => setIsPriceBandHovered(true)}
              onMouseLeave={() => setIsPriceBandHovered(false)}
            >
              Get ₹4000.00-₹67500.00 for your trade-in.Footnote*{" "}
              <RxCrossCircled
                className={`${
                  isPriceBandHovered ? "text-xl" : ""
                } ms-3 transition-all duration-500`}
              />
            </span>

            <span
              className=" flex items-center justify-end text-sm bg-gray-100 rounded-full p-2 hover:bg-gray-200 cursor-pointer"
              onMouseEnter={() => setIsEmiHovered(true)}
              onMouseLeave={() => setIsEmiHovered(false)}
            >
              Instant CashbackFootnote<sup>§§</sup> and No-Cost EMIFootnote{" "}
              <sup>§</sup>
              <RxCrossCircled
                className={`${
                  isEmiHovered ? "text-xl" : ""
                } ms-3 transition-all duration-500`}
              />
            </span>
          </div>
        </div>
        <div className="w-full md:flex relative mt-12">
          <div className="w-full h-[600px] flex flex-col justify-end md:w-2/3  md:sticky lg:top-[75px]">
            <BuyComponentLeftSide />
          </div>
          <div className="w-full md:w-1/3">
            <BuyComponentRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
