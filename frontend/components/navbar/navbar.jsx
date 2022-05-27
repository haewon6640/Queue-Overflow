import React, {useEffect, useState} from "react";
import { Link, Redirect} from "react-router-dom";

export default ({ currentUser, logout, history}) => {
    const [search,setSearch] = useState("")
    const handleLogout = (e) => {
        e.preventDefault();
        logout().then(()=><Redirect to="/"/>);
    }
    function handleSearch(e) {
        if (e.key === "Enter") {
            history.push(`/questions/search?tag_title=${search}`)
        }
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
                <div className="nav-right">
                    <div className="nav-search">
                        <svg className="nav-search-icon" width="18" height="18" viewBox="0 0 18 18"><path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path></svg>
                        <input onKeyDown={handleSearch}  onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search" value={search}/>
                    </div>
                    {currentUser ? welcome() : sessionLinks()}
                </div>
            </div>
        </header>
    );
}