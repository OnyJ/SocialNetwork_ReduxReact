import React from "react";
import Post from "../posts/PostComponent";
import PostCreation from "../posts/PostCreationComponent";
import { useSelector } from "react-redux";

const Home = () => {
  const loggedIn = useSelector((state) => state.login.loggedIn);

  return (
    <div className="center">
      <div>
        <h1>Welcome to Birdy.</h1>
        <p>
          This website is a training to Redux and React. We use auth and routing
          to create a small social media website.
        </p>
        {loggedIn ? <PostCreation /> : null}
        <h2>Posts</h2>
        <Post url="https://api-minireseausocial.mathis-dyk.fr/posts" />
      </div>
    </div>
  );
};

export default Home;
