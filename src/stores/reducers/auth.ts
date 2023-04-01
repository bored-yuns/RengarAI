import { HYDRATE } from "next-redux-wrapper";
import { RootState } from "..";
import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  uid: string | undefined;
  email: string | undefined;
  name: string | undefined;
  avatarURL: string | undefined;
  accessToken: string | undefined;
  refresthToken: string | undefined;
  isLoggedIn?: boolean;
}

const initialState: AuthState = {
  uid: undefined,
  email: undefined,
  name: undefined,
  avatarURL: undefined,
  accessToken: undefined,
  refresthToken: undefined,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthState(state) {
      state.uid = undefined;
      state.email = undefined;
      state.name = undefined;
      state.avatarURL = undefined;
      state.accessToken = undefined;
      state.refresthToken = undefined;
      state.isLoggedIn = false;
    },
    setAuthState(state, action) {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.avatarURL = action.payload.avatarURL;
      state.accessToken = action.payload.accessToken;
      state.refresthToken = action.payload.refresthToken;
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {},
});

export const { setAuthState, resetAuthState } = authSlice.actions;
export const authState = (state: RootState) => state.auth;
export default authSlice.reducer;
