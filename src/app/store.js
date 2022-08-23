import { configureStore } from "@reduxjs/toolkit";
import carReduder from "../features/car/CarSlice";

export const store = configureStore({
  reducer: {
    car: carReduder,
  },
});
