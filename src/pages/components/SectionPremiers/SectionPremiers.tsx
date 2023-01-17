import React, { useEffect, useRef } from "react";
import { PremiersSkeleton } from "./skelets/PremiersSkeleton";
import { PaginationSkelet } from "./skelets/PaginationSkelet";
import { Slide } from "./Slide";
import { Title } from "../Title/Title";
import "./sectionpremiers.scss";
import { useLazyGetPremiersFilmsQuery } from "../../../redux/rtk/homeRtk";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { homeSectionPremiersSlice } from "../../../redux/slices/homeSectionPremiersSlice";
import { Link } from "react-scroll";

export const Sectionpremiers = () => {
  const {
    monthList,
    monthListFake,
    portion,
    sliceFrom,
    countPagination,
    nextDisable,
    isOpenList,
    activeMonth,
    year,
    cancelValueYear,
  } = useAppSelector((state) => state.homeSectionPremiersSlice);
  const dispatch = useAppDispatch();
  const {
    setPortion,
    setSliceFrom,
    setCountPagination,
    setNextDisable,
    setIsOpenList,
    setActiveMonth,
    setYear,
    setCancelValueYear,
  } = homeSectionPremiersSlice.actions;

  const [
    getPremiers,
    {
      data: premiersData,
      isSuccess: premiersSuccess,
      isFetching: premieresFetching,
      isError: premieresError,
    },
  ] = useLazyGetPremiersFilmsQuery();

  const premiersItemsPortion = premiersData?.items.slice(sliceFrom, portion);
  const setDefaultPagination = () => {
    dispatch(setPortion(16));
    dispatch(setSliceFrom(0));
  };

  const setClickItem = (i: number) => {
    dispatch(setCancelValueYear(false));
    dispatch(setActiveMonth(i));
    dispatch(setIsOpenList(false));
    dispatch(setCountPagination(1));
    dispatch(setNextDisable(false));
    if (year.length === 4) {
      const numYear = Number(year);
      dispatch(setCancelValueYear(false));
      getPremiers({
        month: monthListFake[i],
        year: numYear,
      });
      setDefaultPagination();
    } else {
      dispatch(setCancelValueYear(true));
    }
  };

  const setFetch = () => {
    dispatch(setCountPagination(1));
    dispatch(setNextDisable(false));
    // @ts-ignore
    if (year.length === 4) {
      const numYear = Number(year);
      dispatch(setCancelValueYear(false));
      getPremiers({
        month: monthListFake[activeMonth],
        year: numYear,
      });
      setDefaultPagination();
    } else {
      dispatch(setCancelValueYear(true));
    }
  };

  useEffect(() => {
    getPremiers({
      month: monthListFake[0],
      year: 2022,
    });
    setDefaultPagination();
    dispatch(setCountPagination(1));
    dispatch(setNextDisable(false));

    const handleClickOutside = (event: any) => {
      if (!event.composedPath().includes(monthRef.current)) {
        dispatch(setIsOpenList(false));
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setNextPagination = () => {
    // @ts-ignore
    if (premiersData?.total > portion) {
      dispatch(setSliceFrom(portion));
      dispatch(setPortion(portion + 16));
      dispatch(setCountPagination(countPagination + 1));
      // @ts-ignore
      if (premiersData?.total < portion + 16) {
        dispatch(setNextDisable(true));
      }
    }
  };
  const setPrevPagination = () => {
    // @ts-ignore
    if (sliceFrom > 0) {
      dispatch(setPortion(portion - 16));
      dispatch(setSliceFrom(portion - 32));
      dispatch(setCountPagination(countPagination - 1));
    }
    dispatch(setNextDisable(false));
  };

  const monthRef = useRef(null);

  const pressButton = (key: string) => {
    if (key === "Enter") {
      setFetch();
    }
  };

  const setActionList = (boolean: boolean) => {
    dispatch(setIsOpenList(boolean));
  };
  const setActionYear = (string: string) => {
    dispatch(setYear(string));
  };

  return (
    <div className="sectionpremiers">
      <Title title="Найти релизы по дате" />
      <div className="sectionpremiers__inputs" id="topPremiers">
        <div ref={monthRef} className="sectionpremiers__data-box">
          <div
            className={
              isOpenList
                ? "sectionpremiers__data sectionpremiers__data--active"
                : "sectionpremiers__data"
            }
            onClick={() => setActionList(true)}
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
            onChange={(e) =>
              setActionYear(e.target.value.replace(/[^0-9.]/g, ""))
            }
            onKeyUp={(e) => pressButton(e.key)}
            onBlur={() => setFetch()}
            className={
              cancelValueYear
                ? "sectionpremiers__data sectionpremiers__data-input--error"
                : "sectionpremiers__data"
            }
            maxLength={4}
            placeholder="например: 2022"
          />
          {cancelValueYear && (
            <span className="sectionpremiers__data-input--error-text">
              Введите год в формате: 2022
            </span>
          )}
        </div>
        {premiersSuccess && (
          <>
            <div className="sectionpremiers__counter">
              {premieresFetching ? (
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  enableBackground="new 0 0 0 0"
                >
                  <path
                    fill="#fff"
                    d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                  ></path>
                </svg>
              ) : (
                <>Найдено: {premiersData?.total} результатов</>
              )}
            </div>
          </>
        )}
      </div>
      <div className="sectionpremiers__counter sectionpremiers__counter-mob">
        {premieresFetching ? (
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 0 0"
          >
            <path
              fill="#fff"
              d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
            ></path>
          </svg>
        ) : (
          <>Найдено: {premiersData?.total} результатов</>
        )}
      </div>
      <div className="sectionpremiers__items">
        {premiersSuccess &&
          premiersItemsPortion?.map((item) => (
            <Slide key={item.kinopoiskId} item={item} />
          ))}
        {premieresFetching &&
          [...new Array(4)].map((_, i) => <PremiersSkeleton key={i} />)}
        {premieresError &&
          [...new Array(4)].map((_, i) => (
            <div
              className="sectslider__img-error sectslider-er__img-error"
              key={i}
            >
              <div className="sectslider__img-box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z" />
                </svg>
                <p className="sectslider__img-text">Включите VPN</p>
              </div>
            </div>
          ))}
      </div>
      {premiersSuccess ? (
        <>
          {premiersData?.total === 0 ? (
            <></>
          ) : (
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
              <Link
                to="topPremiers"
                duration={500}
                smooth={true}
                offset={-20}
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
              </Link>
            </div>
          )}
        </>
      ) : (
        <div className="sectionpremiers__pagination">
          <PaginationSkelet />
        </div>
      )}
    </div>
  );
};
