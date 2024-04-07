import React from "react";
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar-dark">
      <div className="navbar-container">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/signup" className="navbar-link">
          Sign up
        </Link>
        <Link to="/login" className="navbar-link">Login</Link>
        <Link to="/" className="navbar-link">Post</Link>
        <Link to="/" className="navbar-link">About</Link>
        <Link to="/" className="navbar-link">Contact</Link>
      </div>
    </nav>
  );
}

export default NavBar;
