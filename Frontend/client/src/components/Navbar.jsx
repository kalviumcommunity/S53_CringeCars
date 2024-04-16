import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle logout
  const handleLogout = () => {
    // Set the expiration date of the access token cookie to a past time
    document.cookie = "access_token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    // Update state to reflect logout
    setIsLoggedIn(false);
  };

  useEffect(() => {
    // Check if access token cookie exists when component mounts
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
        {/* Conditional rendering based on user login status */}
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
