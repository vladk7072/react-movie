import React, { useState, useEffect } from "react";
import { SlideSkeleton } from "../components/SectionPremiers/skelets/SlideSkeleton";
import { Title } from "../components/Title/Title";
import { MovieUndefinded } from "../ErrorPages/MovieUndefinded";
import {
  useLazyGetItemVideosQuery,
  useLazyGetItemFilmQuery,
} from "./../../redux/rtk/cardRtk";
import "./card.scss";

export const Card = () => {
  const [
    getItem,
    { data: itemData, isFetching: dataFetching, isLoading: dataLoading, isError },
  ] = useLazyGetItemFilmQuery();
  const [getVideo, { data: videosData }] = useLazyGetItemVideosQuery();

  const path = document.location.pathname;
  const pathId = path.replace("/card/", "");

  const [hoursLength, setHoursLength] = useState(0);
  const [minutesLength, setMinutesLength] = useState(0);

  useEffect(() => {
    getItem(pathId);
    getVideo(pathId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (itemData?.filmLength) {
      const getTimeFromMins = (mins: number) => {
        setHoursLength(Math.trunc(mins / 60));
        setMinutesLength(mins % 60);
      };
      getTimeFromMins(itemData?.filmLength);
    }
  }, [itemData]);

  const [isMoreDescription, setIsMoreDescription] = useState(false);
  const [isErrorLoadig, setIsErrorLoading] = useState(false);
  
  if (dataFetching && dataLoading) {
    return (
      <div className="card__load-page">
        <div className="header__logo-title">Movie Card Loading</div>
      </div>
    );
  }
  if(isError){
    return(
      <MovieUndefinded pathId={pathId} />
    )
  }

  return (
    <div className="card">
      <div className="container">
        <Title title="Про выбранный кинофильм" />
        <div className="card__item">
          <div className="card__item-image">
            {isErrorLoadig ? (
              <div className="sectslider__img-error">
                <div className="sectslider__img-box">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z" />
                  </svg>
                  <p className="sectslider__img-text">
                    Включите VPN для загрузки изображения и перезагрузите
                    страницу
                  </p>
                </div>
                <SlideSkeleton />
              </div>
            ) : (
              <img
                className="card__item-img"
                src={itemData?.posterUrl}
                onError={() => setIsErrorLoading(true)}
                alt=""
              />
            )}
          </div>
          <div className="card__item-box">
            <h1 className="card__item-title">{itemData?.nameRu}</h1>
            <p className="card__item-text">{itemData?.slogan}</p>
            <div className="card__item-head">
              <div className="card__item-info">
                <h4 className="card__item-info-title">Продолжительность</h4>
                <p className="card__item-info-text">
                  {`${hoursLength}:${
                    minutesLength < 10 ? `0${minutesLength}` : minutesLength
                  }`}
                </p>
              </div>
              <div className="card__item-info">
                <h4 className="card__item-info-title">Год выпуска</h4>
                <p className="card__item-info-text">{itemData?.year}</p>
              </div>
              <div className="card__item-info">
                <h4 className="card__item-info-title">Поддержка 3D</h4>
                <p className="card__item-info-text">
                  {itemData?.has3D ? "Да" : "Нет"}
                </p>
              </div>
              <div className="card__item-info">
                <h4 className="card__item-info-title">Возраст</h4>
                <p className="card__item-info-text">
                  {`${itemData?.ratingAgeLimits.replace("age", "")}+`}
                </p>
              </div>
            </div>
            <div className="card__table">
              <div className="card__table-item">
                <div className="card__table-title">Жанр</div>
                <div className="card__table-text-box">
                  {itemData?.genres.map((genre, index) => (
                    <p className="card__table-text" key={index}>
                      {genre.genre}
                    </p>
                  ))}
                </div>
              </div>
              <div className="card__table-item">
                <div className="card__table-title">Страны</div>
                <div className="card__table-text-box">
                  {itemData?.countries.map((country, index) => (
                    <p className="card__table-text" key={index}>
                      {country.country}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            {itemData?.description && itemData?.shortDescription && (
              <div className="card__table">
                <div className="card__table-title">{itemData?.nameRu}</div>
                <p className="card__table-text card__table-text-mt">
                  {isMoreDescription
                    ? itemData?.description
                    : itemData?.shortDescription}
                </p>
                {isMoreDescription ? (
                  <div
                    className="card__table-text card__table-link"
                    onClick={() => setIsMoreDescription(false)}
                  >
                    Меньше
                  </div>
                ) : (
                  <div
                    className="card__table-text card__table-link"
                    onClick={() => setIsMoreDescription(true)}
                  >
                    Больше
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
