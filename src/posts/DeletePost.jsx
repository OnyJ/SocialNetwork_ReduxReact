import React from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { deletePost } from "../redux";

const DeletePost = ({ postId }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const url = `https://api-minireseausocial.mathis-dyk.fr/posts/${postId}`;
    fetch(url, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          dispatch(deletePost(postId));
        }
      });
  };

  return (
    <span
      onClick={handleClick}
      style={{ cursor: "pointer", color: "orange", fontWeight: "500" }}
    >
      Delete
    </span>
  );
};

export default DeletePost;
