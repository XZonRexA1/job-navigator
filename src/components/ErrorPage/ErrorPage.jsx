import React from "react";
import { Link } from "react-router-dom";
import './ErrorPage.css'
const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1>404</h1>
      <p>Page not found</p>
      <Link className="link" to="/">Go Back Home</Link>
    </div>
  );
};

export default ErrorPage;
