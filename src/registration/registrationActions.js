import Cookies from "js-cookie";
import { loginSuccess } from "../login/loginActions";

export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED = "REGISTRATION_FAILED";

export const registrationRequest = () => {
  return {
    type: REGISTRATION_REQUEST,
  };
};

export const registrationSuccess = (user) => {
  return {
    type: REGISTRATION_SUCCESS,
    user,
  };
};

export const registrationFailed = (error) => {
  return {
    type: REGISTRATION_FAILED,
    error,
  };
};

export const register = (user) => {
  return (dispatch) => {
    console.log(user);
    dispatch(registrationRequest(user));
    fetch("https://api-minireseausocial.mathis-dyk.fr/auth/local/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.jwt) {
          dispatch(registrationSuccess(user));
          dispatch(loginSuccess(user));
          Cookies.set("token", response.jwt);
          Cookies.set("user", user);
        } else {
          dispatch(registrationFailed(response.message));
        }
      })
      .catch((error) => console.error(error));
  };
};
