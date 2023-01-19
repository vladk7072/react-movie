import React, { useEffect, useState } from "react";
import { ScrollToTopOnMount } from "../../helper/RouterUp";
import "./errors.scss";

export const Page404 = () => {
  const [count, setCount] = useState(4);
  setInterval(() => {
    setCount(count - 1);
  }, 1000);
  useEffect(() => {
    const timerId = setTimeout(() => {
      document.location.pathname = "/home";
    }, 4000);
    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card__load-page">
      <ScrollToTopOnMount />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path
          fill="#ff9e68"
          d="M5.5 22c0 1.1-.9 2-2 2s-2-.9-2-2c0-.6.2-1.1.6-1.4.3-.4.8-.6 1.4-.6 1.1 0 2 .9 2 2z"
        />
        <path
          fill="#e67144"
          d="M7.5 18c-1.1 0-2-.9-2-2 0-.6.2-1.1.6-1.4.3-.4.8-.6 1.4-.6"
        />
        <path
          fill="#ff9e68"
          d="M31.5 14.5v-2h-1.2c-.1-.2-.2-.4-.3-.7l.8-.8-1.4-1.4-.8.8c-.2-.1-.4-.2-.7-.3V9h-1.5v3.1c.3-.1.4-.1.6-.1.8 0 1.5.7 1.5 1.5S27.8 15 27 15c-.2 0-.3 0-.5-.1V18H28v-1.2c.2-.1.4-.2.7-.3l.8.8 1.4-1.4-.8-.8c.1-.2.2-.4.3-.7h1.1z"
        />
        <path
          fill="#fff"
          d="M25.5 21h-17c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h17c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1z"
        />
        <path fill="#898b99" d="M14.5 21h5v4h-5z" />
        <path
          fill="#5a5d70"
          d="M7.5 20c0 .6.4 1 1 1h17c.6 0 1-.4 1-1v-2h-19v2z"
        />
        <path
          fill="#40455a"
          d="M13.5 15.5h-3c-.1 0-.3-.1-.4-.2s-.1-.2-.1-.4l.8-4c.1-.3.3-.5.6-.4.3.1.5.3.4.6l-.6 3.4h2.4c.3 0 .5.2.5.5s-.3.5-.6.5z"
        />
        <path
          fill="#40455a"
          d="M12.5 16.5c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5s.5.2.5.5v3c0 .3-.2.5-.5.5zM23.5 15.5h-3c-.1 0-.3-.1-.4-.2s-.1-.2-.1-.4l.8-4c.1-.3.3-.5.6-.4.3.1.5.3.4.6l-.6 3.4h2.4c.3 0 .5.2.5.5s-.3.5-.6.5z"
        />
        <path
          fill="#40455a"
          d="M22.5 16.5c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5s.5.2.5.5v3c0 .3-.2.5-.5.5z"
        />
        <path
          fill="#40455a"
          d="M25.5 21.5h-17c-.8 0-1.5-.7-1.5-1.5V8c0-.8.7-1.5 1.5-1.5h17c.8 0 1.5.7 1.5 1.5v12c0 .8-.7 1.5-1.5 1.5zm-17-14c-.3 0-.5.2-.5.5v12c0 .3.2.5.5.5h17c.3 0 .5-.2.5-.5V8c0-.3-.2-.5-.5-.5h-17zM23.5 25.5h-13c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h13c.3 0 .5.2.5.5s-.2.5-.5.5z"
        />
        <path
          fill="#40455a"
          d="M26.5 18.5h-19c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h19c.3 0 .5.2.5.5s-.2.5-.5.5zM19.5 25.5h-5c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h5c.3 0 .5.2.5.5v4c0 .3-.2.5-.5.5zm-4.5-1h4v-3h-4v3zM6.5 22.5h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5s-.2.5-.5.5zM1.5 22.5h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5s-.2.5-.5.5zM3.5 20.5c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5s.5.2.5.5v1c0 .3-.2.5-.5.5zM3.5 25.5c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5s.5.2.5.5v1c0 .3-.2.5-.5.5zM2.1 21.1c-.1 0-.3 0-.4-.1l-.7-.8c-.2-.2-.2-.5 0-.7s.5-.2.7 0l.7.7c.2.2.2.5 0 .7-.1.1-.2.2-.3.2zM5.6 24.6c-.1 0-.3 0-.4-.1l-.7-.7c-.2-.2-.2-.5 0-.7s.5-.2.7 0l.8.7c.2.2.2.5 0 .7-.1.1-.3.1-.4.1zM4.9 21.1c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7l.7-.7c.2-.2.5-.2.7 0s.2.5 0 .7l-.7.7s-.2.1-.3.1zM1.4 24.6c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7l.7-.7c.2-.2.5-.2.7 0s.2.5 0 .7l-.7.7c-.1.1-.2.1-.3.1z"
        />
        <circle cx="3.5" cy="22" r=".5" fill="#40455a" />
        <path
          fill="#40455a"
          d="M3.5 24.5C2.1 24.5 1 23.4 1 22c0-.7.3-1.3.7-1.8.5-.5 1.1-.7 1.8-.7C4.9 19.5 6 20.6 6 22s-1.1 2.5-2.5 2.5zm0-4c-.4 0-.8.2-1.1.4-.2.3-.4.7-.4 1.1 0 .8.7 1.5 1.5 1.5S5 22.8 5 22s-.7-1.5-1.5-1.5zM5.5 16.5h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5s-.2.5-.5.5zM6.1 15.1c-.1 0-.3 0-.4-.1l-.7-.8c-.2-.2-.2-.5 0-.7s.5-.2.7 0l.7.7c.2.2.2.5 0 .7-.1.1-.2.2-.3.2zM5.4 18.6c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7l.7-.7c.2-.2.5-.2.7 0s.2.5 0 .7l-.7.7c-.1.1-.2.1-.3.1z"
        />
        <path
          fill="#40455a"
          d="M7.5 18.5C6.1 18.5 5 17.4 5 16c0-.7.3-1.3.7-1.8.5-.5 1.1-.7 1.8-.7v1c-.4 0-.8.2-1.1.4-.2.3-.4.7-.4 1.1 0 .8.7 1.5 1.5 1.5v1zM28 18.5h-1.5c-.3 0-.5-.2-.5-.5V9c0-.3.2-.5.5-.5H28c.3 0 .5.2.5.5v.8l.6-.6c.2-.2.5-.2.7 0l1.4 1.4c.2.2.2.5 0 .7l-.5.7h.8c.3 0 .5.2.5.5v2c0 .3-.2.5-.5.5h-.8l.6.6c.2.2.2.5 0 .7l-1.4 1.4c-.2.2-.5.2-.7 0l-.6-.6v.9c-.1.3-.3.5-.6.5zm-1-1h.5v-.7c0-.2.1-.4.3-.5.2-.1.4-.1.6-.2.2-.1.4-.1.6.1l.5.5.7-.7-.5-.5c-.2-.2-.2-.4-.1-.6.1-.2.2-.4.2-.6.1-.2.3-.4.5-.4h.7v-1h-.7c-.2 0-.4-.1-.5-.4-.1-.2-.1-.4-.2-.6-.1-.2-.1-.4.1-.6l.5-.5-.7-.7-.5.7c-.2.2-.4.2-.6.1-.2-.1-.4-.2-.6-.2-.2-.1-.3-.3-.3-.5v-.7H27v8z"
        />
        <path
          fill="#40455a"
          d="M27 15.5c-.2 0-.4 0-.7-.1-.2-.1-.3-.3-.3-.5v-2.8c0-.2.1-.4.3-.5 1.4-.5 2.7.6 2.7 1.9 0 1.1-.9 2-2 2zm0-3v2c.6 0 1-.4 1-1s-.4-1-1-1zM17.5 16.5h-1c-.8 0-1.5-.7-1.5-1.5v-3c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5zm-1-5c-.3 0-.5.2-.5.5v3c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-3c0-.3-.2-.5-.5-.5h-1z"
        />
      </svg>
      <div className="header__logo-title">Страница не найдена</div>
      <div className="card__load-count">
        Переход на главную страницу через: {count}
      </div>
    </div>
  );
};
