const initialState = {
  loading: false,
  profile: [],
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
        profile: action.profile,
      };
    case "FETCH_REGISTER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default registerReducer;
