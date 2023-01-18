import React from "react";
import { Sectionsliderskeleton } from "./skelets/SectionSliderSkeleton";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation } from "swiper";
import "swiper/css/navigation";

import "./sectionslider.scss";
import { Slide } from "./Slide";
import { Title } from "../Title/Title";
import { SlideSkeleton } from "./skelets/SlideSkeleton";
import { useGetTopFilmsQuery } from "../../../redux/rtk/homeRtk";
import { ItemTopFilmsResponse } from "../../../models/top-films";

export const Sectionslider = () => {
  const {
    data: topData,
    isSuccess: topSuccess,
    isFetching: topFetching,
    isError: topError,
  } = useGetTopFilmsQuery();

  const swiperNavPrevref = React.useRef(null);
  const swiperNavNextref = React.useRef(null);

  return (
    <div className="sectslider">
      <Title title="Лучшие фильмы подборки" />
      <div className="sectslider__slider">
        {topSuccess && (
          <Swiper
            modules={[Navigation]}
            slidesPerGroup={1}
            slidesPerView={1}
            navigation={{
              prevEl: swiperNavPrevref.current,
              nextEl: swiperNavNextref.current,
            }}
            spaceBetween={10}
            speed={300}
            breakpoints={{
              425: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              620: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {topData?.films.map((item: ItemTopFilmsResponse) => (
              <SwiperSlide key={item.filmId}>
                <Slide item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {topFetching && (
          <Swiper
            modules={[Navigation]}
            slidesPerGroup={1}
            slidesPerView={1}
            navigation={{
              prevEl: swiperNavPrevref.current,
              nextEl: swiperNavNextref.current,
            }}
            spaceBetween={10}
            speed={300}
            breakpoints={{
              425: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              620: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {[...new Array(6)].map((_, i) => (
              <SwiperSlide key={i}>
                <Sectionsliderskeleton />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {topError && (
          <Swiper
            modules={[Navigation]}
            slidesPerGroup={1}
            slidesPerView={1}
            navigation={{
              prevEl: swiperNavPrevref.current,
              nextEl: swiperNavNextref.current,
            }}
            spaceBetween={10}
            speed={300}
            breakpoints={{
              425: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              620: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {[...new Array(6)].map((_, i) => (
              <SwiperSlide key={i}>
                <div className="sectslider__img-error">
                  <div className="sectslider__img-box">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z" />
                    </svg>
                    <p className="sectslider__img-text">Включите VPN</p>
                  </div>
                  <SlideSkeleton />
                </div>
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
