import cardSlice from './slices/cardSlice';
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { homeRtk } from "./rtk/homeRtk";
import { cardRtk } from "./rtk/cardRtk";

const mainReducer = combineReducers({
  [homeRtk.reducerPath]: homeRtk.reducer,
  [cardRtk.reducerPath]: cardRtk.reducer,
  cardSlice
});

export const setupStore = () => {
  return configureStore({
    reducer: mainReducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      homeRtk.middleware,
      cardRtk.middleware,
    ],
  });
};

export type StoreType = ReturnType<typeof setupStore>;
export type StateType = ReturnType<typeof mainReducer>;
export type DispatchType = StoreType["dispatch"];
