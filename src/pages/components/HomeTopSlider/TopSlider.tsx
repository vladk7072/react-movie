import React from "react";
import imageSlide2 from "../../../assets/home/top-slide-1.jpg";
import imageSlide1 from "../../../assets/home/top-slide-2.jpg";
import imageSlide3 from "../../../assets/home/top-slide-3.jpg";
import "./topslider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import "./topslider.scss";

export const TopSlider = () => {
  const arrayImages = [imageSlide1, imageSlide2, imageSlide3];
  const arrayTitles = [
    "Фильмы похожие на Большой куш",
    "Лучшие фильмы всех времен",
    "Боевики",
  ];

  return (
    <Swiper
      className="topslider"
      slidesPerView={1}
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      loop
      autoplay={{
        "delay": 3000,
      }}
      speed={500}
    >
      {arrayImages.map((image, i) => (
        <SwiperSlide className="topslider__slide" key={i}>
          <img className="topslider__img" src={image} alt="" />
          <h3 className="topslider__title">{arrayTitles[i]}</h3>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
