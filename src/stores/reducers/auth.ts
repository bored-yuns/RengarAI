import { HYDRATE } from "next-redux-wrapper";
import { RootState } from "..";
import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  authState: boolean;
}

const initialState: AuthState = {
  authState: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState(state, action) {
      state.authState = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setAuthState } = authSlice.actions;
export const selectAuthState = (state: RootState) => state.auth.authState;
export default authSlice.reducer;
