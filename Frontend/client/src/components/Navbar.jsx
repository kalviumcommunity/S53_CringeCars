import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/ParentContext";

function NavBar() {
  const {isLoggedIn, setIsLoggedIn} = useContext(AppContext)

  const handleLogout = () => {
    document.cookie = "access_token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const accessTokenCookie = document.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith("access_token="));
    setIsLoggedIn(!!accessTokenCookie);
  }, []);

  return (
    <nav className="navbar-dark">
      <div className="navbar-container">
        <Link to="/landingpage" className="navbar-link">
          Home
        </Link>
        <Link to="/aboutus" className="navbar-link">
          About us
        </Link>
        <Link to="/" className="navbar-link">
          Contact
        </Link>
        {!isLoggedIn && (
          <>
            <Link to="/signup" className="navbar-link">
              Sign up
            </Link>
            <Link to="/login" className="navbar-link">
              Login
            </Link>
          </>
        )}
        {isLoggedIn && (
          <>
            <Link to="/carform" className="navbar-link">
              Post
            </Link>
            <button className="navbar-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
