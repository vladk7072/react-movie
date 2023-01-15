import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TopInputSearchType } from "../../models/top-input-search";

const initialState: TopInputSearchType = {
  films: [],
  keyword: "",
  pagesCount: 1,
  searchFilmsCountResult: 0,
  dataSuccess: false,
  count: 1,
  fetching: false,
  hidden: false,
  inputVisible: false
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
    setCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
    setFetching(state, action: PayloadAction<boolean>) {
      state.fetching = action.payload;
    },
    setHidden(state, action: PayloadAction<boolean>) {
      state.hidden = action.payload;
    },
    setInputVisible(state, action: PayloadAction<boolean>) {
      state.inputVisible = action.payload;
    },
  },
});

export default topInputSearchSlice.reducer;
