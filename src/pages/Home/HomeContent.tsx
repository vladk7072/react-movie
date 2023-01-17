import React from "react";
import { TopSlider } from "../components/HomeTopSlider/TopSlider";
import { Sectionpremiers } from "../components/SectionPremiers/SectionPremiers";
import { Sectionslider } from "../components/SectionSlider/SectionSlider";
import { TopInputList } from "../components/TopInput/TopInputList";
import "../components/TopInput/topInput.scss";
import { useAppSelector } from "../../hooks/redux-hooks";

export const HomeContent = () => {
  const { inputVisible } = useAppSelector((state) => state.topInputSearchSlice);

  return (
    <>
      <div className={inputVisible ? "topInput" : "topInput topInput-static"}>
        <TopInputList />
      </div>
      <TopSlider />
      <Sectionslider />
      <Sectionpremiers />
    </>
  );
};
