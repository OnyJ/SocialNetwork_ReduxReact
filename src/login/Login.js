import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../redux";

const Login = () => {
  const [inputs, setInputs] = useState({
    identifier: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { identifier, password } = inputs;
  const { loggingIn, loggedIn } = useSelector((state) => ({
    loggingIn: state.login.loggingIn,
    loggedIn: state.login.loggedIn,
  }));
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    if (identifier && password) {
      dispatch(logIn(inputs));
    }
  };

  return (
    <div>
      <h1 className="center">Log in</h1>
      <div className="center">
        {loggedIn ? (
          <h2>Connected</h2>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              name="identifier"
              value={inputs.identifier}
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
            />
            <br />
            <input type="submit" value="Log In" />
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
