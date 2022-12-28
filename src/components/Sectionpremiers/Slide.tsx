import React, { FC } from "react";
import { PremierItemResponse } from "../../models/premiers-films";
import { Link } from "react-router-dom";

interface PropsType {
  item: PremierItemResponse;
}

export const Slide: FC<PropsType> = ({ item }) => {
  return (
    <Link
      className="sectionpremiers__item"
      key={item.kinopoiskId}
      to={`${"/card/" + item.kinopoiskId}`}
    >
      <div className="sectionpremiers__item-image">
        <img
          className="sectionpremiers__item-img"
          src={item.posterUrlPreview}
          alt=""
        />
      </div>
      <div className="sectionpremiers__item-textbox">
        <h4 className="sectionpremiers__item-title">{item.nameRu}</h4>
        <div className="sectionpremiers__item-countries-box">
          <div className="sectionpremiers__item-countries-title">
            {item.countries.length === 1 ? (
              <span>Странa:</span>
            ) : (
              <span>Страны:</span>
            )}
          </div>
          <ul className="sectionpremiers__item-countries">
            {item.countries.map((country, i) => (
              <li className="sectionpremiers__item-country" key={i}>
                {country.country}
              </li>
            ))}
          </ul>
        </div>
        <ul className="sectionpremiers__item-genres">
          {item.genres.map((itemGenre, i) => (
            <li className="sectionpremiers__item-genre" key={i}>
              {itemGenre.genre}
            </li>
          ))}
        </ul>
        <div className="sectionpremiers__item-footer">
          <div className="sectionpremiers__item-link">Более делатально</div>
          <div className="sectionpremiers__item-release">
            Дата релиза: {item.premiereRu}
          </div>
        </div>
      </div>
    </Link>
  );
};
