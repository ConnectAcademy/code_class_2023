import React, { useContext, useEffect, useRef, useState } from "react";

import api from "../../../api/axios";
import { Context } from "../../../store/context";

const PostCard = ({ userId, title, body, id, setPosts }) => {
  const { currentUser } = useContext(Context);
  const [postedBy, setPostedBy] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [titleInput, setTitleInput] = useState(title);
  const [desc, setDesc] = useState(body);

  useEffect(() => {
    api.get(`/users/${userId}`).then((res) => setPostedBy(res));
  }, []);

  const handlePostDelete = (postId) => {
    api
      .delete(`/posts/${postId}`)
      .then((res) => api.get("/posts").then((res) => setPosts(res)));
  };

  const editPost = () => {
    const data = {
      title: titleInput,
      body: desc,
      userId,
    };
    api.put(`/posts/${id}`, data).then((res) => {
      console.log(res);
      api.get("/posts").then((res) => {
        setPosts(res);
        setIsEditing(false);
      });
    });
  };

  return (
    <div className="postCard">
      <div className="buttonHeaderConatiner">
        {!isEditing ? (
          <h3>
            {title} {isEditing && "editing..."}
          </h3>
        ) : (
          <div>
            <input
              value={isEditing ? titleInput : title}
              onChange={(e) => setTitleInput(e.target.value)}
            />
          </div>
        )}
        {userId === currentUser.user.id && (
          <div>
            <button
              className="editButton"
              onClick={() => {
                if (!isEditing) {
                  setIsEditing(true);
                } else {
                  editPost();
                }
              }}
            >
              {isEditing ? "SAVE" : "EDIT"}
            </button>
            <button
              className="deleteButton"
              onClick={() => handlePostDelete(id)}
            >
              DELETE
            </button>
          </div>
        )}
      </div>
      {!isEditing ? (
        <h4>{body}</h4>
      ) : (
        <textarea
          value={isEditing ? desc : body}
          onChange={(e) => setDesc(e.target.value)}
        />
      )}
      <p>
        Posted by: {postedBy && postedBy.firstname}{" "}
        {postedBy && postedBy.lastname}
      </p>
    </div>
  );
};

export default PostCard;
