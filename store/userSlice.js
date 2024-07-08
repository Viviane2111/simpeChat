// frontend/store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: null,
  username: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
    clearUser(state) {
      state.token = null;
      state.username = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const signup = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3000/auth/signup", {
      username,
      password,
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3000/auth/login", {
      username,
      password,
    });
    dispatch(setUser({ token: response.data.token, username }));
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default userSlice.reducer;
