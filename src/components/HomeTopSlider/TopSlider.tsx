import React from "react";
import imageSlide1 from "../../assets/home/top-slide-1.jpg";
import imageSlide2 from "../../assets/home/top-slide-2.jpg";
import imageSlide3 from "../../assets/home/top-slide-3.jpg";
import "./topslider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "./topslider.scss";

export const TopSlider = () => {
  const arrayImages = [imageSlide1, imageSlide2, imageSlide3];
  const arrayTitles = [
    "Лучшие фильмы всех времен",
    "Фильмы похожие на Большой куш",
    "Боевики",
  ];

  return (
    <Swiper
      className="topslider"
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: true }}
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
