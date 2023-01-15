import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { Title } from "../components/Title/Title";
import { MovieUndefinded } from "../ErrorPages/MovieUndefinded";
import {
  useLazyGetItemVideosQuery,
  useLazyGetItemFilmQuery,
} from "./../../redux/rtk/cardRtk";
import "./card.scss";
import { cardSlice } from "../../redux/slices/cardSlice";
import "yet-another-react-lightbox/styles.css";
import { TopInputList } from "../components/TopInput/TopInputList";

export const Card = () => {
  const { hoursLength, minutesLength, isMoreDescription, isErrorLoading } =
    useAppSelector((state) => state.cardSlice);
  const {
    setHoursLength,
    setMinutesLength,
    setIsMoreDescription,
    setIsErrorLoading,
  } = cardSlice.actions;
  const dispatch = useAppDispatch();
  const [
    getItem,
    {
      data: itemData,
      isFetching: dataFetching,
      isLoading: dataLoading,
      isError,
    },
  ] = useLazyGetItemFilmQuery();
  const [getVideo, { data: videosData, isSuccess: videosSuccess }] =
    useLazyGetItemVideosQuery();

  const path = document.location.pathname;
  const pathId = path.replace("/card/", "");

  useEffect(() => {
    getItem(pathId);
    getVideo(pathId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (itemData?.filmLength) {
      const getTimeFromMins = (mins: number) => {
        dispatch(setHoursLength(Math.trunc(mins / 60)));
        dispatch(setMinutesLength(mins % 60));
      };
      getTimeFromMins(itemData?.filmLength);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemData]);

  if (dataFetching && dataLoading) {
    return (
      <div className="card__load-page">
        <div className="header__logo-title">Загрузка карточки кинофильма</div>
      </div>
    );
  }
  if (isError) {
    return <MovieUndefinded pathId={pathId} />;
  }

  const visibleDescription = (boolean: boolean) => {
    dispatch(setIsMoreDescription(boolean));
  };
  const setErrorLoadImg = (boolean: boolean) => {
    dispatch(setIsErrorLoading(boolean));
  };

  return (
    <div className="card">
      <div className="topInput">
        <TopInputList />
      </div>
      <Title title="О выбранном кинофильме" />
      <div className="card__item">
        <div className="card__item-image">
          {isErrorLoading ? (
            <div className="sectslider__img-error card__img-error">
              <div className="sectslider__img-box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z" />
                </svg>
                <p className="sectslider__img-text">
                  Включите VPN для загрузки изображения и перезагрузите страницу
                </p>
              </div>
            </div>
          ) : (
            <>
              <img
                className="card__item-img"
                src={itemData?.posterUrl}
                onError={() => setErrorLoadImg(true)}
                alt=""
              />
            </>
          )}
          {videosSuccess && videosData?.total === 0 && (
            <div className="trailer__title">Трейлеры не найдены</div>
          )}
          {videosSuccess && videosData && (
            <div className="trailer">
              <ul className="trailer__list">
                {videosData.items.map((item, index) => (
                  <li className="trailer__item" key={index}>
                    {item.site === "YOUTUBE" && (
                      <div className="trailer__player">
                        <h6 className="trailer__player-title">{item.name}</h6>
                        <ReactPlayer url={item.url} controls={true} />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="card__item-box">
          <img
            className="card__item-img card__item-img-mob"
            src={itemData?.posterUrl}
            onError={() => setErrorLoadImg(true)}
            alt=""
          />
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
              <div className="card__table-title">Описание</div>
              <p className="card__table-text card__table-text-mt">
                {isMoreDescription
                  ? itemData?.description
                  : itemData?.shortDescription}
              </p>
              {isMoreDescription ? (
                <div
                  className="card__table-text card__table-link"
                  onClick={() => visibleDescription(false)}
                >
                  Меньше
                </div>
              ) : (
                <div
                  className="card__table-text card__table-link"
                  onClick={() => visibleDescription(true)}
                >
                  Больше
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
