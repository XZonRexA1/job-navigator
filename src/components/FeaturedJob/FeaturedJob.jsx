import React from "react";
import "./FeaturedJob.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const FeaturedJob = ({ jobData }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_part_time,
    location,
    salary,
  } = jobData;
  return (
    <div>
      <div className="job-data-container">
        <img src={company_logo} alt="company-logo" />
        <p className="job-title">{job_title}</p>
        <p className="company-name">{company_name}</p>
        <div style={{ display: "flex" }}>
          <p className="remote-or-onsite">{remote_or_onsite}</p>
          <p className="fulltime-or-part-time">{fulltime_or_part_time}</p>
        </div>
        <div style={{ display: "flex", marginTop: "25px" }}>
          <p>
            <span className="icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            {location}
          </p>
          <p>
            <span className="icon">
              <FontAwesomeIcon icon={faDollarSign} />
            </span>
            {salary}
          </p>
        </div>
        <Link to={`/jobDetails/${id}`}>
          <button className="btn-details btn-apply">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedJob;
