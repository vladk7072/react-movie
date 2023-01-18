import React, { FC } from "react";

type PropsType = {
  pathId: string | undefined;
};
export const MovieUndefinded: FC<PropsType> = ({ pathId }) => {
  return (
    <div className="card__load-page">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <g data-name="WWW Browser">
          <path
            fill="#81becb"
            d="M3.81,6v20.1H28.19V6Zm23.38,19.1H4.81V10.8H27.19ZM4.81,9.8V7H27.19V9.8Z"
          />
          <rect width="1.54" height="1" x="18.5" y="7.87" fill="#81becb" />
          <rect width="1.54" height="1" x="21.5" y="7.87" fill="#81becb" />
          <rect width="1.54" height="1" x="24.5" y="7.87" fill="#81becb" />
          <polygon
            fill="#81becb"
            points="9.29 19.4 9.95 17.42 10.62 19.4 11.36 19.4 12.51 15.91 11.6 15.91 10.99 17.82 10.35 15.91 9.57 15.91 8.94 17.82 8.33 15.91 7.4 15.91 8.55 19.4 9.29 19.4"
          />
          <polygon
            fill="#81becb"
            points="14.64 19.4 15.3 17.42 15.97 19.4 16.71 19.4 17.86 15.91 16.95 15.91 16.34 17.82 15.7 15.91 14.92 15.91 14.29 17.82 13.68 15.91 12.75 15.91 13.9 19.4 14.64 19.4"
          />
          <polygon
            fill="#81becb"
            points="20 19.4 20.66 17.42 21.33 19.4 22.07 19.4 23.22 15.91 22.31 15.91 21.7 17.82 21.06 15.91 20.28 15.91 19.65 17.82 19.04 15.91 18.11 15.91 19.27 19.4 20 19.4"
          />
          <path
            fill="#81becb"
            d="M24,19.4a.54.54,0,0,0,.39-.15.56.56,0,0,0,.17-.4.52.52,0,0,0-.17-.39.59.59,0,0,0-.79,0,.52.52,0,0,0-.17.39.54.54,0,0,0,.17.4A.59.59,0,0,0,24,19.4Z"
          />
        </g>
      </svg>
      <div className="header__logo-title card__logo-title">
        {pathId === "/card" ? (
          <>
            Не найдено параметра для запроса фильма
          </>
        ) : (
          <>
            Не найдено фильм с id:
            <span>{pathId}</span>
          </>
        )}
      </div>
    </div>
  );
};
