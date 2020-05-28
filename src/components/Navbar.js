import React from "react";
import { Link } from "react-router-dom";
import LogOut from "../connexion/LogOut";

const loggedOutNavbar = (
  <nav>
    <Link to="/">Home</Link>
    <br />
    <Link to="/login">Log In</Link>
    <br />
    <Link to="/register">Sign Up</Link>
    <br />
  </nav>
);

const loggedInNavbar = (
  <nav>
    <Link to="/">Home</Link>
    <br />
    <Link to="/profile">Profile</Link>
    <br />
    <span onClick={LogOut} className="link">
      Log Out
    </span>
    <br />
  </nav>
);

const Navbar = () => {
  return (
    <>{false ? <div>{loggedInNavbar}</div> : <div>{loggedOutNavbar}</div>}</>
  );
};

export default Navbar;
