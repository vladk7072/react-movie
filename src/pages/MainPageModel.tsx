import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { HomeContent } from "./Home/HomeContent";
import { Routes, Route, Navigate } from "react-router-dom";
import { Card } from "./Card/Card";
import { Page404 } from "./ErrorPages/Page404";

export const MainPageModel = () => {
  return (
    <div className="main-model main-page">
      <Header />
      <div className="main container">
        <div className="main-model__content">
          <div className="main-model__wrapper">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<HomeContent />} />
              <Route path="/card/*" element={<Card />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </div>
          <div className="main-model__aside"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
