import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav-container">
      <Link style={{ textDecoration: "none" }} to="/">
        <h2>Job Navigator</h2>
      </Link>
      <nav className="nav-link">
        <Link to="/statistics">Statistics</Link>
        <Link to="/applied-jobs">Applied Jobs</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <button className="btn-apply">Start Applying</button>
    </div>
  );
};

export default Header;
