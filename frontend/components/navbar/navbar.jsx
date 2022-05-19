import React from "react";
import { Link, Redirect} from "react-router-dom";

export default ({ currentUser, logout, history}) => {
    const handleLogout = (e) => {
        e.preventDefault();
        logout().then(()=><Redirect to="/"/>);
    }
    const sessionLinks = () => (
        <nav className="nav-right">
            <Link className="btn btn-nav btn-login" to="/login">Log in</Link>
            <Link className="btn btn-nav btn-signup" to="/signup">Sign up</Link>
        </nav>
    );
    const welcome = () => (
        <nav className="nav-right">
            <h2 className="header-name">{currentUser.username}</h2>
            <button className="header-button" onClick={handleLogout}>Log Out</button>
        </nav>
    )
    return (
        <header className="nav-container">
            <div className="nav-inner-container">
                <Link to="/" className="nav-logo">
                    <img className="nav-logo-img" src={window.logo} alt="Flow Overstack" />
                </Link>
                <Link to="/questions">Questions</Link>
                {currentUser ? welcome() : sessionLinks()}
            </div>
        </header>
    );
}