/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


const BASE_URL = "http://localhost:4000/users";

const savedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: savedUser ? savedUser : null,
  isAuthenticated: savedUser ? true : false,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.get(BASE_URL);

      const foundUser = response.data.find(
        (user) =>
          user.email === credentials.email &&
          user.password === credentials.password
      );

      if (!foundUser) {
        return rejectWithValue("Invalid email or password");
      }

      return foundUser;
    } catch (error) {
      return rejectWithValue("Server error");
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(BASE_URL, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue("Registration failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        toast.success("Login successful!");

        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            toast.success("Registration successful!");
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            toast.error(action.payload);
        });
  },
});


export const { logout } = authSlice.actions;

export default authSlice.reducer;
