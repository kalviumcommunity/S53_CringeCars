import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar-dark">
      <div className="navbar-container">
        <Link to="/landingpage" className="navbar-link">
          Home
        </Link>
        <Link to="/aboutus" className="navbar-link">
          About us
        </Link>
        <Link to='/' className="navbar-link">
          Contact
        </Link>
        <Link to="/signup" className="navbar-link">
          Sign up
        </Link>
        <Link to="/carform" className="navbar-link">
          Post
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
