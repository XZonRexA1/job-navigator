import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
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
      <div className="hero-container">
        <div>
          <h1>
            Few Step <br /> Closer To Your <br />
            <span className="span-text">Dream Job</span>
          </h1>
          <p>
            Explore thousands of job opportunities with all the <br />{" "}
            information you need. Its your future. Come find it. Manage all{" "}
            <br /> your job application from start to finish.
          </p>
          <button className="btn-getStarted btn-apply">Get Started</button>
        </div>
        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="job"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
