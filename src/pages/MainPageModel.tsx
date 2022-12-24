import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { HomeContent } from "./Home/HomeContent";
import { Routes, Route } from "react-router-dom";
import { Card } from "./Card/Card";

export const MainPageModel = () => {
  return (
    <div className="main-model">
      <Header />
      <div className="main container">
        <div className="main-model__content">
          <div className="main-model__wrapper">
            <Routes>
              <Route path="*" element={<HomeContent />} />
              <Route path="/home" element={<HomeContent />} />
              <Route path="/card/*" element={<Card />} />
            </Routes>
          </div>
          <div className="main-model__aside">
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
