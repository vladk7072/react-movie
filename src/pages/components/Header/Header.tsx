import React, { FC } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { TopInput } from "../TopInput/TopInput";

export const Header: FC = () => {

  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link className="header__logo" to={"/home"}>
            <div className="header__logo-title">React Movies</div>
          </Link>
          <TopInput />
        </div>
      </div>
    </div>
  );
};
