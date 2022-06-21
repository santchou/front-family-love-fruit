import { createSlice } from "@reduxjs/toolkit";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../api/post";

const initialState = {
  posts: [],
  status: null,
  getPostsStatus: null,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.getPostsStatus = "loading";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.getPostsStatus = "success";
      })
      .addCase(getPosts.rejected, (state) => {
        state.getPostsStatus = "failed";
      })
      .addCase(createPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
        state.status = "success";
      })
      .addCase(createPost.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(updatePost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const newPosts = state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
        state.posts = newPosts;
        state.status = "success";
      })
      .addCase(updatePost.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(deletePost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        const posts = state.posts.filter(
          (post) => post._id !== action.payload._id
        );
        state.posts = posts;
      })
      .addCase(deletePost.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(likePost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(likePost.fulfilled, (state, action) => {
        const posts = state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
        state.posts = posts;
      })
      .addCase(likePost.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default postSlice.reducer;
