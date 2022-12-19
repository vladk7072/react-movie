import React from "react";
import { Sectionpremiers } from "../../components/Sectionpremiers/Sectionpremiers";
import { Sectionslider } from "../../components/SectionSlider/Sectionslider";

export const HomeColumnMain = () => {
  return (
    <>
      <Sectionslider />
      <Sectionpremiers />
    </>
  );
};
