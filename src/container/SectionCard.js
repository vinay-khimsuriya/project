import React from "react";

const SectionCard = ({ marginbottom, bgimage }) => {
  return (
    <div
      className={`w-full text-white border h-[500px] bg-black ${
        marginbottom ? "mb-2" : "mb-0"
      }`}
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full flex justify-center h-full">
        <div className="flex flex-col justify-between">
          <div className="mt-8 text-center font-bold content-start bg-transparent text-white">
            <h2 className="text-3xl mb-2">Product Name</h2>
            <p className="text-xl">Built for apple intelligence</p>
          </div>
          <div className=" mb-7">
            <div className="flex justify-center gap-5 ">
              <button className="bg-blue-600 px-5 py-2 rounded-full hover:bg-blue-800 ">
                Learn more
              </button>
              <button className="bg-transparent border border-blue-600 px-5 py-2 rounded-full hover:bg-blue-800 ">
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

export default SectionCard;
