import React, { useEffect, useRef, useState } from "react";
import { useLazyGetPremiersFilmsQuery } from "../../redux/rtk/homeRtk";
import { PremiersSkeleton } from "./skelets/PremiersSkeleton";
import { PaginationSkelet } from "./skelets/PaginationSkelet";
import { Slide } from "./Slide";
import { Title } from "../Title/Title";
import "./sectionpremiers.scss";

export const Sectionpremiers = () => {
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

  const [getPremiers, { data: premiersData, isSuccess: premiersSuccess }] =
    useLazyGetPremiersFilmsQuery();

  const [portion, setPortion] = useState(16);
  const [sliceFrom, setSliceFrom] = useState(0);
  const [countPagination, setCountPagination] = useState(1);
  const [isErrorForLoad, setIsErrorForLoad] = useState(false);
  const [nextDisable, setNextDisable] = useState(false);

  const premiersItemsPortion = premiersData?.items.slice(sliceFrom, portion);
  const setDefaultPagination = () => {
    setPortion(16);
    setSliceFrom(0);
  };

  const [isOpenList, setIsOpenList] = useState(false);
  const [activeMonth, setActiveMonth] = useState(0);
  const [year, setYear] = useState("2022");

  const [cancelValueYear, setCancelValueYear] = useState(false);

  const setClickItem = (i: number) => {
    setCancelValueYear(false);
    setActiveMonth(i);
    setIsOpenList(false);
    setCountPagination(1);
    setNextDisable(false);
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
    setCountPagination(1);
    setNextDisable(false);
    // @ts-ignore
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
    setNextDisable(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setNextPagination = () => {
    // @ts-ignore
    if (premiersData?.total > portion) {
      setSliceFrom(portion);
      setPortion(portion + 16);
      setCountPagination(countPagination + 1);
      // @ts-ignore
      if (premiersData?.total < portion + 16) {
        setNextDisable(true);
      }
    }
  };
  const setPrevPagination = () => {
    // @ts-ignore
    if (sliceFrom > 0) {
      setPortion(portion - 16);
      setSliceFrom(portion - 32);
      setCountPagination(countPagination - 1);
    }
    setNextDisable(false);
  };

  const monthRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!event.path.includes(monthRef.current)) {
        setIsOpenList(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="sectionpremiers">
      <Title title="Найти релизы по дате" />
      <div className="sectionpremiers__inputs">
        <div ref={monthRef} className="sectionpremiers__data-box">
          <div
            className={
              isOpenList
                ? "sectionpremiers__data sectionpremiers__data--active"
                : "sectionpremiers__data"
            }
            onClick={() => setIsOpenList(true)}
          >
            {monthList[activeMonth]}
          </div>
          {isOpenList && (
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
        {premiersSuccess
          ? premiersItemsPortion?.map((item) => (
              <Slide
                key={item.kinopoiskId}
                item={item}
                isErrorForLoad={isErrorForLoad}
                setIsErrorForLoad={setIsErrorForLoad}
              />
            ))
          : [...new Array(4)].map((_, i) => <PremiersSkeleton key={i} />)}
      </div>
      {premiersSuccess ? (
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
            className={
              nextDisable
                ? "sectionpremiers__pagination-btn sectionpremiers__pagination-next sectionpremiers__pagination-btn--diswork"
                : "sectionpremiers__pagination-btn sectionpremiers__pagination-next"
            }
            onClick={() => setNextPagination()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </div>
        </div>
      ) : (
        <div className="sectionpremiers__pagination">
          <PaginationSkelet />
        </div>
      )}
    </div>
  );
};
