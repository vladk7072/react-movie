import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link className="header__logo" to={"/home"}>
            <div className="header__logo-title">React Movies</div>
          </Link>
          <div className="header__input-inner">
            <input
              className="header__input"
              type="text"
              placeholder="Поиск по {в разработке}"
            />
            <svg
            className="header__input-svg"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.771 0C5.72926 0 0 5.72926 0 12.771C0 19.8131 5.72926 25.542 12.771 25.542C19.8131 25.542 25.542 19.8131 25.542 12.771C25.542 5.72926 19.8131 0 12.771 0ZM12.771 23.1843C7.02916 23.1843 2.35772 18.5129 2.35772 12.771C2.35772 7.02922 7.02916 2.35772 12.771 2.35772C18.5128 2.35772 23.1843 7.02916 23.1843 12.771C23.1843 18.5128 18.5128 23.1843 12.771 23.1843Z"
              />
              <path
                d="M28.6545 26.9877L21.8956 20.2288C21.4351 19.7683 20.6893 19.7683 20.2287 20.2288C19.7682 20.689 19.7682 21.4356 20.2287 21.8958L26.9875 28.6546C27.2178 28.8848 27.5192 29 27.821 29C28.1224 29 28.4242 28.8848 28.6545 28.6546C29.115 28.1944 29.115 27.4478 28.6545 26.9877Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
