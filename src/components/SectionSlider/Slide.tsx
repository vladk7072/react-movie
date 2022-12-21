import React, { FC, useState } from "react";
import { ItemTopFilmsResponse } from "./../../models/top-films";
import "./sectionslider.scss";
import { SlideSkeleton } from "./SlideSkeleton";

interface PropsType {
  item: ItemTopFilmsResponse;
}

export const Slide: FC<PropsType> = ({ item }) => {
  const [isErrorForLoad, setIsErrorForLoad] = useState(false);

  return (
    <>
      <div className="sectslider__image">
        {isErrorForLoad ? (
          <div className="sectslider__img-error">
            <div className="sectslider__img-box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z" />
              </svg>
              <p className="sectslider__img-text">Включите VPN</p>
            </div>
            <SlideSkeleton />
          </div>
        ) : (
          <img
            className="sectslider__img"
            src={item.posterUrlPreview}
            alt=""
            onError={() => setIsErrorForLoad(true)}
          />
        )}
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
            strokeDasharray={`${
              (502.4 / 100) * Number(item.rating) * 10
            } 502.4`}
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
        <span className="sectslider__item-length">{item.filmLength}</span>
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
    </>
  );
};
