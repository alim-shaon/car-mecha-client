import React from "react";
import "./Banner.css";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import BannerItem from "../../Shared/BannerItem/BannerItem";

const bannerData = [
  {
    id: 1,
    previous: 6,
    next: 2,
    image: img1,
  },
  {
    id: 2,
    previous: 1,
    next: 3,
    image: img2,
  },
  {
    id: 3,
    previous: 2,
    next: 4,
    image: img3,
  },
  {
    id: 4,
    previous: 3,
    next: 5,
    image: img4,
  },
  {
    id: 5,
    previous: 4,
    next: 6,
    image: img5,
  },
  {
    id: 6,
    previous: 5,
    next: 1,
    image: img6,
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full pb-16 lg:pb-32">
      {bannerData.map((slide) => (
        <BannerItem key={slide.id} slideData={slide}></BannerItem>
      ))}
    </div>
  );
};

export default Banner;
