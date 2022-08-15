import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  userEmail: "",
  userPhoto: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {},
});
export const userReducer = userSlice.reducer;
