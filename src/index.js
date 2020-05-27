import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
// Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./home/Home";
import LogIn from "./connexion/LogIn";
import Profile from "./profile/Profile";
import OtherProfile from "./profile/OtherProfile";
// Components
import Register from "./register/Register";
// Redux
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <>
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/user/:user_name">
            <OtherProfile />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
