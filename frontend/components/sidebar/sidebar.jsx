import React from "react";
import { NavLink, Link } from "react-router-dom";
export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        // If logged out and at home page, display nothing;
        const path = this.props.location.pathname;
        if (!this.props.loggedIn && path === "/") {
            return null;
        }
        if (path.includes("new") || path.includes("edit")) {
            return null;
        }
        return (
            <div className="sidebar-container">
                <div className="sidebar">
                    <ul className="sidebar-items">
                        <NavLink isActive={(match,{pathname})=> pathname==="/"} to="/" className="go-home">
                            <li>Home</li>
                        </NavLink>
                        <li className="public">
                            <p className="public-label">Public</p>
                            <ul className="public-items">
                                <NavLink className="icon-flex" to="/questions">
                                    <li>
                                        <i className="fas fa-globe-asia"></i>
                                        <p>Questions</p>
                                    </li>
                                </NavLink>
                                <NavLink className="public-item" to="/tags">
                                    <li>
                                        <div className="flex-center">
                                            <p className="flex-truncate">
                                                Tags
                                            </p>
                                        </div>
                                    </li>
                                </NavLink>
                                <NavLink className="public-item" to="/users">
                                    <li>
                                        <div className="flex-center">
                                            <p className="flex-truncate">
                                                Users
                                            </p>
                                        </div>
                                    </li>
                                </NavLink>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}