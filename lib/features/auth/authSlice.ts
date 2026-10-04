import { createSlice } from "@reduxjs/toolkit";
import { getMe, login, register } from "./authThunks";

interface IUser {
  _id: string;
  email: string;
  userName: string;
  isAdmin: boolean;
}

interface IAuthState {
  user: IUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isAuthReady: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: IAuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isAuthReady: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    //   register
    builder.addCase(register.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    // login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // getMe
    builder.addCase(getMe.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.isAuthReady = false;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isAuthReady = true;
    });

    builder.addCase(getMe.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.isAuthReady = true;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
