import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import {login,logout,signup} from "./actions/session_actions"
import Root from "./components/root"
// import {login} from "./util/session_api_util";
document.addEventListener("DOMContentLoaded",()=>{
    let store;
    if (window.currentUser) {
      const preloadedState = {
        session: { id: window.currentUser.id },
        entities: {
          users: { [window.currentUser.id]: window.currentUser }
        }
      };
        store = configureStore();
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.store = store;
    window.login = login;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
})