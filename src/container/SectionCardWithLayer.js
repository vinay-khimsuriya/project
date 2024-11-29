import React from "react";

const SectionCardWithLayer = ({ marginbottom, bgimage }) => {
  return (
    <div
      className={`relative w-full text-white border h-[550px] ${
        marginbottom ? "mb-2" : "mb-0"
      } overflow-hidden`}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={bgimage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      {/* Card Content */}
      <div className="relative z-20 w-full flex justify-center h-full">
        <div className="flex flex-col justify-between">
          <div className="mt-8 text-center font-bold content-start bg-transparent text-white">
            <h2 className="text-3xl mb-2">Product Name</h2>
            <p className="text-xl">Built for apple intelligence</p>
          </div>
          <div className="mb-7">
            <div className="flex justify-center gap-5">
              <button className="bg-blue-600 px-5 py-2 rounded-full hover:bg-blue-800">
                Learn more
              </button>
              <button className="bg-transparent border border-blue-600 px-5 py-2 rounded-full hover:bg-blue-800">
                Buy
              </button>
            </div>
            <p className="mt-2">
              Apple Intelligence available now in US English
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCardWithLayer;
