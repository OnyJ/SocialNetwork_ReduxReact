import Cookies from "js-cookie";

// Types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

// Actions
export const fetchLoginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const fetchLoginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
};

export const fetchLoginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    error,
  };
};

// Middleware
export const fetchLogIn = (user) => {
  return (dispatch) => {
    dispatch(fetchLoginRequest(user));
    fetch("https://api-minireseausocial.mathis-dyk.fr/auth/local", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          dispatch(fetchLoginFailed(response.message));
        } else {
          dispatch(fetchLoginSuccess(response.user));
          Cookies.set("token", response.jwt);
          Cookies.set("user", user);
        }
      })
      .catch((error) => console.log(error));
  };
};
