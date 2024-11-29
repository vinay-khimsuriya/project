import React from "react";

const BuyComponentRight = () => {
  return (
    <div className="w-full p-6">
      <div className="text-2xl">
        <b>Model.</b>{" "}
        <span className="text-gray-500">Which is best for you?</span>
      </div>
      <div className="flex border-2 border-gray-500 rounded-lg justify-between py-4 px-1 mt-4 pr-4 pl-4 text-sm lg:text-base xl:text-base text-left">
        <div>
          <h4>
            <b>iPhone 16 Pro</b>
          </h4>
          <p>
            6.3-inch display<sup>1</sup>
          </p>
          <p style={{ margin: "0.5rem" }}>
            Apple Intelligence<sup>8</sup>
          </p>
        </div>
        <div className="ml-[1rem]">
          <p>
            From $999
            <br />
            or $41.62/mo
            <br />
            for 24 mo.*
          </p>
        </div>
      </div>

      <div className="flex border-2 border-gray-500 rounded-lg justify-between py-4 px-1 mt-4 pr-4 pl-4 text-sm lg:text-base xl:text-base text-left">
        <div>
          <h4>
            <b>iPhone 16 Pro</b>
          </h4>
          <p>
            6.3-inch display<sup>1</sup>
          </p>
          <p style={{ margin: "0.5rem" }}>
            Apple Intelligence<sup>8</sup>
          </p>
        </div>
        <div>
          <p>
            From $999
            <br />
            or $41.62/mo
            <br />
            for 24 mo.*
          </p>
        </div>
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
          <div className="flex mt-4">
            <div className="h-[2rem] w-[2rem] bg-[#EBE4DD] rounded-full ml-2"></div>
            <div className="h-[2rem] w-[2rem] bg-[#EDECE8] rounded-full ml-2"></div>
            <div className="h-[2rem] w-[2rem] bg-[#FBFAFA] rounded-full ml-2"></div>
            <div className="h-[2rem] w-[2rem] bg-[#C6C6C6] rounded-full ml-2"></div>
          </div>
        </div>
      </div>

      <div className="mt-96">
        <div className=" text-2xl">
          <b>Space.</b>
          <span className="text-gray-500">How much space do you need?</span>
        </div>
        <div className="custom:grid grid-cols-2 gap-x-4 max485:flex flex-col">
          <div>
            <div className="flex justify-between items-center border-2 border-gray-300 rounded-[1rem] p-2 mt-6 text-gray-300 ">
              <p>
                128GB<sup>2</sup>
              </p>
              <p>
                From $999
                <br />
                or $41.62/mo.
                <br />
                for 24 mo.*
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center border-2 border-gray-300 rounded-[1rem] p-2 mt-6 text-gray-300 ">
              <p>
                256GB<sup>2</sup>
              </p>
              <p>
                From $999
                <br />
                or $41.62/mo.
                <br />
                for 24 mo.*
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center border-2 border-gray-300 rounded-[1rem] p-2 mt-6 text-gray-300 ">
              <p>
                512GB<sup>2</sup>
              </p>
              <p>
                From $999
                <br />
                or $41.62/mo.
                <br />
                for 24 mo.*
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center border-2 border-gray-300 rounded-[1rem] p-2 mt-6 text-gray-300 ">
              <p>
                1TB<sup>2</sup>
              </p>
              <p>
                From $999
                <br />
                or $41.62/mo.
                <br />
                for 24 mo.*
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyComponentRight;
