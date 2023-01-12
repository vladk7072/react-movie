import homeSectionPremiersSlice from './slices/homeSectionPremiersSlice';
import homeTopSliderSlice from './slices/homeTopSliderSlice';
import cardSlice from './slices/cardSlice';
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { homeRtk } from "./rtk/homeRtk";
import { cardRtk } from "./rtk/cardRtk";
import { topInputRtk } from './rtk/topInputRtk';
import topInputSearchSlice from './slices/topInputSearchSlice';

const mainReducer = combineReducers({
  [homeRtk.reducerPath]: homeRtk.reducer,
  [cardRtk.reducerPath]: cardRtk.reducer,
  [topInputRtk.reducerPath]: topInputRtk.reducer,
  homeTopSliderSlice,
  homeSectionPremiersSlice,
  cardSlice,
  topInputSearchSlice
});

export const setupStore = () => {
  return configureStore({
    reducer: mainReducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      homeRtk.middleware,
      cardRtk.middleware,
      topInputRtk.middleware
    ],
  });
};

export type StoreType = ReturnType<typeof setupStore>;
export type StateType = ReturnType<typeof mainReducer>;
export type DispatchType = StoreType["dispatch"];