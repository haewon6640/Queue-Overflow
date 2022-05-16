import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser, logout}) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Sign up</Link>
        </nav>
    );
    const welcome = () => (
        <hgroup className="header-group">
            <h2 className="header-name">{currentUser.username}</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    )
    return (
        <nav>
            {currentUser ? welcome() : sessionLinks()}
        </nav>
    );
}