import React from "react";
import { useGetTopFilmsQuery } from "../../redux/rtk/homeRtk";
import { ItemTopFilmsResponse } from "./../../models/top-films";
import { Sectionsliderskeleton } from "./Sectionsliderskeleton";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation  } from "swiper";
import "swiper/css/navigation";

import "./sectionslider.scss";

export const Sectionslider = () => {
  const { data: topData, isSuccess: topSuccess } = useGetTopFilmsQuery();

  const swiperNavPrevref = React.useRef(null);
  const swiperNavNextref = React.useRef(null);

  return (
    <div className="sectslider">
      <h2 className="sectslider__title" ref={swiperNavNextref}>
        Лучшие фильмы подборки
      </h2>

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
                <div className="sectslider__image">
                  <img
                    className="sectslider__img"
                    src={item.posterUrlPreview}
                    alt=""
                  />
                  <svg className="sectslider__rating" viewBox="0 0 200 200">
                    <circle
                      r="80"
                      cx="100"
                      cy="100"
                      fill="none"
                      strokeWidth="12"
                      stroke="#ccc"
                      strokeDasharray="502,4 502,4"
                      strokeLinecap="round"
                    ></circle>
                    <circle
                      r="80"
                      cx="100"
                      cy="100"
                      fill="none"
                      strokeWidth="12"
                      stroke={Number(item.rating) > 8.8 ? "#00C106" : "#FF8000"}
                      strokeLinecap="round"
                      strokeDashoffset="-45"
                      strokeDasharray={`${502.4/100*Number(item.rating)*10} 502.4`}
                    ></circle>
                    <text
                      x="100"
                      y="125"
                      fontFamily="Arial"
                      fontSize="70"
                      textAnchor="middle"
                      fill="#f2f1f2"
                    >
                      {item.rating}
                    </text>
                  </svg>
                  <span className="sectslider__item-length">
                    {item.filmLength}
                  </span>
                </div>
                <h5 className="sectslider__item-title">
                  {item.nameRu}, {item.year}
                </h5>
                <div className="sectslider__item-genres">
                  {item.genres.map((genre, i) => (
                    <div className="sectslider__item-genre" key={i}>
                      {genre.genre}
                    </div>
                  ))}
                </div>
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
