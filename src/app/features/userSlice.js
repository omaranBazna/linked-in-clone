import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  userEmail: "",
  userPhoto: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
export const userReducer = userSlice.reducers;
