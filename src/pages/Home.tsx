import React from "react";
import { Footer } from "../components/Footer/Footer";
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
      <Footer />
    </div>
  );
};
