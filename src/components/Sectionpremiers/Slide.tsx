import React, { FC } from "react";
import { PremierItemResponse } from "../../models/premiers-films";
import { SlideSkeleton } from "./SlideSkeleton";

interface PropsType {
  item: PremierItemResponse
  isErrorForLoad: boolean
  setIsErrorForLoad: (arg0: boolean) => void
}

export const Slide: FC<PropsType> = ({item, isErrorForLoad, setIsErrorForLoad}) => {

  // const [loadImage, setLoadImage] = useState(true);

  return (
    <div className="sectionpremiers__item" key={item.kinopoiskId}>
      <div className="sectionpremiers__item-image">
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
            className="sectionpremiers__item-img"
            src={item.posterUrlPreview}
            onError={() => setIsErrorForLoad(true)}
            onLoad={() => console.log("yessss")}
            alt=""
          />
        )}
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
          <a className="sectionpremiers__item-link" href="/">
            Более делатально
          </a>
          <div className="sectionpremiers__item-release">
            Дата релиза: {item.premiereRu}
          </div>
        </div>
      </div>
    </div>
  );
};