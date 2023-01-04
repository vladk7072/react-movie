import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateType {
  hoursLength: number
  minutesLength: number
  isMoreDescription: boolean
  isErrorLoading: boolean
  countItemsAside: number
  btnList: boolean
}

const initialState: InitialStateType = {
  hoursLength: 0,
  minutesLength: 0,
  isMoreDescription: false,
  isErrorLoading: false,
  countItemsAside: 6,
  btnList: true
};

export const cardSlice = createSlice({
  name: "cardSlice",
  initialState,
  reducers: {
    setHoursLength(state, action: PayloadAction<number>){
      state.hoursLength = action.payload;
    },
    setMinutesLength(state, action: PayloadAction<number>){
      state.minutesLength = action.payload;
    },
    setIsMoreDescription(state, action: PayloadAction<boolean>){
      state.isMoreDescription = action.payload;
    },
    setIsErrorLoading(state, action: PayloadAction<boolean>){
      state.isErrorLoading = action.payload;
    },
    setCountItemsAside(state, action: PayloadAction<number>){
      state.countItemsAside = action.payload;
    },
    setbtnList(state, action: PayloadAction<boolean>){
      state.btnList = action.payload;
    },
  },
});

export default cardSlice.reducer;
