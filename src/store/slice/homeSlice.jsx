import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.country = action.payload.countries;
    },
  },
});

export const { setCountries } = homeSlice.actions;

export default homeSlice.reducer;
