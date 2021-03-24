import React from "react";
import {Link} from "react-router-dom";

function NavBar({currentUser, handleLogOut}){

    return(
        <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
        <div className="container">
            <a href="/search" className="navbar-brand">
            <img src="AC Logo.png" width="150px" height="auto" alt="Art Craft Logo" className="d-inline-block align-middle mr-2"/>
            <span className="text-uppercase font-weight-bold"></span>
            </a>
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
                {!currentUser ?
                <ul className="navbar-nav ml-auto">
                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/signup">Sign Up</Link></li>
                </ul> :
                <ul className="navbar-nav ml-auto">
                <li className="nav-item"><Link className="nav-link" to="/projects-list">Projects</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/new-project">New Project</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
                <li className="nav-item"><Link onClick={handleLogOut} className="nav-link" to="/login">Log Out</Link></li>
                
                </ul>}
        </div>
        </div>
        </nav>
    );
};

export default NavBar;