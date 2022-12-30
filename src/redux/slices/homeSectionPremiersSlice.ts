import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateType {
  monthList: string[]
  monthListFake: string[]
  portion: number
  sliceFrom: number
  countPagination: number
  nextDisable: boolean
  isOpenList: boolean
  activeMonth: number
  year: string
}

const initialState: InitialStateType = {
  monthList: [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ],
  monthListFake: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  portion: 16,
  sliceFrom: 0,
  countPagination: 0,
  nextDisable: false,
  isOpenList: false,
  activeMonth: 0,
  year: "2022"
};

export const homeSectionPremiersSlice = createSlice({
  name: "homeSectionPremiersSlice",
  initialState,
  reducers: {
    setPortion(state, action: PayloadAction<number>){
      state.portion = action.payload;
    },
    setSliceFrom(state, action: PayloadAction<number>){
      state.sliceFrom = action.payload;
    },
    setCountPagination(state, action: PayloadAction<number>){
      state.countPagination = action.payload;
    },
    setActiveMonth(state, action: PayloadAction<number>){
      state.activeMonth = action.payload;
    },
    setNextDisable(state, action: PayloadAction<boolean>){
      state.nextDisable = action.payload;
    },
    setIsOpenList(state, action: PayloadAction<boolean>){
      state.isOpenList = action.payload;
    },
    setYear(state, action: PayloadAction<string>){
      state.year = action.payload;
    },
  },
});

export default homeSectionPremiersSlice.reducer;
