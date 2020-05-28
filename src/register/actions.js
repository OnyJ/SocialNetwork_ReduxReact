import Cookies from "js-cookie";

const FETCH_REGISTER_REQUEST = "FETCH_REGISTER_REQUEST";
const FETCH_REGISTER_SUCCESS = "FETCH_REGISTER_SUCCESS";
const FETCH_REGISTER_FAILURE = "FETCH_REGISTER_FAILURE";
const registerData = {
  username: "eh7",
  email: "eh7@heheh.com",
  password: "hehehehe7",
};

export const fetchRegisterRequest = () => {
  return {
    type: FETCH_REGISTER_REQUEST,
  };
};

export const fetchRegisterSuccess = (profile) => {
  return {
    type: FETCH_REGISTER_SUCCESS,
    profile,
  };
};

export const fetchRegisterFailure = (error) => {
  return {
    type: FETCH_REGISTER_FAILURE,
    error,
  };
};

export const fetchRegister = () => {
  return (dispatch) => {
    dispatch(fetchRegisterRequest());
    fetch("https://api-minireseausocial.mathis-dyk.fr/auth/local/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
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
      });
  };
};
