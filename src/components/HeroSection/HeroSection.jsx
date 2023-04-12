import React from "react";
import "./HeroSection.css";
import jobImage from "../../assets/All Images/person.png";
const HeroSection = () => {
  return (
    <div>
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
          <img src={jobImage} alt="job" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
