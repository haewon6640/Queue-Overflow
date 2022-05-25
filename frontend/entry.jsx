import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { login, logout, signup } from "./actions/session_actions";
import Root from "./components/root";
import { fetchPosts} from "./actions/post_actions";
import { fetchPosts as ajaxfetch, fetchPost, createPost } from "./util/post_api_util";
import {createTags} from "./util/tag_api_util";
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
  window.createTags = createTags;
  window.fetchPost = fetchPost;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
