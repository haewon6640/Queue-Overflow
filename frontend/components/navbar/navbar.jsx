import React, {useEffect} from "react";
import { Link, Redirect} from "react-router-dom";

export default ({ currentUser, logout, history}) => {
    const handleLogout = (e) => {
        e.preventDefault();
        logout().then(()=><Redirect to="/"/>);
    }
    const sessionLinks = () => (
        <nav className="nav-right-login">
            <Link className="btn btn-nav btn-login" to="/login">Log in</Link>
            <Link className="btn btn-nav btn-signup" to="/signup">Sign up</Link>
        </nav>
    );
    const welcome = () => (
        <nav className="nav-right-logout">
            <Link to={`/users/${currentUser.id}`} className="username">{currentUser.username}</Link>
            <button className="btn btn-nav btn-blue" onClick={handleLogout}>Log Out</button>
        </nav>
    )
    useEffect(() => {
        window.scrollTo(0, 0)
      })
    return (
        <header className="nav-container">
            <div className="nav-inner-container">
                <div className="nav-left">
                    <Link to="/" className="nav-logo">
                        <img className="nav-logo-img" src={window.logo} alt="Flow Overstack" />
                    </Link>
                    <div className="nav-items">
                        <Link className="nav-questions" to="/questions">Questions</Link>
                        <a className="nav-questions" href="https://github.com/haewon6640">GitHub</a>
                        <a className="nav-questions" href="https://www.linkedin.com/in/hae-won-park-64820714a/">LinkedIn</a>
                    </div>
                </div>
                {currentUser ? welcome() : sessionLinks()}
            </div>
        </header>
    );
}