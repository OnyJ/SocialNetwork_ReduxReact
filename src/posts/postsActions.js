export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILED = "FETCH_POSTS_FAILED";
export const ADD_NEW_POST = "ADD_NEW_POST";
export const DELETE_POST = "DELETE_POST";

export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts,
  };
};

export const fetchPostsFailed = (error) => {
  return {
    type: FETCH_POSTS_FAILED,
    error,
  };
};

export const addNewPost = (post) => {
  return {
    type: ADD_NEW_POST,
    post,
  };
};

export const deletePost = (post) => {
  return {
    type: DELETE_POST,
    post,
  };
};

export const fetchPosts = ({ url }) => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "error") {
          dispatch(fetchPostsFailed(response.message));
        } else {
          dispatch(fetchPostsSuccess(response));
        }
      });
  };
};
