import React from "react";
import { Link, withRouter } from "react-router-dom";

const Footer = (props) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
          });
    }
    const path = props.location.pathname;
    if (path.includes("login") || path.includes("signup")) {
        return null;
    }
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-left">
                    <a className="footer-icon" onClick={scrollToTop}>
                            <svg width="32" height="37" viewBox="0 0 32 37"><path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path><path d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z" fill="#F48024"></path></svg>
                    </a>
                    <div className="navigation">
                        <a className="main-label" onClick={scrollToTop}>
                            Queue Overflow
                        </a>
                        <ul>
                            <Link to="/questions">
                                <li>Questions</li>
                            </Link>
                            <Link to="/users">
                                <li>Users</li>
                            </Link>
                            <a href="https://stackoverflow.com/help">
                                <li>Help</li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="navigation">
                        <a className="main-label" href="https://github.com/haewon6640">
                            Developer
                        </a>
                        <ul>
                            <a href="https://github.com/haewon6640">
                                <li>Github</li>
                            </a>
                            <a href="https://www.linkedin.com/in/hae-won-park-64820714a/">
                                <li>LinkedIn</li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default withRouter(Footer);