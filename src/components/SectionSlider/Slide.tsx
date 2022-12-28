import React, { FC } from "react";
import { ItemTopFilmsResponse } from "./../../models/top-films";
import "./sectionslider.scss";
import { Link } from "react-router-dom";

interface PropsType {
  item: ItemTopFilmsResponse;
}

export const Slide: FC<PropsType> = ({ item }) => {
  return (
    <>
      <Link className="sectslider__image" to={`${"/card/" + item.filmId}`}>
        <img className="sectslider__img" src={item.posterUrlPreview} alt="" />
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
      </Link>
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
