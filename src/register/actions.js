import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const FETCH_REGISTER_REQUEST = "FETCH_REGISTER_REQUEST";
const FETCH_REGISTER_SUCCESS = "FETCH_REGISTER_SUCCESS";
const FETCH_REGISTER_FAILURE = "FETCH_REGISTER_FAILURE";
const SET_REGISTER_DATA = "SET_REGISTER_DATA";

// const registerData = {
// username: "",
// email: "",
// password: "",
// };

export const setRegisterData = ({ username, email, password }) => {
  return {
    type: SET_REGISTER_DATA,
    username,
    email,
    password,
  };
};

export const fetchRegisterRequest = () => {
  return {
    type: FETCH_REGISTER_REQUEST,
  };
};

export const fetchRegisterSuccess = (user) => {
  return {
    type: FETCH_REGISTER_SUCCESS,
    user,
  };
};

export const fetchRegisterFailure = (error) => {
  return {
    type: FETCH_REGISTER_FAILURE,
    error,
  };
};

export const fetchRegister = (user) => {
  return (dispatch) => {
    dispatch(fetchRegisterRequest(user));
    fetch("https://api-minireseausocial.mathis-dyk.fr/auth/local/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.error) {
          dispatch(
            fetchRegisterFailure(response.message[0].messages[0].message)
          );
        } else {
          Cookies.set("token", response.jwt);
          dispatch(fetchRegisterSuccess(response.user));
        }
      })
      .catch((error) => console.log(error));
  };
};

// function ReturnRegisterData() {
// return {
// };
// }
