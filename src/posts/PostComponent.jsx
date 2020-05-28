import React, { useEffect } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux";
import DeletePost from "./DeletePost";

const Post = (url) => {
  const { posts, loggedIn, currentUser } = useSelector((state) => ({
    posts: state.posts.posts,
    loggedIn: state.login.loggedIn,
    currentUser: state.login.user,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(url));
  }, []);

  return (
    <div>
      {
        <>
          {posts.length > 0 ? (
            posts
              .slice(0)
              .reverse()
              .map((e) =>
                e.text ? (
                  <div key={e.id}>
                    {e.user && e.user.id && loggedIn ? (
                      <>
                        <>
                          <Link
                            to={{
                              pathname: `/user/${e.user.username
                                .replace(/\s/g, "-")
                                .toLowerCase()}`,
                              state: { userId: e.user.id },
                            }}
                          >
                            {e.user.username}
                          </Link>
                        </>
                        <Route path="/user/:username" />
                      </>
                    ) : (
                      <></>
                    )}{" "}
                    {e.text}{" "}
                    {e.user && loggedIn && e.user.id == currentUser.id ? (
                      <DeletePost postId={e.id} />
                    ) : null}
                  </div>
                ) : null
              )
          ) : (
            <p>No post created</p>
          )}
        </>
      }
    </div>
  );
};

export default Post;
