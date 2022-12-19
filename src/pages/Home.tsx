import React from "react";
import { Header } from "../components/Header/Header";
import { TopSlider } from "../components/HomeTopSlider/TopSlider";
import { HomeColumnMain } from "./Home-Columns/HomeColumnMain";

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <div className="home__content">
          <div className="home__main">
            <TopSlider />
            <HomeColumnMain />
          </div>
          <div className="home__aside"></div>
        </div>
      </div>
    </div>
  );
};
