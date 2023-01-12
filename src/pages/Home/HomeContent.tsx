import React from "react";
import { TopSlider } from "../components/HomeTopSlider/TopSlider";
import { Sectionpremiers } from "../components/SectionPremiers/SectionPremiers";
import { Sectionslider } from "../components/SectionSlider/SectionSlider";
import { TopInputList } from "../components/TopInput/TopInputList";
import "../components/TopInput/topInput.scss"

export const HomeContent = () => {
  return (
    <>
      <div className="topInput">
        <TopInputList />
      </div>
      <TopSlider />
      <Sectionslider />
      <Sectionpremiers />
    </>
  );
};
