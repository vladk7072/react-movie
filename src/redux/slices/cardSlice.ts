import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateType {
  hoursLength: number
  minutesLength: number
  isMoreDescription: boolean
  isErrorLoading: boolean
}

const initialState: InitialStateType = {
  hoursLength: 0,
  minutesLength: 0,
  isMoreDescription: false,
  isErrorLoading: false,
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
  },
});

export default cardSlice.reducer;
