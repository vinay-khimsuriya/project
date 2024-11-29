import React from "react";
import Buycard from "./Buycard";

const BuyComponentRight = () => {
  return (
    <div className="w-full p-2">
      <div className="text-2xl">
        <b>Model.</b>{" "}
        <span className="text-gray-500">Which is best for you?</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0 md:gap-4 lg:gap-0">
        <Buycard
          title="iPhone 16 Pro"
          description="6.3-inch display"
          price={44450}
          installment={1599}
          isProduct={true}
        />
        <Buycard
          title="iPhone 16 Pro max"
          description="6.9-inch display"
          price={44450}
          installment={1599}
          isProduct={true}
        />
      </div>
      <div className=" flex border-gray-500 rounded-lg py-4 pr-4 pl-4 mt-4 bg-gray-200 text-sm lg:text-base xl:text-base text-left">
        <div>
          <p>
            <b>Need help choosing a model?</b>
          </p>
          <p>Explore the difference in screen size and battery life.</p>
        </div>
        <div className="pr-2">+</div>
      </div>

      <div className="mt-12">
        <div className=" text-2xl">
          <b>Finish.</b>
          <span className="text-gray-500">Pick your favorite.</span>
        </div>
        <div>
          <p className="mt-8">
            <b>Color</b>
          </p>
          <div className="flex justify-center mt-4">
            <div className="h-[2rem] w-[2rem] bg-[#EBE4DD] rounded-full ml-2"></div>
            <div className="h-[2rem] w-[2rem] bg-[#EDECE8] rounded-full ml-2"></div>
            <div className="h-[2rem] w-[2rem] bg-[#FBFAFA] rounded-full ml-2"></div>
            <div className="h-[2rem] w-[2rem] bg-[#C6C6C6] rounded-full ml-2"></div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className=" text-2xl">
          <b>Space.</b>
          <span className="text-gray-500">How much space do you need?</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0 md:gap-4 lg:gap-0">
          <Buycard subtitle="128Gb" price={44450} installment={1599} />
          <Buycard subtitle="256Gb" price={56520} installment={2099} />
          <Buycard subtitle="512Gb" price={76890} installment={2599} />
          <Buycard subtitle="1024Gb" price={99999} installment={3599} />
        </div>
      </div>
    </div>
  );
};

export default BuyComponentRight;
