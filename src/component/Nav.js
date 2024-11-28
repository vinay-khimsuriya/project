import React, { useEffect, useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { RxCrossCircled } from "react-icons/rx";
import {
  RiArrowDownWideFill,
  RiArrowLeftWideFill,
  RiArrowRightWideFill,
  RiArrowUpWideFill,
} from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

import { HiArrowLeft } from "react-icons/hi2";
import useWidth from "../custom-hooks/useWidth";
import { clear } from "@testing-library/user-event/dist/clear";
import { GiHidden } from "react-icons/gi";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [isSearch, setIsSearch] = useState(null);
  const [isSearchText, setIsSearchText] = useState(false);

  // active if wants to accordian feature start
  const [openIndexes, setOpenIndexes] = useState([]); //for multiple open accordian
  const [activeIndex, setActiveIndex] = useState(null); //at time single accorian open
  // end

  const [isMenuOptionOpen, setIsMenuOptionOpen] = useState(null); // this for open new div for selected option
  const [isHovered, setIsHovered] = useState(null);

  const width = useWidth();

  const navOption = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];
  const category = ["Shop", "Quick Links", "Shop Special Stores"];
  const subCategory = ["Shop", "Quick Links", "Shop Special Stores", "abcd"];

  useEffect(() => {
    // setIsMenuOpen(false);
  }, [width]);

  const handleInputChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    setIsSearchText(text.trim().length > 0);
  };
  const clearInput = () => {
    setSearchText("");
    setIsSearchText(false);
  };

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <nav className="w-full bg-black flex flex-col items-center justify-center relative z-50">
      <div className="w-full lg:w-2/3">
        <div className="w-full flex items-center bg-black justify-between gap-5 px-5">
          <div className=" cursor-pointer">
            <span className="hidden custom:block">
              <svg
                height="44"
                viewBox="0 0 14 44"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="white"
                  d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"
                ></path>
              </svg>
            </span>
            <span className="custom:hidden">
              <svg
                height="48"
                viewBox="0 0 17 48"
                width="17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="white"
                  d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"
                ></path>
              </svg>
            </span>
          </div>
          <div className="text-white w-full hidden custom:flex justify-center ">
            <ul className="w-full flex flex-nowrap text-nowrap items-center gap-2 justify-between h-full">
              {navOption.map((option, index) => (
                <li
                  className="cursor-pointer hover:text-rose-300"
                  key={index}
                  onMouseEnter={() => {
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                  }}
                >
                  <a className="py-3">{option}</a>

                  <div
                    className={`${isHovered ? "top-[95%]" : "-top-[450%]"}
                      hidden -z-10 custom:flex justify-center transition-all duration-1000 absolute w-screen left-0 bg-black text-white cursor-default`}
                  >
                    <div className="w-full lg:w-2/3 text-start flex gap-10 p-5  self-start">
                      {category.map((category, index) => (
                        <ul className="">
                          <li className="font-semibold pb-2">
                            <a>{category}</a>
                          </li>
                          {subCategory.map((category, index) => (
                            <ul>
                              <li className="cursor-pointer hover:text-rose-300">
                                <a>{category}</a>
                              </li>
                            </ul>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center justify-between pt-1 gap-5">
              <a
                className="cursor-pointer"
                onClick={() => {
                  setIsSearch(!isSearch);
                }}
              >
                <span className="hidden custom:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15px"
                    height="44px"
                    viewBox="0 0 15 44"
                  >
                    <path
                      fill="white"
                      d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"
                    ></path>
                  </svg>
                </span>
                <span className="custom:hidden">
                  <svg
                    height="48"
                    viewBox="0 0 17 48"
                    width="17"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="white"
                      d="m16.2294 29.9556-4.1755-4.0821a6.4711 6.4711 0 1 0 -1.2839 1.2625l4.2005 4.1066a.9.9 0 1 0 1.2588-1.287zm-14.5294-8.0017a5.2455 5.2455 0 1 1 5.2455 5.2527 5.2549 5.2549 0 0 1 -5.2455-5.2527z"
                    ></path>
                  </svg>
                </span>
              </a>
              <a className="cursor-pointer">
                <span className="hidden custom:block">
                  <svg
                    height="44"
                    viewBox="0 0 14 44"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="white"
                      d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"
                    ></path>
                  </svg>
                </span>
                <span className="custom:hidden">
                  <svg
                    height="48"
                    viewBox="0 0 17 48"
                    width="17"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="white"
                      d="m13.4575 16.9268h-1.1353a3.8394 3.8394 0 0 0 -7.6444 0h-1.1353a2.6032 2.6032 0 0 0 -2.6 2.6v8.9232a2.6032 2.6032 0 0 0 2.6 2.6h9.915a2.6032 2.6032 0 0 0 2.6-2.6v-8.9231a2.6032 2.6032 0 0 0 -2.6-2.6001zm-4.9575-2.2768a2.658 2.658 0 0 1 2.6221 2.2764h-5.2442a2.658 2.658 0 0 1 2.6221-2.2764zm6.3574 13.8a1.4014 1.4014 0 0 1 -1.4 1.4h-9.9149a1.4014 1.4014 0 0 1 -1.4-1.4v-8.9231a1.4014 1.4014 0 0 1 1.4-1.4h9.915a1.4014 1.4014 0 0 1 1.4 1.4z"
                    ></path>
                  </svg>
                </span>
              </a>
              <div className="text-white py-4 px-1 block custom:hidden">
                <FaGripLines
                  className={`cursor-pointer ${
                    isMenuOpen ? "hidden" : "block"
                  }`}
                  onClick={() => setIsMenuOpen(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*start// Menu start */}
      <div
        className={`fixed ${
          isMenuOpen ? "w-full" : "w-0"
        } block custom:hidden text-white bg-black transition-all duration-700 right-0 top-0 h-screen overflow-auto`}
      >
        <div className="w-full flex flex-col gap-5 p-5">
          <div className="w-full flex justify-end">
            <RxCross1
              className={`cursor-pointer`}
              onClick={() => setIsMenuOpen(false)}
            />
          </div>

          <ul className="w-full self-start">
            {navOption.map((option, index) => (
              <div
                className="relative w-full ps-5 py-2 text-start cursor-pointer"
                key={index}
              >
                <li
                  className="flex items-center justify-between hover:text-rose-200"
                  onClick={() => {
                    toggleAccordion(index);
                    setIsMenuOptionOpen(true);
                  }}
                >
                  <a className="">{option}</a>
                  <RiArrowRightWideFill className="text-xl" />
                  {/*start//  for accordian type menu option open */}
                  {/* {activeIndex === index ? (
                    <RiArrowUpWideFill className="text-2xl" />
                  ) : (
                    <RiArrowDownWideFill className="text-2xl" />
                  )} */}
                </li>
                {/* {activeIndex === index && (
                  // openIndexes.includes(index)0
                  <div className="w-full p-1">
                    <ul className="ps-2">
                      <li className="p-1 hover:text-red-300">TVs</li>
                      <li className="p-1 hover:text-red-300">AirPods</li>
                      <li className="p-1 hover:text-red-300">MacBook</li>
                      <li className="p-1 hover:text-red-300">Tabs</li>
                    </ul>
                  </div>
                )} */}
                {/*end// for accordian option*/}
              </div>
            ))}
          </ul>
          {/*start// for selected menu open new div */}
          <div
            className={`${
              isMenuOptionOpen ? "block" : "hidden"
            } w-full h-screen fixed top-0 bg-black overflow-auto self-start text-start p-5`}
          >
            <div className="w-full flex justify-start pb-5">
              <HiArrowLeft
                className="text-xl cursor-pointer"
                onClick={() => {
                  setIsMenuOptionOpen(false);
                }}
              />
            </div>
            <ul className="">
              {category.map((category, index) => (
                <li
                  className="p-1 hover:text-red-300 cursor-pointer"
                  key={index}
                >
                  <a>{category}</a>
                </li>
              ))}
            </ul>
          </div>
          {/*end// new div */}
        </div>
      </div>
      {/*end// */}

      {/*start// search component  */}
      <div
        className={`w-full ${
          isSearch ? "h-screen" : "h-0"
        } bg-black transition-all duration-700 fixed top-0 left-0 z-10`}
      >
        <div className="w-full h-full flex flex-col items-center overflow-auto">
          <div className="w-full flex justify-end p-5 text-white cursor-pointer">
            <RxCross1 onClick={() => setIsSearch(false)} />
          </div>
          <div className="w-4/5 custom:w-[700px]">
            <div className="w-full flex justify-center items-center gap-1 p-2 text-gray-50 border border-gray-500 rounded-lg">
              <CiSearch className="text-3xl" />
              <input
                className="w-full p-1 bg-transparent focus:outline-none font-bold text-2xl"
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={handleInputChange}
              />
              <RxCrossCircled
                className={`${
                  isSearchText ? "block" : "hidden"
                } text-xl cursor-pointer`}
                onClick={clearInput}
              />
            </div>
          </div>
        </div>
      </div>
      {/*end// */}
    </nav>
  );
};

export default Nav;
