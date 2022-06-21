import { useState, useEffect } from "react";
import Posts from "./Posts/Posts";
import Form from "./Form";
import { useDispatch } from "react-redux";

import { getPosts } from "../features/api/post";
import Navbar from "./Navbar";
import Message from "./Message";

function Home() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <Message />
      <Navbar />

      <main className="container mx-auto font-montserrat border-2 border-slate-100 shadow-lg rounded-lg">
        <div className="flex flex-col-reverse md:flex md:flex-row">
          <div className="w-full md:w-3/4">
            <Posts setCurrentId={setCurrentId} />
          </div>
          <div className="w-full md:w-1/4">
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
