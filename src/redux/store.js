import { configureStore } from "@reduxjs/toolkit";
import { profileSlice } from "./features/profile/profile-slice";
import { transactionSlice } from "./features/transaction/transaction-slice";
export const store = configureStore({
  reducer: {
    profile: profileSlice.reducer,
    transactions: transactionSlice.reducer,
  },
});
