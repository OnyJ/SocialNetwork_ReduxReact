import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./registration/Register";
import Login from "./login/Login";
import Profile from "./pages/Profile";
import User from "./pages/User";
import { logIn } from "./redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (Cookies.get("token") && Cookies.get("user"))
      dispatch(logIn(JSON.parse(Cookies.get("user"))));
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/user/:username" component={User} />
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
