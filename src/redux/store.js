import { configureStore } from "@reduxjs/toolkit";
import cashierSlice from "./services/cashierSlice";

export const store = configureStore({
  reducer: {
    cashierSlice: cashierSlice,    
  },
});
