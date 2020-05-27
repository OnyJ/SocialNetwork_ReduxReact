import { createStore, compose, applyMiddleware } from "redux";
import registerReducer from "./register/reducer";
import thunkMiddleware from "redux-thunk";
import {
  fetchRegisterRequest,
  fetchRegisterSuccess,
  fetchRegisterFailure,
} from "./register/actions";

const store = createStore(
  registerReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const registerData = {
  username: "eh6",
  email: "eh6@heheh.com",
  password: "hehehehe6",
};

const fetchRegister = () => {
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
          dispatch(fetchRegisterSuccess(response.user));
        }
      });
  };
};

store.subscribe(() => {
  console.log("Store is now ", store.getState());
});

store.dispatch(fetchRegister());

export default store;
