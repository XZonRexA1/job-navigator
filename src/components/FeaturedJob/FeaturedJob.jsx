import React from "react";
import "./FeaturedJob.css";
const FeaturedJob = ({ jobData }) => {
  const {
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
        <div style={{ display: "flex" , marginTop: '16px'}}>
          <p>{location}</p>
          <p>{salary}</p>
        </div>
        <button className="btn-details btn-apply">View Details</button>
      </div>
    </div>
  );
};

export default FeaturedJob;
