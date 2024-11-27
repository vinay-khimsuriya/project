import React from "react";

const ProductContainer = () => {
  const containeroption = [
    {
      heading: "Airpods 4",
      text: `Iconic Now supersonic.
      Available with Active Noise Cancellation.`,
      button1: "Learn more",
      button2: "Buy",
      img: "container1.jpg",
    },
    {
      heading: "Watch",
      text: "Hello, Apple Intelligence",
      button1: "Learn more",
      button2: "Buy",
      img: "container1.jpg",
    },
    {
      heading: "MacBook Air",
      text: "Hello, Apple Intelligence",
      button1: "Learn more",
      button2: "Buy",
      img: "container1.jpg",
    },
    {
      heading: "Apple for Small Bussiness",
      text: "Hello, Apple Intelligence",
      button1: "Learn more",
      button2: "Buy",
      img: "container1.jpg",
    },
    {
      heading: "Carrier Deals at Apple",
      text: "Hello, Apple Intelligence",
      button1: "Learn more",
      button2: "Buy",
      img: "container1.jpg",
    },
    {
      heading: "Trade In",
      text: "Hello, Apple Intelligence",
      button1: "Learn more",
      button2: "Buy",
      img: "container1.jpg",
    },
  ];

  return (
    <>
      <div className="product-main-container">
        {containeroption.map((item, index) => {
          return (
              <div className="product-outer-container" key={index}>
                <img src={item.img} alt="" />
                <div className="product-inner-container">
                  <p>{item.heading}</p>
                  <p>{item.text}</p>
                  <div className="product-container-button">
                    <button>
                      <a href="">{item.button1}</a>
                    </button>
                    <button>
                      <a href="">{item.button2}</a>
                    </button>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductContainer;
