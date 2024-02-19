import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginInterface } from "./LoginInterface";

export enum Login {
  LOGIN_USER = "LOGIN_USER",
}
const initialState: LoginInterface = {
  loading: false,
  name: "mong", // for user object
  email: null,
  id: null,
  token: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
  roles: [],
  permissions: [],
};

export const authSlice = createSlice({
  initialState,
  name: "LOGIN_USER",
  reducers: {
    logout: () => initialState,
    updateLoggedInUserState: (state, action: PayloadAction<LoginInterface>) => {
      state.name = action.payload?.name;
      state.email = action.payload?.email;
      state.id = action.payload?.id;
      state.token = action.payload?.token;
      state.loading = action.payload?.loading;
      state.error = action.payload?.error;
      state.success = action.payload?.success;
      state.permissions = action?.payload?.permissions;
      state.roles = action.payload.roles;
    },
  },
});

export const { 
    logout,
     updateLoggedInUserState
     } = authSlice.actions;