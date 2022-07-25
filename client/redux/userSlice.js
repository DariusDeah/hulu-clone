import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  pending: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.user = action.payload;
    },

    login: (state, action) => {
      state.user = action.payload;
    },

    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { login, logout, createUser } = userSlice.actions;
export const userSelector = (state) => state.userReducer.user;
export default userSlice.reducer;
