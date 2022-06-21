import { TrashIcon } from "@heroicons/react/outline";
import { PencilIcon } from "@heroicons/react/solid";

import moment from "moment";
import { deletePost, likePost } from "../../features/api/post";
import { useDispatch } from "react-redux";

function Post({ post, setCurrentId }) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();

  const handleLikePost = (id) => {
    dispatch(likePost(id));
  };

  const handleDeletePost = (id) => {
    dispatch(deletePost(id));
  };

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>{" "}
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
        &nbsp;Like
      </>
    );
  };

  return (
    <div key={post._id} className="shadow-lg rounded-lg">
      <img
        src={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        alt=""
        className="w-full h-60 object-cover"
      />
      <div>
        <div className="flex items-center justify-center w-full px-2">
          <div className="w-full overflow-x-auto">
            Post By: <strong>{post.name}</strong>
            <p className="mt-2">{moment(post?.createAt).fromNow()}</p>
          </div>

          {user?.result?.googleId === post.creator ||
          user?.result?._id === post.creator ? (
            <div className="relative">
              <PencilIcon
                className="h-4 font-bold cursor-pointer"
                onClick={() => setCurrentId(post._id)}
              />
              <span className="font-bold absolute text-xs top-0 right-4 text-green-500">
                Edit
              </span>
            </div>
          ) : (
            <PencilIcon className="h-4 cursor-not-allowed text-slate-400" />
          )}
        </div>
        <div className="mt-2 mx-2 text-center mb-4 font-bold text-lg bg-slate-100">
          <h5>{post.title}</h5>
        </div>
        <div className="p-2 text-left mb-4 text-xs text-slate-400 overflow-x-auto">
          <p className="text-center ">{post.message}</p>
        </div>
        <hr className="mx-2" />
        <div className="flex justify-around p-2">
          <div
            className="flex justify-center items-center cursor-pointer text-blue-300"
            onClick={() => {
              handleLikePost(post._id);
            }}
          >
            {!user?.result ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 opacity-30 cursor-not-allowed"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
            ) : (
              <Likes />
            )}
          </div>
          {user?.result?.googleId === post.creator ||
          user?.result?._id === post.creator ? (
            <button
              onClick={() => handleDeletePost(post._id)}
              className="flex justify-center items-center text-red-400"
            >
              <TrashIcon className="h-4" />
              &nbsp; Delete
            </button>
          ) : (
            <button className="flex justify-center items-center cursor-not-allowed text-slate-400">
              <TrashIcon className="h-4" />
              &nbsp; Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;
