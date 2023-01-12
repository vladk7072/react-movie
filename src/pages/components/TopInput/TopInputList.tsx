import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux-hooks";
import "./../../components/TopInput/topInput.scss"

export const TopInputList = () => {
  const { dataSuccess, films } = useAppSelector(
    (state) => state.topInputSearchSlice
  );

  return (
    <ul className="topInput__wrapper">
      {dataSuccess && films.map((film) => (
        <li key={film.filmId}>
          <Link className="topInput__link" to={`${"/card/" + film.filmId}`}>{film.nameRu}</Link>
        </li>
      ))}
    </ul>
  );
};
