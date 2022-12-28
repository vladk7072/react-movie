import React, { useState, useEffect } from "react";
import { Title } from "../../components/Title/Title";
import { useLazyGetTopItemFilmQuery, useLazyGetTopItemVideosQuery } from "./../../redux/rtk/cardRtk";
import "./card.scss";

export const Card = () => {
  const [getItem, { data: topItemData }] = useLazyGetTopItemFilmQuery();
  const [getVideo, { data: videosData }] = useLazyGetTopItemVideosQuery();

  const path = document.location.pathname;
  const pathId = path.replace("/card/", "");
  console.log(topItemData);

  const [hoursLength, setHoursLength] = useState(0);
  const [minutesLength, setMinutesLength] = useState(0);

  useEffect(() => {
    getItem(pathId);
    getVideo(pathId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(videosData);
  useEffect(() => {
    if (topItemData?.filmLength) {
      const getTimeFromMins = (mins: number) => {
        setHoursLength(Math.trunc(mins / 60));
        setMinutesLength(mins % 60);
      };
      getTimeFromMins(topItemData?.filmLength);
    }
  }, [topItemData]);

  const [isMoreDescription, setIsMoreDescription] = useState(false);

  return (
    <div className="card">
      <div className="container">
        <Title title="Про выбранный кинофильм" />
        <div className="card__item">
          <div className="card__item-image">
            <img
              className="card__item-img"
              src={topItemData?.posterUrl}
              alt=""
            />
          </div>
          <div className="card__item-box">
            <h1 className="card__item-title">{topItemData?.nameRu}</h1>
            <p className="card__item-text">{topItemData?.slogan}</p>
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
                <p className="card__item-info-text">{topItemData?.year}</p>
              </div>
              <div className="card__item-info">
                <h4 className="card__item-info-title">Поддержка 3D</h4>
                <p className="card__item-info-text">
                  {topItemData?.has3D ? "Да" : "Нет"}
                </p>
              </div>
              <div className="card__item-info">
                <h4 className="card__item-info-title">Возраст</h4>
                <p className="card__item-info-text">
                  {`${topItemData?.ratingAgeLimits.replace("age", "")}+`}
                </p>
              </div>
            </div>
            <div className="card__table">
              <div className="card__table-item">
                <div className="card__table-title">Жанр</div>
                <div className="card__table-text-box">
                  {topItemData?.genres.map((genre, index) => (
                    <p className="card__table-text" key={index}>
                      {genre.genre}
                    </p>
                  ))}
                </div>
              </div>
              <div className="card__table-item">
                <div className="card__table-title">Страны</div>
                <div className="card__table-text-box">
                  {topItemData?.countries.map((country, index) => (
                    <p className="card__table-text" key={index}>
                      {country.country}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            {topItemData?.description && topItemData?.shortDescription &&  (
              <div className="card__table">
                <div className="card__table-title">{topItemData?.nameRu}</div>
                <p className="card__table-text card__table-text-mt">
                  {isMoreDescription
                    ? topItemData?.description
                    : topItemData?.shortDescription}
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
