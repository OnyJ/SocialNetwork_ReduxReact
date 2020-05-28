const initialState = {
  loading: false,
  user: [],
  error: "",
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REGISTER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.user,
      };
    case "FETCH_REGISTER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "SET_REGISTER_DATA":
      return {
        ...state,
        username: action.username,
        email: action.email,
        password: action.password,
      };
    default:
      return state;
  }
};

export default registerReducer;
