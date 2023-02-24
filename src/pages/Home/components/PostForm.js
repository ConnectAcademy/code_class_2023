import React from "react";

const PostForm = ({ onHandleCreatePost }) => {
  return (
    <form className="postForm" onSubmit={onHandleCreatePost}>
      <div>
        <input placeholder="Please enter a title" name="title" />
      </div>
      <div>
        <textarea placeholder="Please say what you are doing" name="desc" />
      </div>
      <button>Post</button>
    </form>
  );
};

export default PostForm;
