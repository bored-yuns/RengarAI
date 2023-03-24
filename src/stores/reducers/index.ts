import { PayloadAction, combineReducers } from "@reduxjs/toolkit";

import { authSlice } from "./auth";

const reducer = (state: any, action: PayloadAction<any>) => {
  return combineReducers({
    [authSlice.name]: authSlice.reducer,
  })(state, action);
};

export default reducer;
