import React from "react";
import "./BannerItem.css";

const BannerItem = ({ slideData }) => {
  const { id, previous, next, image } = slideData;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img rounded-xl">
        <img
          src={image}
          alt="bannerimage-1"
          className="w-full h-max rounded-xl"
        />
      </div>
      <div className="absolute transform -translate-y-1/2 left-8 md:left-24 top-1/2">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
          Affordable <br /> Price for Car <br /> Servicing
        </h1>
        <p
          className="text-white text-base  md:text-xl w-full md:w-4/5 lg:w-2/5  
        pt-2 md:pt-4 lg:pt-6"
        >
          Ther are many variations of passengers of availabl,but something is
          something
        </p>
        <div className="flex justify-start pt-6 lg:pt-10">
          <button className="btn btn-outline btn-warning mr-4">Warning</button>
          <button className="btn btn-outline btn-warning">Warning</button>
        </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 right-3 md:right-5 bottom-0">
        <a
          href={`#slide${previous}`}
          className="btn btn-circle hover:bg-red-500 hover:border-red-500 mr-2 md:mr-5"
        >
          ❮
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-circle hover:bg-red-500 hover:border-red-500"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
