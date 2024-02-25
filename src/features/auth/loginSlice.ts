import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginInterface } from "./LoginInterface";

export enum Login {
  LOGIN_USER = "LOGIN_USER",
}
const initialState: LoginInterface = {
  name: "mong", // for user object
  email: null,
  _id: null,
  token: null, // for storing the JWT
  phone: null,
  address: null,
  role: null,
  permissions: [],
  success: false
};

export const authSlice = createSlice({
  initialState,
  name: "LOGIN_USER",
  reducers: {
    logout: () => initialState,
    updateLoggedInUserState: (state, action: PayloadAction<LoginInterface>) => {
      state.name = action.payload?.name;
      state.email = action.payload?.email;
      state.address = action.payload?.address;
      state.phone = action.payload?.phone;
      state.role = action.payload?.role;
      state.token = action.payload?.token;
      state.success = action.payload?.success;
    },
  },
});

export const { 
    logout,
     updateLoggedInUserState
     } = authSlice.actions;