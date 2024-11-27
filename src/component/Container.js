import React from "react";

const Container = () => {

  const containeroption = [
    {
      heading:"iPhone 16 Pro",
    text:"Hello, Apple Intelligence",
    button1:"Learn more",
    button2:"Buy",
    img:"container1.jpg"
  },
    {
      heading:"iPhone 16 Pro",
      text:"Hello, Apple Intelligence",
      button1:"Learn more",
      button2:"Buy",
      img:"container1.jpg"
    },
      {
        heading:"iPhone 16 Pro",
        text:"Hello, Apple Intelligence",
        button1:"Learn more",
        button2:"Buy",
        img:"container1.jpg"
      }
    ]
  return <>
  < div className="main-container">
      {containeroption.map((item,index)=>{
        return(
        <div className="outer-container" key={index}>
          <img src={item.img} alt="" />
        <div className="inner-container" >
          <p>{item.heading}</p>
          <p>{item.text}</p>
          <div className="container-button">
            <button><a href="">{item.button1}</a></button>
            <button><a href="">{item.button2}</a></button>
          </div>
        </div>
        </div>
        )
      })}
  </div>
  </>;
};

export default Container;
