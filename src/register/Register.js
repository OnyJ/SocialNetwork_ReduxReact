import React from "react";
import { useSelector } from "react-redux";

const Register = () => {
  const RegisterError = () => {
    const error = useSelector((state) => state.error);
    if (error) return <p>{error}</p>;
    // return <></>;
  };

  const ConnectUser = (e) => {
    e.preventDefault();
    if (!RegisterError()) {
      const username = "test";
      dispatch(setRegisterData({ username, email, password }));
    }
  };

  return (
    <div>
      <h1>Sign up</h1>
      <div>{RegisterError()}</div>
      <form onSubmit={ConnectUser()}>
        <input
          type="text"
          name="username"
          value={user.username}
          placeholder="Name"
        />
        <br />
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Register" />
        <br />
      </form>
    </div>
  );
};

export default Register;
