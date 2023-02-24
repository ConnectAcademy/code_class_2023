import React, { useContext, useEffect, useState } from "react";

import { Context } from "../../store/context";
import ReqAuth from "../../components/ReqAuth";
import PostForm from "./components/PostForm";
import api from "../../api/axios";
import PostCard from "./components/PostCard";

const Home = () => {
  const { currentUser } = useContext(Context);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then((res) => setPosts(res));
  }, []);

  const handleAddPost = (e) => {
    e.preventDefault();
    const { title, desc } = e.target;
    const data = {
      title: title.value,
      body: desc.value,
      userId: currentUser.user.id,
    };
    api
      .post("/posts", data)
      .then((res) => api.get("/posts").then((res) => setPosts(res)));
  };
  return (
    <div>
      <PostForm onHandleCreatePost={handleAddPost} />
      {posts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          body={post.body}
          userId={post.userId}
          id={post.id}
          setPosts={setPosts}
        />
      ))}
    </div>
  );
};

export default ReqAuth(Home);
