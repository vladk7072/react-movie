import React, { useEffect, useState } from "react";
import { useLazyGetPremiersFilmsQuery } from "../../redux/rtk/homeRtk";
import "./sectionpremiers.scss";

export const Sectionpremiers = () => {
  const [getPremiers, { data: premiersData, isSuccess: premiersSuccess }] =
    useLazyGetPremiersFilmsQuery();

  const [portion, setPortion] = useState(16);
  const [sliceFrom, setSliceFrom] = useState(0);
  const premiersItemsPortion = premiersData?.items.slice(sliceFrom, portion);
  const setDefaultPagination = () => {
    setPortion(16);
    setSliceFrom(0);
  };
  const [countPagination, setCountPagination] = useState(1);
  console.log(premiersData);

  const monthList = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ];
  const monthListFake = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeMonth, setActiveMonth] = useState(0);
  const [year, setYear] = useState("2022");

  const [cancelValueYear, setCancelValueYear] = useState(false);

  const setClickItem = (i: number) => {
    setCancelValueYear(false);
    setActiveMonth(i);
    setIsOpen(false);
    if (year.length === 4) {
      const numYear = Number(year);
      setCancelValueYear(false);
      getPremiers({
        month: monthListFake[i],
        year: numYear,
      });
      setDefaultPagination();
    } else {
      setCancelValueYear(true);
    }
  };

  const setFetch = () => {
    if (year.length === 4) {
      const numYear = Number(year);
      setCancelValueYear(false);
      getPremiers({
        month: monthListFake[activeMonth],
        year: numYear,
      });
      setDefaultPagination();
    } else {
      setCancelValueYear(true);
    }
  };

  useEffect(() => {
    getPremiers({
      month: monthListFake[0],
      year: 2022,
    });
    setDefaultPagination();
    setCountPagination(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setNextPagination = () => {
    // @ts-ignore
    if (premiersData?.total > portion) {
      setSliceFrom(portion);
      setPortion(portion + 16);
      setCountPagination(countPagination + 1);
    }
  };
  const setPrevPagination = () => {
    // @ts-ignore
    if (sliceFrom > 0) {
      setPortion(portion - 16);
      setSliceFrom(portion - 32);
      setCountPagination(countPagination - 1);
    }
  };

  return (
    <div className="sectionpremiers">
      <h2 className="sectionpremiers__title">Найти релизы определенных дат</h2>
      <div className="sectionpremiers__inputs">
        <div className="sectionpremiers__data-box">
          <div
            className="sectionpremiers__data"
            onClick={() => setIsOpen(true)}
          >
            {monthList[activeMonth]}
          </div>
          {isOpen && (
            <ul className="sectionpremiers__data-list">
              {monthList.map((month, i) => (
                <li
                  className={
                    activeMonth === i
                      ? "sectionpremiers__data-item sectionpremiers__data-item--active"
                      : "sectionpremiers__data-item"
                  }
                  key={i}
                  onClick={() => setClickItem(i)}
                >
                  {month}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="sectionpremiers__data-box">
          <input
            value={year}
            onChange={(e) => setYear(e.target.value.replace(/[^0-9.]/g, ""))}
            onBlur={() => setFetch()}
            className={
              cancelValueYear
                ? "sectionpremiers__data sectionpremiers__data-input--error"
                : "sectionpremiers__data"
            }
            maxLength={4}
            placeholder="например: 2020"
          />
          {cancelValueYear && (
            <span className="sectionpremiers__data-input--error-text">
              Введите год в формате: 2022
            </span>
          )}
        </div>
        {premiersSuccess && (
          <div className="sectionpremiers__counter">
            Нашлось: {premiersData?.total} результатов
          </div>
        )}
      </div>
      <div className="sectionpremiers__items">
        {premiersSuccess &&
          premiersItemsPortion?.map((item) => (
            <div className="sectionpremiers__item" key={item.kinopoiskId}>
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
                <div className="sectionpremiers__item-release">
                  Дата релиза: {item.premiereRu}
                </div>
              </div>
            </div>
          ))}
      </div>
      {premiersSuccess && (
        <div className="sectionpremiers__pagination">
          <div
            className={
              sliceFrom === 0
                ? "sectionpremiers__pagination-btn sectionpremiers__pagination-prev sectionpremiers__pagination-btn--diswork"
                : "sectionpremiers__pagination-btn sectionpremiers__pagination-prev"
            }
            onClick={() => setPrevPagination()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </div>
          <div className="sectionpremiers__pagination-count">
            {countPagination}
          </div>
          <div
            className="sectionpremiers__pagination-btn sectionpremiers__pagination-next"
            onClick={() => setNextPagination()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
