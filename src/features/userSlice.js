import { createSlice } from "@reduxjs/toolkit";

// slices allow us to separate out our global store into contained slices
// so user slice, basket slice, etc. instead of one global store with everything
// easier to manage and work with

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// selector -allows us to select our user out of the global store
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;