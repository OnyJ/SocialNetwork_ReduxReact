import Cookies from "js-cookie";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
};

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    error,
  };
};

export const logIn = (user) => {
  return (dispatch) => {
    dispatch(loginRequest(user));
    fetch("https://api-minireseausocial.mathis-dyk.fr/auth/local", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.jwt) {
          dispatch(loginSuccess(response.user));
          Cookies.set("token", response.jwt);
          Cookies.set("user", user);
        } else {
          dispatch(loginFailed(response.message));
        }
      })
      .catch((error) => console.error(error));
  };
};
