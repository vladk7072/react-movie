import React, { FC } from "react";
import "./topslider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import "./topslider.scss";
import { useAppSelector } from "../../../hooks/redux-hooks";

export const TopSlider: FC = () => {
  const { arrayImages, arrayTitles } = useAppSelector(
    (state) => state.homeTopSliderSlice
  );

  return (
    <Swiper
      className="topslider"
      slidesPerView={1}
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      loop
      autoHeight={true}
      autoplay={{
        delay: 30000000,
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
