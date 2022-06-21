import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

function Posts({ setCurrentId }) {
  const { posts } = useSelector((state) => state.posts);

  return !posts.length ? (
    <div className="flex justify-center items-center">
      <div className="animate-spin w-8 h-8 border-4 rounded-full border-blue-500 relative">
        <div className="absolute w-4 h-4 bg-white -top-1"></div>
      </div>
    </div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts?.map((post) => (
        <Post key={post._id} post={post} setCurrentId={setCurrentId} />
      ))}
    </div>
  );
}

export default Posts;
