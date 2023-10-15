
import homeSlice from "./slice/homeSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        home: homeSlice
    },
  })

