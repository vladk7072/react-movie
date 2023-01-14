import React, { useEffect, useRef, useState } from "react";
import { useDebounce } from "../../../hooks/debounce";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { useLazyGetTopInputSearchQuery } from "../../../redux/rtk/topInputRtk";
import { topInputSearchSlice } from "../../../redux/slices/topInputSearchSlice";

export const TopInput = () => {
  const dispatch = useAppDispatch();
  const { getState, getSuccess, setCount, setFetching, setHidden } =
    topInputSearchSlice.actions;
  const { count } = useAppSelector((state) => state.topInputSearchSlice);

  const [value, setValue] = useState("");
  const debounced = useDebounce(value);
  const [
    getInputSearch,
    { data: searchData, isSuccess: dataSuccess, isFetching: dataFetching },
  ] = useLazyGetTopInputSearchQuery();

  useEffect(() => {
    dispatch(setFetching(dataFetching));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataFetching]);
  
  useEffect(() => {
    dispatch(setCount(1));
    dispatch(setHidden(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced]);

  useEffect(() => {
    getInputSearch({
      keyword: debounced,
      page: count,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced, count]);

  useEffect(() => {
    if (searchData && dataSuccess) {
      dispatch(getState(searchData));
      dispatch(getSuccess(dataSuccess));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchData]);

  const pressButton = (key: string) => {
    if (key === "Enter") {
      setInputVisible(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!event.path.includes(searchBtnRef.current)) {
        setInputVisible(false);
      }
      if (event.path.includes(searchInputRef.current)) {
        setInputVisible(true);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [inputVisible, setInputVisible] = useState(false);
  const setInput = () => {
    if (inputVisible) {
      setInputVisible(false);
    } else {
      setInputVisible(true);
    }
  };

  const searchBtnRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!event.composedPath().includes(searchInputRef.current)) {
        setInputVisible(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="header__input-inner">
      <input
        onKeyUp={(e) => pressButton(e.key)}
        ref={searchInputRef}
        className={
          inputVisible
            ? "header__input header__input-mob header__input-mob--visible"
            : "header__input header__input-mob"
        }
        type="text"
        placeholder="Поиск.."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <svg
        ref={searchBtnRef}
        className="header__input-svg"
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setInput()}
      >
        <path d="M12.771 0C5.72926 0 0 5.72926 0 12.771C0 19.8131 5.72926 25.542 12.771 25.542C19.8131 25.542 25.542 19.8131 25.542 12.771C25.542 5.72926 19.8131 0 12.771 0ZM12.771 23.1843C7.02916 23.1843 2.35772 18.5129 2.35772 12.771C2.35772 7.02922 7.02916 2.35772 12.771 2.35772C18.5128 2.35772 23.1843 7.02916 23.1843 12.771C23.1843 18.5128 18.5128 23.1843 12.771 23.1843Z" />
        <path d="M28.6545 26.9877L21.8956 20.2288C21.4351 19.7683 20.6893 19.7683 20.2287 20.2288C19.7682 20.689 19.7682 21.4356 20.2287 21.8958L26.9875 28.6546C27.2178 28.8848 27.5192 29 27.821 29C28.1224 29 28.4242 28.8848 28.6545 28.6546C29.115 28.1944 29.115 27.4478 28.6545 26.9877Z" />
      </svg>
    </div>
  );
};
