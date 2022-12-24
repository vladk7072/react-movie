import React from "react";
import { useGetTopFilmsQuery } from "../../redux/rtk/homeRtk";
import { ItemTopFilmsResponse } from "../../models/top-films";
import { Sectionsliderskeleton } from "./skelets/SectionSliderSkeleton";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation  } from "swiper";
import "swiper/css/navigation";

import "./sectionslider.scss";
import { Slide } from "./Slide";
import { Title } from "../Title/Title";

export const Sectionslider = () => {

  const { data: topData, isSuccess: topSuccess } = useGetTopFilmsQuery();

  const swiperNavPrevref = React.useRef(null);
  const swiperNavNextref = React.useRef(null);

  return (
    <div className="sectslider">
      <Title title="Лучшие фильмы подборки" />
      <div className="sectslider__slider">
        {topSuccess ? (
          <Swiper
            modules={[Navigation ]}
            navigation={{
              prevEl: swiperNavPrevref.current,
              nextEl: swiperNavNextref.current,
            }}
            slidesPerView={5}
            slidesPerGroup={1}
            spaceBetween={30}
            speed={300}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {topData?.films.map((item: ItemTopFilmsResponse) => (
              <SwiperSlide key={item.filmId}>
                <Slide item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: swiperNavPrevref.current,
              nextEl: swiperNavNextref.current,
            }}
            slidesPerView={5}
            slidesPerGroup={1}
            spaceBetween={30}
            speed={300}
          >
            {[...new Array(6)].map((_, i) => (
              <SwiperSlide key={i}>
                <Sectionsliderskeleton />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div className="sectslider__btns">
          <div
            className="sectslider__btn sectslider__btn-prev"
            ref={swiperNavPrevref}
          >
            <svg
              width="8"
              height="11"
              viewBox="0 0 8 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L2 5.5L7 10"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div
            className="sectslider__btn sectslider__btn-next"
            ref={swiperNavNextref}
          >
            <svg
              width="8"
              height="11"
              viewBox="0 0 8 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 10L6 5.5L1 0.999999"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
