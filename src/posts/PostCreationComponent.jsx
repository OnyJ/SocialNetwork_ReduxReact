import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { addNewPost } from "../redux";

const PostCreation = () => {
  const userId = useSelector((state) => state.login.user.id);
  const [newPost, setNewPost] = useState({
    text: "",
    user: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ [name]: value, user: userId });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    publish(newPost);
  };

  const publish = (post) => {
    fetch(`https://api-minireseausocial.mathis-dyk.fr/posts`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          dispatch(addNewPost(response));
        }
      });
  };

  return (
    <div className="center">
      <form onSubmit={handleSubmit}>
        <textarea
          name="text"
          rows="3"
          cols="90"
          onChange={handleChange}
          value={newPost.text}
        />
        <br />
        <input type="submit" value="Post" />
      </form>
    </div>
  );
};

export default PostCreation;
