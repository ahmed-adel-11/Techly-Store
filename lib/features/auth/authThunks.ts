import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// register

interface IRegisterData {
  userName: string;
  email: string;
  password: string;
}

export const register = createAsyncThunk(
  "register/Auth",
  async (userData: IRegisterData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/register", userData);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "registration failed",
      );
    }
  },
);

// login

interface ILoginData {
  email: string;
  password: string;
}
export const login = createAsyncThunk(
  "login/Auth",
  async (userData: ILoginData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/login", userData);

      return response.data.userData;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "registration failed",
      );
    }
  },
);

// getMe

export const getMe = createAsyncThunk(
  "getMe/Auth",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/auth/me");

      return response.data.user;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "registration failed",
      );
    }
  },
);
