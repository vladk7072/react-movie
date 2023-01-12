import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TopInputSearchType } from "../../models/top-input-search";

const initialState: TopInputSearchType = {
  films: [],
  keyword: "",
  pagesCount: 1,
  searchFilmsCountResult: 0,
  dataSuccess: false,
};

export const topInputSearchSlice = createSlice({
  name: "topInputSearchSlice",
  initialState,
  reducers: {
    getState(state, action: PayloadAction<TopInputSearchType>) {
      state.films = action.payload.films;
      state.keyword = action.payload.keyword;
      state.pagesCount = action.payload.pagesCount;
      state.searchFilmsCountResult = action.payload.searchFilmsCountResult;
    },
    getSuccess(state, action: PayloadAction<boolean>) {
      state.dataSuccess = action.payload;
    },
  },
});

export default topInputSearchSlice.reducer;
