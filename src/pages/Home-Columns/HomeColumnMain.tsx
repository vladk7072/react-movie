import React from "react";
import { Sectionpremiers } from "../../components/SectionPremiers/SectionPremiers";
import { Sectionslider } from "../../components/SectionSlider/SectionSlider";

export const HomeColumnMain = () => {
  return (
    <>
      <Sectionslider />
      <Sectionpremiers />
    </>
  );
};
