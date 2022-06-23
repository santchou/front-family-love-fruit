import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API = axios.create({
  baseURL: "https://family-love-fruit.herokuapp.com",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await API.get("/api/posts");
  return response.data;
});

export const createPost = createAsyncThunk("post/createPost", async (post) => {
  const response = await API.post("/api/posts", post);
  return response.data;
});

export const updatePost = createAsyncThunk(
  "post/updatePost",
  // { currentId: id, postData: updatedPost }
  async ({ currentId: id, ...postData }) => {
    const response = await API.patch(`/api/posts/${id}`, postData);
    return response.data;
  }
);

export const deletePost = createAsyncThunk("post/deletePost", async (id) => {
  const response = await API.delete(`api/posts/${id}`);
  return response.data;
});

export const likePost = createAsyncThunk("post/likePost", async (id) => {
  const response = await API.patch(`api/posts/${id}/likePost`);
  return response.data;
});
