import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { logIn } from "../redux";

const Navbar = () => {
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const dispatch = useDispatch();
  const logOut = () => {
    Cookies.remove("token", "user");
    dispatch(logIn());
  };

  return (
    <nav>
      <Link to="/">Home </Link>
      {loggedIn ? (
        <>
          <Link to="/profile">Profile </Link>
          <Link to="/login" onClick={logOut}>
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link to="/register">Register </Link> <Link to="/login">Login </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
