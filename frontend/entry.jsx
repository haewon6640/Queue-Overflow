import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { login, logout, signup } from "./actions/session_actions";
import Root from "./components/root";
import { fetchPosts,createPost } from "./actions/post_actions";
import { fetchPosts as ajaxfetch } from "./util/post_api_util";;
document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUserId: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.fetchPosts = fetchPosts;
  window.store = store;
  window.logout = logout;
  window.ajaxfetch = ajaxfetch;
  window.createPost = createPost;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
