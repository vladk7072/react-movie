import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { topInputSearchSlice } from "../../../redux/slices/topInputSearchSlice";
import "./../../components/TopInput/topInput.scss";

export const TopInputList = () => {
  const { dataSuccess, films, count, pagesCount, fetching, hidden, inputVisible } =
    useAppSelector((state) => state.topInputSearchSlice);
  const { setCount, setHidden } = topInputSearchSlice.actions;
  const dispatch = useAppDispatch();

  const setFetchCount = (page: number) => {
    if (page !== 0) {
      dispatch(setCount(page));
    }
  };
  const setHiddenList = () => {
    dispatch(setHidden(false));
  };

  const topInputListRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!event.composedPath().includes(topInputListRef.current)) {
        dispatch(setHidden(false));
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!dataSuccess) {
    return <>{hidden && <div className="topInput__wrapper topInput__wrapper-non">Ничего не найдено</div>}</>;
  }

  return (
    <>
      {hidden && (
        <div className="topInput__wrapper" ref={topInputListRef}>
          <div className="topInput__btns">
            <div
              className={
                count === 1
                  ? "topInput__btn topInput__btn--dis"
                  : "topInput__btn"
              }
              onClick={() => setFetchCount(count - 1)}
            >
              prev
            </div>
            {pagesCount > 1 && (
              <div className="topInput__count">
                {fetching && (
                  <svg
                    version="1.1"
                    id="L9"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    enable-background="new 0 0 0 0"
                    xmlSpace="preserve"
                  >
                    <path
                      fill="#81becb"
                      d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                    >
                      <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        dur="1s"
                        from="0 50 50"
                        to="360 50 50"
                        repeatCount="indefinite"
                      />
                    </path>
                  </svg>
                )}

                <div>
                  {count} / {pagesCount}
                </div>
              </div>
            )}
            {pagesCount > 0 && (
              <div
                className={
                  count === pagesCount
                    ? "topInput__btn topInput__btn--dis"
                    : "topInput__btn"
                }
                onClick={() => setFetchCount(count + 1)}
              >
                next
              </div>
            )}
          </div>
          {dataSuccess &&
            films.map((film) => (
              <>
                {film.nameRu && (
                  <div key={film.filmId}>
                    <Link
                      className="topInput__link"
                      to={`${"/card/" + film.filmId}`}
                      onClick={() => setHiddenList()}
                    >
                      {film.nameRu}
                    </Link>
                  </div>
                )}
              </>
            ))}
        </div>
      )}
    </>
  );
};
