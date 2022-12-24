import React, { useEffect } from "react";
import { Title } from "../../components/Title/Title";
import { useLazyGetTopItemFilmQuery } from "./../../redux/rtk/cardRtk";
import "./card.scss";

export const Card = () => {
  const [getItem, { data: topItemData, isSuccess: topItemSuccess }] =
    useLazyGetTopItemFilmQuery();
  // const [getVideos, { data: topItemVideos }] = useLazyGetTopItemVideosQuery();
  const path = document.location.pathname;
  const pathId = path.replace("/card/", "");
  console.log(topItemData);
  // console.log(topItemVideos);

  useEffect(() => {
    getItem(pathId);
    // getVideos(pathId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  {topItemData?.filmLength}
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
          </div>
        </div>
      </div>
    </div>
  );
};
