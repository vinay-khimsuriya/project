import React, { useState } from "react";
import { footerContent, footerData } from "./FooterContent";
import { RiArrowDownWideFill, RiArrowUpWideFill } from "react-icons/ri";

const Footer = () => {
  const hoverEffect = "hover:font-normal";
  const [openIndexes, setOpenIndexes] = useState([]); //for multiple open accordian
  const [activeIndex, setActiveIndex] = useState(null); //at time single accorian open

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  //use if want optimize
  // const Section = ({ heading, list }) => (
  //   <ul className="flex flex-col gap-1">
  //     <li className="my-1 font-bold">{heading}</li>
  //     <li>
  //       <ul className="font-light">
  //         {list.map((item, idx) => (
  //           <li key={idx} className="cursor-pointer hover:underline">
  //             {item}
  //           </li>
  //         ))}
  //       </ul>
  //     </li>
  //   </ul>
  // );

  // const Footer = () => (
  //   <div className="w-full hidden custom:flex justify-between">
  //     {footerData.map((section, index) => (
  //       <Section key={index} heading={section.heading} list={section.list} />
  //     ))}
  //   </div>
  // );

  return (
    <div className="w-full footer-main-container">
      <div className="w-full px-10 lg:w-2/3 lg:px-0 text-justify text-sm ">
        <div className="w-full">
          {footerContent.map((content, index) => (
            <div className="flex gap-1 my-3 text-sm">
              <p className="indent-5">
                {index + 1 + "."} <spam>{content}</spam>
              </p>
            </div>
          ))}
        </div>
        <div className="my-6">
          <div className="w-full hidden custom:flex justify-between">
            <div className="flex flex-col gap-1">
              <ul className="">
                <li className="my-1">Shop and Learn</li>
                <li>
                  <ul className="font-light">
                    <li className={`cursor-pointer ${hoverEffect}`}>Store</li>
                    <li className={`cursor-pointer ${hoverEffect}`}>Mac</li>
                    <li className={`cursor-pointer ${hoverEffect}`}>iPad</li>
                    <li className={`cursor-pointer ${hoverEffect}`}>iPhone</li>
                    <li className={`cursor-pointer ${hoverEffect}`}>Watch</li>
                    <li className={`cursor-pointer ${hoverEffect}`}>Vision</li>
                    <li className={`cursor-pointer ${hoverEffect}`}>Airpods</li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      TV & Home
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>AirTag</li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Accessories
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Gift Cards
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="">
                <li className="my-1">Apple Wallet</li>
                <li>
                  <ul className="font-light">
                    <li className={`cursor-pointer ${hoverEffect}`}>Wallet</li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Apple Card
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Apple Pay
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Apple Cash
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1">
              <ul className="">
                <li className="my-1">Account</li>
                <li>
                  <ul className="font-light">
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Manage Your Apple Account
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Apple Store Account
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      iCloud.com
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="">
                <li className="my-1">Entertainment</li>
                <li>
                  <ul className="font-light">
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Apple One
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Apple TV+
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Apple Music
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Apple Arcade
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Apple Fitness+
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Apple News+
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Apple Podcasts
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Apple Books
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Apple Store
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1">
              <ul className="">
                <li className="my-1">Apple Store</li>
                <li>
                  <ul className="font-light">
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Find a Store
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Genius Bar
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Today at Apple
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Group Reservations
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Apple Camp
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Apple Store App
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Certified Refurbished
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Apple Trade in
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Financing
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Carrier Deals at Apple
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Order Status
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Shopping Help
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1">
              <ul className="">
                <li className="my-1">For Business</li>
                <li>
                  <ul className="font-light">
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Apple and Business
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Shop for Business
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="">
                <li className="my-1">For Education</li>
                <li>
                  <ul className="font-light">
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Apple and Education
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Shop for K-12
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Shop for College
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="">
                <li className="my-1">For Healthcare</li>
                <li>
                  <ul className="font-light">
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Apple in Healthcare
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Mac in Healthcare
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Health on Apple Watch
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Health Records on iPhone and iPad
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className="">
                <li className="my-1">For Government</li>
                <li>
                  <ul className="font-light">
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Shop for Government
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Shop for Veterans and Military
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1">
              <ul className="">
                <li className="my-1">Apple Values</li>
                <li>
                  <ul className="font-light">
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Accessibility
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Education
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Environment
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Inclusion and Diversity
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>Privacy</li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Racial Equity and Justice
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Supply Chain
                    </li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li className="my-1">About Apple</li>
                <li>
                  <ul className="font-light">
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Newsroom
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Apple Leadership
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Career Opportunities
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Investors
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Ethics and Compliance
                    </li>
                    <li className={`cursor-pointer ${hoverEffect}`}>Events</li>
                    <li className={`cursor-pointer ${hoverEffect}`}>
                      Contact Apple
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-3 block custom:hidden">
            {footerData.map((object, index) => (
              <div
                className="border rounded my-2 relative"
                onClick={() => toggleAccordion(index)}
              >
                <div className="w-full flex justify-between items-center border rounded p-1 cursor-pointer">
                  <p className="w-full py-1">{object.heading}</p>
                  {openIndexes.includes(index) ? (
                    <RiArrowUpWideFill className="me-2" />
                  ) : (
                    <RiArrowDownWideFill className="me-2" />
                  )}
                </div>
                {openIndexes.includes(index) && (
                  <div className="px-5 py-2">
                    {object.list.map((content, index) => (
                      <p className="font-light pe-1 cursor-pointer hover:font-normal">
                        {content}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
