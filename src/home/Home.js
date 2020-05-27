import React from "react";

const loggedOutHome = () => (
  <div>
    <h1>Welcome to Birdy</h1>
    <p>This website is a training to Redux and React.</p>
    <p>We use auth and routing to create a small social media website.</p>
    <p>Connect or Sign up to see more stuff</p>
  </div>
);

const loggedInHome = () => (
  <>
    <h1>Birdy</h1>
    <p>Create a New Post [ ]</p>
    <br />
    <p>Posts :</p>
    <p>post 1</p>
    <p>post 2</p>
    <p>post 3</p>
    <p>post 4</p>
  </>
);

const Home = () => {
  return (
    <>{true ? <div>{loggedInHome()}</div> : <div>{loggedOutHome()}</div>}</>
  );
};

export default Home;
