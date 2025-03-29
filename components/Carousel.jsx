"use client";

import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
// requires a loader
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = () => {
  const carouselItems = [
    {
      id: 1,
      image: "/gallery/1.jpg",
      title: "Engineer's Day",
      description: "At IISER Bhopal, QuCIS (Quantum Computing and Information Systems) celebrated Engineer's Day with enthusiasm. The day featured insightful talks by prominent engineers, hands-on workshops, and engaging discussions on cutting-edge technologies. Members of QuCIS showcased their passion for engineering, fostering a sense of innovation and collaboration within the IISER Bhopal community.",
    },
    {
      id: 2,
      image: "/imgs/2.jpg",
      title: "Title 2",
      description: "Description 2",
    },
    {
      id: 3,
      image: "/imgs/3.jpg",
      title: "Title 3",
      description: "Description 3",
    }
  ];

 
  return (

      <Carousel autoPlay  infiniteLoop showArrows showThumbs={true}  centerMode={true} className="  " >
        {carouselItems.map((item) => (
          <div
            key={item.id}
            className="    flex flex-col  justify-between"
          >
            <div className="  px-4 rounded-[16px]">
              <img src={item.image} className="md:h-full aspect-video object-cover rounded-[16px] shadow-lg" />
            </div>
            {/* <div className="md:w-[55%] text-left  flex flex-col gap-[19px] ">
              <h1 className="text-[40px] font-bj font-extrabold  text-purple-600 underline">
                {item.title}
              </h1>
              <p className="  text-md ">
                {item.description}
              </p>
            </div> */}
          </div>
        ))}
      </Carousel>
    //  </div>
  );
}

export default ImageCarousel;
