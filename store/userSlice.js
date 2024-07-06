// frontend/store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
   token: null,
   user: null,
};

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      setUser(state, action) {
         state.user = action.payload;
      },
      setToken(state, action) {
         state.token = action.payload;
      },
   },
});

export const { setUser, setToken } = userSlice.actions;

// Inscription d'un utilisateur par la connexion vers la route signup
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

// Connexion d'un utilisateur par la connexion vers la route login
export const login = (username, password) => async (dispatch) => {
   try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        username,
        password,
      });
      dispatch(setToken(response.data.token));
      console.log(response.data);
      // dispatch(setUser(response.data.user));
   } catch (error) {
      console.log(error);
   }
};

export default userSlice.reducer;