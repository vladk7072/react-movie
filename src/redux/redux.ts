import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { homeRtk } from "./rtk/homeRtk";

const mainReducer = combineReducers({
  [homeRtk.reducerPath]: homeRtk.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: mainReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(homeRtk.middleware),
  });
};

export type StoreType = ReturnType<typeof setupStore>;
export type StateType = ReturnType<typeof mainReducer>;
export type DispatchType = StoreType["dispatch"];
