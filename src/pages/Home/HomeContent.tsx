import React from "react";
import { TopSlider } from "../../components/HomeTopSlider/TopSlider";
import { Sectionpremiers } from "../../components/SectionPremiers/SectionPremiers";
import { Sectionslider } from "../../components/SectionSlider/SectionSlider";

export const HomeContent = () => {
  return (
    <div className="main-page">
      <TopSlider />
      <Sectionslider />
      <Sectionpremiers />
    </div>
  );
};