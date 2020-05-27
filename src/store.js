import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import registerReducer from "./register/reducer";
import { fetchRegister } from "./register/actions";

const store = createStore(
  registerReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  console.log("Store is now ", store.getState());
});

store.dispatch(fetchRegister());

export default store;
