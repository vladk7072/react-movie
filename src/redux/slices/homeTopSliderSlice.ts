import { createSlice } from "@reduxjs/toolkit";
import imageSlide2 from "../../assets/home/top-slide-1.jpg";
import imageSlide1 from "../../assets/home/top-slide-2.jpg";
import imageSlide3 from "../../assets/home/top-slide-3.jpg";

const initialState = {
  arrayImages: [imageSlide1, imageSlide2, imageSlide3],
  arrayTitles: [
    "Фильмы похожие на Большой куш",
    "Лучшие фильмы всех времен",
    "Боевики",
  ]
};

export const homeTopSliderSlice = createSlice({
  name: "homeTopSliderSlice",
  initialState,
  reducers: {},
});

export default homeTopSliderSlice.reducer;