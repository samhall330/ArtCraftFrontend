import React from "react";
import {Link, NavLink} from "react-router-dom";

function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
  <div class="container">
    <a href="#" class="navbar-brand">
      
      <img src="AC Logo.png" width="150px" height="auto" alt="Art Craft Logo" class="d-inline-block align-middle mr-2"/>
     
      <span class="text-uppercase font-weight-bold"></span>
    </a>

    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active"><Link class="nav-link" to="">Home <span class="sr-only">(current)</span></Link></li>
        <li class="nav-item"><Link class="nav-link" to="/signup">Sign Up</Link></li>
        <li class="nav-item"><Link class="nav-link" to="/login">Login</Link></li>
        <li class="nav-item"><Link class="nav-link" to="">Contact</Link></li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default NavBar;