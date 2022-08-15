import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      posts = action.payload.posts;
    },
  },
});
export const { setPosts } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
